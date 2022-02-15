var mysql = require('mysql');

var con = mysql.createConnection({
    host: "zen7dev.com",
    user: "zen7de5_admin",
    password: "6G@cB)LBunF@"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});