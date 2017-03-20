import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Page1 } from '../page1/page1';
import { MySignupPage } from '../my-signup/my-signup';
/*
  Generated class for the MyLogin page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-login',
  templateUrl: 'my-login.html'
})
export class MyLoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  pushPage(){
  	this.navCtrl.setRoot(Page1);
  }
  pushSignup(){
  	console.log("ok");
  	this.navCtrl.push(MySignupPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyLoginPage');
  }

}
