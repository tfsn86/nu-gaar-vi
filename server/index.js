const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

// Middleware
app.use(cors());
app.use(express.json()); // req.body

// Routes

// Create a step count
app.post('/steps', async (req, res) => {
	try {
		const { steps } = req.body;
		const newSteps = await pool.query(
			'INSERT INTO steps (steps) VALUES($1) RETURNING *',
			[steps]
		);

		res.json(newSteps.rows[0]);
	} catch (error) {
		console.error(error.message);
	}
});

app.listen(5000, () => {
	console.log('Server has started on port 5000');
});
