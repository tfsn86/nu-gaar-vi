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

app.use('/dashboard', require('./routes/dashboard'));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(PORT, () => {
	console.log(`Server has started on port ${PORT}`);
});
