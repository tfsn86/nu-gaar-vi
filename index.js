const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const path = require('path');
const PORT = process.env.PORT || 5000;

// process.env.PORT
// process.env.NODE_ENV => production or undefined

// Middleware
app.use(cors());
app.use(express.json()); // req.body

// app.use(express.static(path.join(__dirname, 'client/build')));

if (process.env.NODE_ENV === 'production') {
	//server static content
	// npm run build
	app.use(express.static(path.join(__dirname, 'client/build')));
}

console.log(__dirname);
console.log(path.join(__dirname, 'client/build'));

// Routes

// Create a step count
app.post('/steps', async (req, res) => {
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

// Get step counts
app.get('/steps', async (req, res) => {
	try {
		const allSteps = await pool.query('SELECT * FROM stepstable');
		res.json(allSteps.rows);
	} catch (error) {
		console.error(error.message);
	}
});

// Get a step count
app.get('/steps/:id', async (req, res) => {
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
app.put('/steps/:id', async (req, res) => {
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
app.delete('/steps/:id', async (req, res) => {
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

app.listen(PORT, () => {
	console.log(`Server has started on port ${PORT}`);
});
