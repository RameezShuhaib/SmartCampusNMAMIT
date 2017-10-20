const mysql = require('mysql');

con = mysql.createConnection({host: "127.0.0.1", user: "root", password: "rameez", database: "casc"});
module.exports = {
    Connection: con,
    query: {
        login: function(usn, pass, req, res){
            q = "SELECT s.sid,s.stdname,s.University_Seat,s.semester, s.course, s.division, s.cycle, s.branch, c.course AS crs, b.branch AS brnch, c.have_cycles FROM studentdetails s JOIN course c ON s.course = c.uid JOIN branches b ON s.branch = b.uid AND University_Seat='" + usn + "' and DOB='" + pass + "'";
            con.query(q, function(err, result, fields) {
                if (err) throw err;
                if(result.length > 0){
                    result[0]['Success'] = true
                    for(key in result[0])
                        req.session[key] = result[0][key]
                        // res.cookie(key, result[0][key])
                    res.json(result[0])
                }else
                    res.json({'Success':false})
            });
        },
        getProfile: function(usn, res){
            q = "Select * from studentdetails where University_Seat='" + usn + "'"
            con.query(q, function(err, result, fields){
                if (err) throw err;
                res.json(result)
            })
        },
        getMarks: function(exam, req, res){
            q = "SELECT * FROM marks m, studentdetails s,examcreation e,subjectlist l WHERE m.sid = s.sid and e.eid=m.examname and e.examtype!='3' and m.subjects=l.uid AND m.branch ='" + req.session.course + "'  and m.semester='" + req.session.semester + "' AND m.division = '" + req.session.division + "' AND s.rollno = '" + req.session.University_Seat + "' and m.examname='" + exam + "' order by m.examname"
            con.query(q, function(err, result, fields){
                if (err) throw err;
                res.json(result)
            })
        },
        getAttendence: function(sem){
            
        }
    }
}