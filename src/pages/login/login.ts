import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import {Observable} from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import {Storage} from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import {HomePage} from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuario:any;
  senha:any;
  paciente:Observable<any>;
  resultadoUsuario:any = [];
  resultadoSenha:any = [];
  registroNaTabelaNome:string = 'pacienteNome';
  registroNaTabelaSenha:string = 'pacienteSenha';

  public jaLogado: boolean = true; 
  public msg_jaLogado: boolean = false; 


  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage, public alertCtrl: AlertController, public http:HttpClient) {



          //esse bloco mostra ou não o aviso de que a pessoa já esta logada no aplicativo
          this.storage.get(this.registroNaTabelaNome).then((valNome) => {
            console.log('O login é:', valNome);
            console.log(valNome);
            if (valNome === undefined || valNome === null || valNome.length === 0 || valNome === 'vazio') {
                this.jaLogado = !this.jaLogado,
                this.msg_jaLogado = !this.msg_jaLogado
            } 
        });



  }








  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }




          //pega usuario e senha dos imputs e envia para o json.php, em seguida, se os dados estiverem corretos, recebe de volta e salva no storage o usuario e senha 
        postData (){
          var url = 'http://www.embrios.com.br/aplicativo/users/json.php';

          var id = this.usuario; //joga o valor do campo campo imput para a variavel id
          var senha = this.senha; //joga o valor do campo campo imput para a variavel id

          let postData = new FormData();

          postData.append('id_paciente', id); //envia por post o valor do imput id
          postData.append('senha_paciente', senha); //envia por post o valor do imput senha

          this.paciente = this.http.post(url, postData);//envio todos os imputs acima

          this.paciente.subscribe(paciente => {

            console.log(paciente[0]['username']);
            console.log(paciente[0]['password']);

            this.resultadoUsuario = paciente[0]['username'];
            this.resultadoSenha = paciente[0]['password'];

            // Salva no storage sql, paciente[0]['username'] é a posição do array
              this.storage.set(this.registroNaTabelaNome,  paciente[0]['username']);
              this.storage.set(this.registroNaTabelaSenha,  paciente[0]['password']);

              //window.location.reload();//recarrega a página atual

                  //aqui faço a avaliação direto do valor resultante do json.php, pois se fosse buscar no storage eu teria que recarregar a página
                  if (paciente[0]['username'] === 'vazio') {

                    const alert = this.alertCtrl.create({
                      title: 'OPS!',
                      subTitle: 'Usuário ou senha incorretos, tente novamente.',
                      buttons: ['Tentar Novamente']
                    });
                    alert.present();

                } else {

                  const alert = this.alertCtrl.create({
                    title: 'Logado com sucesso!',
                    subTitle: 'Você foi direcionado para tela inicial.',
                    buttons: ['OK']
                  });
                  alert.present();
                  this.navCtrl.setRoot(HomePage); //direciona para pagina home sem ficar aparecendo o botao de voltar, aparece o menu

                  }

          });

        }


}
