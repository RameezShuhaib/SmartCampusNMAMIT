const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');

// Setting port to run the node server
let port = 3000;

// Express app set up
let app = express();

// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Public folder setup
app.use("/public", express.static(path.join(__dirname, 'public')));

// MySQL Setup
const con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "mean"
});

// Basic test route
app.get('/', function(req,res) {
    res.send("Hello from node app");
});

// Create DB ---------------- not working due to some reason
app.get('/createDB', function(req,res) {
    con.query("CREATE DATABASE casc", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
});

// Show data 
app.get('/showUsers', function(req,res){
    con.query("SELECT * FROM user", function(err, result) {
        if(err) throw err;
        res.json(result);
    });
});

// Get data by First name
app.get('/ShowUserName/:fname', function(req, res){
    var fname = req.params.fname;
    con.query("Select * from user where FirstName='" + fname + "'", function(err, result){
        if(err) throw err;
        res.json(result);
    });
})

// Start the server
app.listen(port, function(){
    console.log("Server started on port "+port);
    con.connect(function(err) {
        if (err) throw err;
        console.log("DATABASE Connected!");  
    });
});