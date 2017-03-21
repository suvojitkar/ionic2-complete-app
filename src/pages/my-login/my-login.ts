import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Page1 } from '../page1/page1';
import { MySignupPage } from '../my-signup/my-signup';
import {Http} from '@angular/http';
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
  username: any;
  password: any;
  constructor(http: Http, public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
   this.username = '';
   this.password= '';
  }

  pushPage(){
    console.log(this.username);
    console.log(this.password);
        this.toastCtrl.create({
        message: 'Welcome to Tutorials!!',
        duration: 3000,
        position: 'bottom'
      }).present();
  	this.navCtrl.setRoot(Page1);
  }
  pushSignup(){
  	this.navCtrl.push(MySignupPage);
  }

}
