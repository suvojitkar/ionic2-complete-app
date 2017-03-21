import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
     this.presentLoading();
  }

  presentLoading() {
    this.loadingCtrl.create({
      content: 'Loading...',
      spinner: 'ios',
      duration: 4000
    }).present();
  }

}
