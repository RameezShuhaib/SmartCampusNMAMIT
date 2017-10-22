import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';

@Component({
  selector: 'page-attendance',
  templateUrl: 'attendance.html'
})
export class AttendancePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page

  attandanceChoice:any;
  constructor(public navCtrl: NavController,private loginProvider:LoginProvider) {
  }

  getSemester() {
    let sem = this.attandanceChoice;
    this.loginProvider.getAttendance(sem).subscribe((data)=> {
      console.log(data);
    });
  }
  
}
