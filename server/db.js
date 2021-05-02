const Pool = require('pg').Pool;

const pool = new Pool({
	user: 'postgres',
	password: 'Gr44spurv',
	host: 'localhost',
	port: '5432',
	database: 'stepcount',
});

module.exports = pool;
