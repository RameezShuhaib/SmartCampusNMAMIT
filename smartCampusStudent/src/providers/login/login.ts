import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginProvider {

  constructor(public http: Http) {
    console.log('Hello LoginProvider Provider');
  }

  getDetails(data:any) {
    return this.http.post('http://localhost:3000/login', data)
    .map(res => res.json());
  }

}
