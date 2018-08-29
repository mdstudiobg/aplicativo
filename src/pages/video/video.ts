import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {

  Pegalink: string;
  nome:string;
  linkSeguro: SafeResourceUrl;

  constructor(private domSanitizer: DomSanitizer, public navCtrl: NavController, public navParams: NavParams) {

    this.Pegalink = navParams.get('link'); //captura a variavel passada da página home
    this.nome = navParams.get('nome'); //captura a variavel passada da página home

    this.linkSeguro = this.domSanitizer.bypassSecurityTrustResourceUrl(this.Pegalink);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPage');
  }

}
