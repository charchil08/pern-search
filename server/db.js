const Pool = require("pg").Pool;

const options = {
    user: 'postgres',
    password: 'postgres',
    port: 5432,
    host: 'localhost',
    database: 'partydb'
}

const pool = new Pool(options)

module.exports = pool;