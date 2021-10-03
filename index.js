const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const path = require('path');
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // req.body

// app.use(express.static(path.join(__dirname, 'client/build')));

if (process.env.NODE_ENV === 'production') {
	//server static content
	// npm run build
	app.use(express.static(path.join(__dirname, 'client/build')));
}

app.use((req, res, next) => {
	if (process.env.NODE_ENV === 'production') {
		if (req.headers.host === 'nu-gaar-vi.herokuapp.com')
			return res.redirect(301, 'https://nugårvi.dk');
		if (req.headers['x-forwarded-proto'] !== 'https')
			return res.redirect('https://' + req.headers.host + req.url);
		else return next();
	} else return next();
});

console.log(__dirname);
console.log(path.join(__dirname, 'client/build'));

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/dashboard', require('./routes/dashboard'));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(PORT, () => {
	console.log(`Server has started on port ${PORT}`);
});
