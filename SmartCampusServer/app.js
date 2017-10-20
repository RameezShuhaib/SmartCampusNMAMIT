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
    if (db.query.login(req.body.usn, req.body.pass)){
        res.json({Success:true})
    }else{
        res.json({Success:false})
    }
});

app.listen(port, function(){
    console.log("Server started on port "+port);
    con.connect(function(err) {
        if (err) throw err;
        console.log("DATABASE Connected!");  
    });
});