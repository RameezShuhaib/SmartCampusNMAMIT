const mysql = require('mysql');

con = mysql.createConnection({host: "127.0.0.1", user: "root", password: "rameez", database: "casc"});

module.exports = {
    Connection: con,
    query: {
        login: function(usn, pass){
            if (usn == '4nm14cs128' && pass == '123')
                return true;
            else
                return false;
        }
    }
}