import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  usn:String;
  pass:String;

  constructor(public navCtrl: NavController, public http:Http) {
  }
  // goToProfile(params){
  //   if (!params) params = {};
  //   this.navCtrl.push(ProfilePage);
  // }
  getLogin() {
    let parmas = {usn : this.usn.toUpperCase(),pass : this.pass}
    this.http.post('http://localhost:3000/login', parmas)
    .map(res => res.json())
    .subscribe(data => {
        console.log(data);
        if(data.Success) {
          this.usn = '';
          this.pass = '';
          this.navCtrl.push(ProfilePage);
        } else {
          alert("Invalid USN or Password");
        }
    });
  }
}
