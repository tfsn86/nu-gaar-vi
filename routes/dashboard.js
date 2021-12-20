const router = require('express').Router();
const authorize = require('../middleware/authorization');
const validDataInput = require('../middleware/validDataInput');
const pool = require('../db');

// Get all step counts
router.get('/steps', authorize, async (req, res) => {
	try {
		const allUserStepCounts = await pool.query(
			'SELECT u.user_name, s.step_id, s.steps, s.date_count FROM users AS u LEFT JOIN stepstable AS s ON u.user_id = s.user_id WHERE u.user_id = $1 ORDER BY s.date_count DESC',
			[req.user.id]
		);
		res.json(allUserStepCounts.rows);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server error');
	}
});

// Get 7 step count inputs (weekly)
router.post('/weeklysteps', authorize, async (req, res) => {
	try {
		const { weeklyInput } = req.body;

		const weeklyUserStepCounts = await pool.query(
			"SELECT u.user_name, s.step_id, s.steps, s.date_count FROM users AS u LEFT JOIN stepstable AS s ON u.user_id = s.user_id WHERE u.user_id = $1 AND date_part('week', s.date_count::date) = $2 ORDER BY s.date_count DESC",
			[req.user.id, weeklyInput]
		);
		res.json(weeklyUserStepCounts.rows);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server error');
	}
});

// Get a step count
router.get('/steps/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const step = await pool.query(
			'SELECT * FROM stepstable WHERE step_id = $1',
			[id]
		);

		res.json(step.rows[0]);
	} catch (error) {
		console.error(error.message);
	}
});

// Create a step count
router.post('/steps', authorize, validDataInput, async (req, res) => {
	try {
		const { steps, startDate } = req.body;
		const date = await pool.query(
			'SELECT * FROM stepstable WHERE date_count = $1 AND user_id = $2',
			[startDate, req.user.id]
		);

		if (date.rows.length > 0) {
			return res
				.status(401)
				.json('Der er allerede indtastet skridt for denne dato!');
		}

		const newSteps = await pool.query(
			'INSERT INTO stepstable (user_id, steps, date_count) VALUES($1, $2, $3) RETURNING *',
			[req.user.id, steps, startDate]
		);

		res.json(newSteps.rows[0]);
	} catch (error) {
		console.error(error.message);
	}
});

// Update a step count
router.put('/steps/:id', authorize, async (req, res) => {
	try {
		const { id } = req.params;
		const { steps } = req.body;

		const updateStep = await pool.query(
			'UPDATE stepstable SET steps = $1 WHERE step_id = $2 AND user_id = $3 RETURNING *',
			[steps, id, req.user.id]
		);

		// if (updateStep.rows.length === 0) {
		// 	return res.json('This step count is not yours');
		// }

		res.json(`Step count was updated!`);
	} catch (error) {
		console.error(error.message);
	}
});

// Delete a step count
router.delete('/steps/:id', authorize, async (req, res) => {
	try {
		const { id } = req.params;

		const deleteStep = await pool.query(
			'DELETE FROM stepstable WHERE step_id = $1 AND user_id = $2 RETURNING *',
			[id, req.user.id]
		);

		if (deleteStep.rows.length) {
			res.json('This step count is not yours!');
		}

		res.json(`Step count was deleted!`);
	} catch (error) {
		console.error(error.message);
	}
});

module.exports = router;
