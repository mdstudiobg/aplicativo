import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class Intro {
 
  constructor(public navCtrl: NavController) {
 
  }
  
 
  goToHome(){
    this.navCtrl.setRoot(HomePage);
  }
 
}