const { Pool } = require('pg');
require('dotenv').config()

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASS,
    host: 'localhost',
    port: 5432,
    database: process.env.POSTGRES_DATABASE
});

const query = (text, params, callback) => {
    return pool.query(text, params, callback)
}

module.exports = {query};