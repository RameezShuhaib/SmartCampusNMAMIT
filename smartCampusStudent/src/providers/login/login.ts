import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginProvider {

  details:Details;
  constructor(public http: Http) {
    console.log('Hello LoginProvider Provider');
  }

  getDetails(data:any) {
    return this.http.post('http://localhost:3000/login', data)
    .map(res => res.json());
  }

  setDetails(data:any) {
    this.details = data;
  }

}

interface Details{
  Success,
  University_Seat,
  branch,
  brnch,
  course,
  crs,
  cycle,
  division,
  have_cycles,
  semester,
  sid,
  stdname
}

// Success : true,
// University_Seat : "4NM12ME003",
// branch : 6,
// brnch : "MECHANICAL ENGINEERING"
// course : 28
// crs : "B.E."
// cycle : ""
// division : ""
// have_cycles :1
// semester : "9"
// sid : 1
// stdname : "ABHISHEK K S  "