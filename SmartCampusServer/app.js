const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser')
const session = require('express-session')
const db = require('./db')

let port = 3000;
let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session(
    {
        secret: 'bhj8789ygfu7##6juk'
    }));
app.use("/public", express.static(path.join(__dirname, 'public')));

const con = db.Connection

app.get('/', function(req,res) {
    res.send("Hello from node app");
});

app.post('/login', function(req,res){
    db.query.login(req.body.usn, req.body.pass, req, res)
});

app.get('/getProfile', function(req,res){
    db.query.getProfile(req.query.usn, res)
});

app.get('/getMarks', function(req,res){
    db.query.getMarks(req.query.exam, req, res)
});

app.get('/getAttendence', function(req,res){
    db.query.getAttendence(req.query.course, req.query.sem, req.query.div, req.query.usn, res)
});



app.listen(port, function(){
    console.log("Server started on port "+port);
    con.connect(function(err) {
        if (err) throw err;
        console.log("DATABASE Connected!");  
    });
});