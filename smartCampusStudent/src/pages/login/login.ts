import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
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
    this.usn = '4NM12ME003';
    this.pass = '07/09/1993';
  }
  // goToProfile(params){
  //   if (!params) params = {};
  //   this.navCtrl.push(ProfilePage);
  // }
  getLogin() {
    let parmas = {usn : this.usn, pass : this.pass}
    this.loginProvider.getDetails(parmas)
    .subscribe((data) => {
        if(data.Success) {
          this.loginProvider.setDetails(data);
          this.navCtrl.push(TabsControllerPage);
        } else {
          alert("Invalid USN or Password");
        }
    });
  }
}
