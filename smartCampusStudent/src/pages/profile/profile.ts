import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})

export class ProfilePage{
  // this tells the tabs component which Pages
  // should be each tab's root Page

  profile: any;
  usn:String;
  constructor(public navCtrl: NavController, public http:Http) {
  }


  ionViewWillEnter() {
    this.usn = '4NM12ME003';
    this.http.get(`http://localhost:3000/getProfile?usn=${this.usn}`)
    .map(res => res.json())
    .subscribe((data) => {
        this.profile = data[0];
        console.log(this.profile);
    });
  }
  
}