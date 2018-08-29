import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the MostraMensagemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-mostra-mensagem',
  templateUrl: 'mostra-mensagem.html',
})
export class MostraMensagemPage {

  mensagemRecebida: String;


  constructor(public storage: Storage, public navCtrl: NavController, public navParams: NavParams) {

    //resgata do storage e joga para a variavel mensagemRecebida
    this.storage.get('mensagemRecebida').then((executado) => {
      this.mensagemRecebida =  executado;
    });
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MostraMensagemPage');
  }

}
