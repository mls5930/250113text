const pool = mysql.createPool({
    host:"127.0.0.1",
    port: "3306",
    user: "mls",
    password: "",
    database: "board",   
    connectionLimit: 5
}).promise();

module.exports=pool