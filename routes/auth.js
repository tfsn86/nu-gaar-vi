const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const pool = require('../db');
const validInfo = require('../middleware/validInfo');
const jwtGenerator = require('../utils/jwtGenerator');
const jwt = require('jsonwebtoken');
const authorize = require('../middleware/authorization');
const sendEmail = require('../utils/sendMail');

// forgot password route
router.patch('/forgot-password', async (req, res) => {
	const { email } = req.body;

	try {
		const user = await pool.query('SELECT * FROM users WHERE user_email = $1', [
			email,
		]);
		if (user.rows.length < 1) {
			return res
				.status(404)
				.json('Email med link til ændring af kodeord kan ikke sendes!');
		} else {
			const resetLink = jwt.sign(
				{ user: user.rows[0].user_email },
				process.env.jwtSecret,
				{ expiresIn: '15m' }
			);
			await pool.query(
				'UPDATE users SET pw_resetlink = $1 WHERE user_email = $2',
				[resetLink, email]
			);

			const userEmail = user.rows[0].user_email;

			// Function sending email to user requesting a new password
			sendEmail(userEmail, resetLink);

			res.status(200).json('Se din mail for nulstilling af dit kodeord');
		}
	} catch (err) {
		console.error(err);
		res.status(500).send('Server error');
	}
});

router.patch('/reset-password/:token', async (req, res) => {
	const resetLink = req.params.token;
	const { newPassword } = req.body;

	if (resetLink) {
		jwt.verify(resetLink, process.env.jwtSecret, (err, decodedToken) => {
			if (err) {
				res.send(err.message);
			}
		});
	}

	try {
		const user = await pool.query(
			'SELECT * FROM users WHERE pw_resetlink = $1',
			[resetLink]
		);

		if (!user) {
			res.status(400).send('No user found with this link');
		}

		const salt = await bcrypt.genSalt(10);
		const bcryptPassword = await bcrypt.hash(newPassword, salt);

		const updateUserPW = await pool.query(
			'UPDATE users SET pw_resetlink = NULL, user_password = $1 WHERE user_email = $2 RETURNING *',
			[bcryptPassword, user.rows[0].user_email]
		);

		res.status(200).json({ message: 'Kodeord er opdateret' });
	} catch (err) {
		res.status(500).send('Server Error');
	}
});

// register route
router.post('/register', validInfo, async (req, res) => {
	const { email, name, password } = req.body;

	try {
		const user = await pool.query('SELECT * FROM users WHERE user_email = $1', [
			email,
		]);

		if (user.rows.length > 0) {
			return res.status(401).json('Bruger findes allerede!');
		}

		const salt = await bcrypt.genSalt(10);
		const bcryptPassword = await bcrypt.hash(password, salt);

		let newUser = await pool.query(
			'INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *',
			[name, email, bcryptPassword]
		);

		const jwtToken = jwtGenerator(newUser.rows[0].user_id);

		return res.json({ jwtToken });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

// login route
router.post('/login', validInfo, async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await pool.query('SELECT * FROM users WHERE user_email = $1', [
			email,
		]);

		if (user.rows.length === 0) {
			return res.status(401).json('Email eller kodeord er ugyldig!');
		}

		const validPassword = await bcrypt.compare(
			password,
			user.rows[0].user_password
		);

		if (!validPassword) {
			return res.status(401).json('Email eller kodeord er ugyldig!');
		}

		const jwtToken = jwtGenerator(user.rows[0].user_id);

		return res.json({ jwtToken });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

router.post('/verify', authorize, (req, res) => {
	try {
		res.json(true);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

module.exports = router;
