import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { LoginProvider } from '../../providers/login/login';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  usn:String;
  pass:String;

  constructor(public navCtrl: NavController,private loginProvider:LoginProvider) {
  }
  // goToProfile(params){
  //   if (!params) params = {};
  //   this.navCtrl.push(ProfilePage);
  // }
  getLogin() {
    let parmas = {usn : this.usn.toUpperCase(),pass : this.pass}
    this.loginProvider.getDetails(parmas)
    .subscribe((data) => {
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
