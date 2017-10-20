const mysql = require('mysql');

con = mysql.createConnection({host: "127.0.0.1", user: "root", password: "rameez", database: "casc"});
module.exports = {
    Connection: con,
    query: {
        login: function(usn, pass, res){
            q = "SELECT s.sid,s.stdname,s.University_Seat,s.semester, s.course, s.division, s.cycle, s.branch, c.course AS crs, b.branch AS brnch, c.have_cycles FROM studentdetails s JOIN course c ON s.course = c.uid JOIN branches b ON s.branch = b.uid AND University_Seat='" + usn + "' and DOB='" + pass + "'";
            con.query(q, function(err, result, fields) {
                if (err) throw err;
                if(result.length > 0){
                    result[0]['Success'] = true
                    res.cookie('user' , result[0])
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
        getMarks: function(exam){
            // q = "SELECT * FROM marks m, studentdetails s,examcreation e,subjectlist l WHERE m.sid = s.sid and e.eid=m.examname and e.examtype!='3' and m.subjects=l.uid AND m.branch ='" + Request.Cookies["course"].Value.Split('$')[3] + "'  and m.semester='" + lblsem.Text.ToUpper() + "' AND m.division = '" + lbldiv.Text.ToUpper() + "' AND s.rollno = '" + lblusn.Text.ToUpper() + "' and m.examname='" + exmname + "' order by m.examname"
        },
        getAttendence: function(sem){
            
        }
    }
}