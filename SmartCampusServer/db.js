const mysql = require('mysql');

con = mysql.createConnection({host: "127.0.0.1", user: "root", password: "rameez", database: "casc"});

module.exports = {
    Connection: con,
    query: {
        login: function(usn, pass){
            q = "SELECT s.sid,s.stdname,s.University_Seat,s.semester, s.course, s.division, s.cycle, s.branch, c.course AS crs, b.branch AS brnch, c.have_cycles FROM studentdetails s JOIN course c ON s.course = c.uid JOIN branches b ON s.branch = b.uid AND University_Seat='" + usn + "' and DOB='" + pass + "'";
            con.query(q, function(err, result, fields) {
                if (err) throw err;
                if(result.length > 0)
                    return result
                else
                    return false
            });
        },
        getProfile: function(usn){

        },
        getMarks: function(exam){

        },
        getAttendence: function(sem){

        }
    }
}