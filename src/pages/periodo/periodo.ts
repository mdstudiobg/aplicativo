import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Options } from 'fullcalendar';
import { PeriodocalendarioPage } from '../periodocalendario/periodocalendario';



/**
 * Generated class for the PeriodoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-periodo',
  templateUrl: 'periodo.html',
})
export class PeriodoPage {

  Pegalink: string;
  nome:string;
  registroNaTabelaNome:string = 'pacienteNome';
  retornaCalendario:Observable<any>;
  result:any[];
  dia:any;
  habitual:any;
  calendarOptions: Options;


  constructor(public http:HttpClient, public storage: Storage, public navCtrl: NavController, public navParams: NavParams) {



    
  }




pegaCalendario(){

      //esse bloco mostra as medicações para o paciente logado atualmente.
      this.storage.get(this.registroNaTabelaNome).then((valNome) => {
        
        var dia = this.dia;
        var habitual = this.habitual;

        let postData = new FormData();

        postData.append('usuario',valNome);
        postData.append('dia',dia)
        postData.append('habitual',habitual)

        var url = 'http://www.embrios.com.br/aplicativo/users/ovulacao.php';
        this.retornaCalendario = this.http.post(url, postData);
        this.retornaCalendario.subscribe(retornaCalendario => {
          this.result = retornaCalendario;
          console.log(retornaCalendario);
          //console.log(medicacoes[3]['desfecho']);

          this.navCtrl.setRoot(PeriodocalendarioPage, {
           data: retornaCalendario
          }); //direciona para pagina home sem ficar aparecendo o botao de voltar, aparece o menu

        });
    });

}




  
  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPage');
  }








}
