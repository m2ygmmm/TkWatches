const { Pool } = require('pg');
require('dotenv').config()

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASS,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DATABASE,
    ssl: {
        rejectUnauthorized: false
    }
});

const query = (text, params, callback) => {
    return pool.query(text, params, callback)
}

module.exports = {query};