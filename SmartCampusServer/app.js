const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db')

let port = 3000;
let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/public", express.static(path.join(__dirname, 'public')));

const con = db.Connection

app.get('/', function(req,res) {
    res.send("Hello from node app");
});

app.post('/login', function(req,res){
    login = db.query.login(req.body.usn, req.body.pass)
    if (login){
        login['Success'] = true
        res.json(login)
    }else{
        res.json({Success:false})
    }
});

app.get('/getProfile', function(req,res){
    res.json(db.query.getProfile(req.body.usn))
});

app.get('/getMarks', function(req,res){
    res.json(db.query.getProfile(req.body.exam))
});

app.get('/getAttendence', function(req,res){
    res.json(db.query.getAttendence(req.body.sem))
});



app.listen(port, function(){
    console.log("Server started on port "+port);
    con.connect(function(err) {
        if (err) throw err;
        console.log("DATABASE Connected!");  
    });
});