const mysql = require('mysql')

module.exports = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    port: 3306,
    user: 'root',
    //password: 'songhuy771998',
    database: 'ReactJSFriedChicken'
})