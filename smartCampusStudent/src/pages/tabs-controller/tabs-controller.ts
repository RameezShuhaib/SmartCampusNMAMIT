import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MarksPage } from '../marks/marks';
import { AttendancePage } from '../attendance/attendance';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ProfilePage;
  tab2Root: any = MarksPage;
  tab3Root: any = AttendancePage;
  constructor(public navCtrl: NavController) {
  }
  goToMarks(params){
    if (!params) params = {};
    this.navCtrl.push(MarksPage);
  }
  
  goToAttendance(params){
    if (!params) params = {};
    this.navCtrl.push(AttendancePage);
  }
}
