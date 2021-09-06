const Pool = require('pg').Pool;
require('dotenv').config();

// Development configuration
const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

// Production configuration
const proConfig = process.env.DATABASE_URL; //heroku addons
const ssl = '?sslmode=no-verify';

const pool = new Pool({
	connectionString:
		process.env.NODE_ENV === 'production' ? proConfig + ssl : devConfig,
});

module.exports = pool;
