import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Page1 } from '../page1/page1';
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyLoginPage');
  }

}
