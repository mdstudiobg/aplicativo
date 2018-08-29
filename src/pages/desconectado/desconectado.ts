import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { NavController} from 'ionic-angular';
import {Network} from '@ionic-native/network';


@Component({
  selector: 'page-desconectado',
  templateUrl: 'desconectado.html',
})
export class DesconectadoPage {

    constructor(private navParams: NavParams, private view: ViewController,  private network: Network, public navCtrl: NavController) {

      //verifica se a pessoa esta conectada e fecha popup modal
        this.network.onConnect().subscribe(() => {
          this.closeModal();
          window.location.reload();//recarrega a página atual
        });


    }

    closeModal(){
      this.view.dismiss();
    }


}
