const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const path = require('path');
const PORT = process.env.PORT || 5000;

// enable ssl redirect
app.use(sslRedirect());

// Middleware
app.use(cors());
app.use(express.json()); // req.body

if (process.env.NODE_ENV === 'production') {
	//server static content
	// npm run build
	app.use(express.static(path.join(__dirname, 'client/build')));
}

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/dashboard', require('./routes/dashboard'));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(PORT, () => {
	console.log(`Server has started on port ${PORT}`);
});
