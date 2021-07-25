const express = require('express');
const router = express.Router();

const pool = require('../db');
const validInfo = require('../middleware/validInfo');

// register route

router.post('/register', validInfo, async (req, res) => {
	const { email, name, password } = req.body;

	try {
		const user = await pool.query('SELECT * FROM users WHERE user_email = $1', [
			email,
		]);

		if (user.rows.length > 0) {
			return res.status(401).json('User already exist!');
		}

		let newUser = await pool.query(
			'INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *',
			[name, email, password]
		);

		return res.json(newUser.rows[0]);
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
			return res.status(401).json('Invalid Credential');
		}

		if (!password) {
			return res.status(401).json('Invalid Credential');
		}

		return res.json(user.rows[0]);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

module.exports = router;
