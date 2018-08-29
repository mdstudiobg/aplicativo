import { Component, ViewChild } from '@angular/core';
import {Nav, Platform, AlertController } from 'ionic-angular';
import {ApiProvider} from '../providers/api/api';
import {Observable} from 'rxjs/Observable';
import { HomePage } from '../pages/home/home';
import { Intro } from '../pages/intro/intro';
import { ConteudoPage } from '../pages/conteudo/conteudo';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../pages/login/login';
import { MostraMensagemPage } from '../pages/mostra-mensagem/mostra-mensagem';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { HttpClient } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { PeriodoPage } from '../pages/periodo/periodo';

import {Network} from '@ionic-native/network';
import { ModalController } from 'ionic-angular';
import { DesconectadoPage} from '../pages/desconectado/desconectado';



declare var notificationListener: any;

//tudo certo!

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  loader: any;
  rootPage: any;
  pages: Array<{title: string, component: any}>;
  codigoToken:any;
  token: any;
  whats:Observable<any>;
  mensagem:any;
  smsNumber:String;
  sendIntent:any;
  
  constructor( public http:HttpClient, private alertCtrl: AlertController, private modal: ModalController, private network: Network, private statusBar: StatusBar, private push: Push, public api: ApiProvider, public platform: Platform, public loadingCtrl: LoadingController, public storage: Storage) {
 

           //verifica se a pessoa esta conectada e direciona paga pagina não conectado
           // o codigo que fecha esta dentro do desconectados.ts
           this.network.onDisconnect().subscribe(() => {
            const myModal = this.modal.create(DesconectadoPage);
            myModal.present();
       });

 
 

       










       var app = {
        initialize: function() {
          //console.log("Iniciando app");
           this.bindEvents();
        },
        bindEvents: function() {
           // console.log("Construindo eventos");
            document.addEventListener('deviceready', this.onDeviceReady, false);
        },
        onDeviceReady: function() {
           //console.log("Pronto dispositivo");
    
           notificationListener.listen((n) => {
             console.log("Notificação recebida " + JSON.stringify(n) );




                  var kk = JSON.stringify(n);
                  var mensagem = JSON.parse(kk); //antes de capturar os dados usando parse, é necessário converter para stringify
             
                  console.log( mensagem['title'] );
                  console.log( mensagem['package'] );

                   var url = 'http://www.embrios.com.br/aplicativo/users/salvaWhats.php';

                   var title = mensagem['title']; 
                   var programa = mensagem['package']; 
                   var text = mensagem['text']; 
                   var textLine = mensagem['textLine']; 
         
                   let postData = new FormData();
         
                   postData.append('title', title);
                   postData.append('package', programa); 
                   postData.append('text', text);
                   postData.append('textLine', textLine); 
         
                   this.whats = http.post(url, postData);//envio todos os imputs acima

                    this.whats.subscribe(whats => {
                      //console.log(whats);
                    });


             
           }, function(e){
             console.log("Notification Error " + e);
           });
        }
    };
    app.initialize();







       
    //this.statusBar.overlaysWebView(true);//cor da status bar onde tem o relogio
    this.statusBar.backgroundColorByHexString('#e4afac');//cor da status bar onde tem o relogio

      this.pushSetup();

        this.initializeApp();

        // used for an example of ngFor and navigation
        this.pages = [
          { title: 'Home', component: HomePage },
          //{ title: 'Lista', component: ListPage },
          //{ title: 'Calendário', component: AppComponent },
          { title: 'Login', component: LoginPage },
          { title: 'Período Fértil', component: PeriodoPage }
        ];

        this.presentLoading();
 
        this.platform.ready().then(() => {
              this.storage.get('slideIntro').then((executado) => {
                console.log(executado); //mostra no console se a intro já foi executada, mostra true como sendo sim

                    if(executado === 'jaMostrado'){
                      this.rootPage = HomePage;
                    } else {
                      this.rootPage = Intro;
                      this.storage.set('slideIntro', 'jaMostrado');
                    }
                this.loader.dismiss();

              });
        });
 











  }
 

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando..."
    });
    this.loader.present();
  }
 



  aoclicar(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }



  initializeApp(){
    this.platform.ready().then(() => {
      this.api.getCategories();
    });
 
  }

  openPage(cat_id:number = 0){
  this.nav.setRoot(ConteudoPage, {cat_id:cat_id});
  }








          pushSetup(){
            const options: PushOptions = {
              android: {

                senderID: '798267191796'
              },
              ios: {
                  alert: 'true',
                  badge: true,
                  sound: 'false'
              }
          };
          
          const pushObject: PushObject = this.push.init(options); 
          pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));
          pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));
          pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));





                      //isso direciona para a pagina quando a notificação push chega
                      pushObject.on('notification').subscribe((notification: any) => {

                        //se a condição for verdadeira puxa a pagina, aqui é enviado junto o parametro semSpinner.
                        if (notification.additionalData.pagina=="mensagem") {
                          const myModal = this.modal.create(MostraMensagemPage); //abre pagina da mensagem em forma de modal
                          myModal.present();

                          //grava a mensagem recebida no storage
                          this.storage.set('mensagemRecebida', notification.additionalData.mensagemCompleta);
                        }
          
                        //faz mostrar na tela o codigo de segurança
                        if (notification.additionalData.mensagemCompleta!="vazio") {

                          
                              let alert = this.alertCtrl.create({
                                title: 'Você recebeu uma nova mensagem',
                                message: 'Você foi direcionado para a página da mensagem.',
                                buttons: [
                                  {
                                    text: 'OK, Ler mensagem',
                                    role: 'cancel',
                                    handler: () => {
                                      //console.log('Alguma coisa aqui');
                                    }
                                  }
                                ]
                              });
                              alert.present();
                        }
                      });




          pushObject.on('registration').subscribe((registration: any) => {
            let formData = new FormData();
            formData.append('device_token', registration.registrationId);

            //defino a variavel codigoToken para carregar o token do dispositivo
            this.codigoToken = registration.registrationId;

            //esse bloco armazena a variavel em local storage 
            localStorage.setItem("token", this.codigoToken); //salva no localstorage
            var token = localStorage.getItem("token"); //busca do localstorage
            console.log('O token é:', token); //mostra log da variavel buscada do localstorage          
          }); 



          }





}