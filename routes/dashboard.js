const router = require('express').Router();
const pool = require('../db');

// Create a step count
router.post('/steps', async (req, res) => {
	try {
		const { steps } = req.body;

		const newSteps = await pool.query(
			'INSERT INTO stepstable (steps) VALUES($1) RETURNING *',
			[steps]
		);

		res.json(newSteps.rows[0]);
	} catch (error) {
		console.error(error.message);
	}
});

// Get all step counts
router.get('/steps', async (req, res) => {
	try {
		const allSteps = await pool.query(
			'SELECT * FROM stepstable ORDER BY date_count DESC'
		);
		res.json(allSteps.rows);
	} catch (error) {
		console.error(error.message);
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

// Update a step count
router.put('/steps/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const { steps } = req.body;

		// eslint-disable-next-line
		const updateStep = await pool.query(
			'UPDATE stepstable SET steps = $1 WHERE step_id = $2',
			[steps, id]
		);

		res.json(`Step count on step_id ${id} was updated!`);
	} catch (error) {
		console.error(error.message);
	}
});

// Delete a step count
router.delete('/steps/:id', async (req, res) => {
	try {
		const { id } = req.params;

		// eslint-disable-next-line
		const deleteStep = await pool.query(
			'DELETE FROM stepstable WHERE step_id = $1',
			[id]
		);

		res.json(`Step count on step_id ${id} was deleted!`);
	} catch (error) {
		console.error(error.message);
	}
});

module.exports = router;
