// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
var mysql = require("mysql");

var connection = mysql.createConnection({

    host: "localhost",
    //this is default port
    port: 3306,

    //Your username
    user: "root",

    //Your password
    password: "",
    database: "friendFinder_db"

});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);

});

// Export connection
module.exports = connection;