const Pool = require('pg').Pool;
const keys = require('../config/keys');


const pool = new Pool({
    user: keys.postgressUser,
    host: 'localhost',
    database: 'techdb',
    password: keys.postgresSecret,
    port: 5432,
});