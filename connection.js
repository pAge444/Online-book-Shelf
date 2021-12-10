const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'blljjkdlia1azbz2qpm1-mysql.services.clever-cloud.com',
    user: 'uqhqugpwniq0zfj8',
    password : 'NdwY5rY7ZK5NjLiJXq8v',
    database: 'blljjkdlia1azbz2qpm1',
    port : '3306',
});

module.exports = db;