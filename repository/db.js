const mysql = require('mysql2');
const pool = mysql.createPool({
    host:"127.0.0.1",
    port: "3306",
    user: "wnqudgus1234",
    password: "qwerasdf1234",
    dateStrings: "date",
    database: "Ju",   
}).promise();

module.exports=pool