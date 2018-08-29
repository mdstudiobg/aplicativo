import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import {ApiProvider} from '../../providers/api/api';
import { DetailPage } from '../detail/detail';
import { BuscarPage } from '../buscar/buscar';

import { Options } from 'fullcalendar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { VideoPage } from '../video/video';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { LoginPage } from '../login/login';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

    //referente as tabs no topo da pagina
    @ViewChild('SwipedTabsSlider') SwipedTabsSlider:Slides;
    SwipedTabsIndicator:any=null;
    tabs:any=[];

    calendarOptions: Options;

    public items:any = [];
    baixar:Observable<any>;
    private per_page:number = 2;
    private page:number = 1;
    private isLoading = false;
    private ordenar:string = '0';
    public Categories:any = [];
    jaBaixando: SafeResourceUrl;
    public slideGestante: boolean = false; 
    public avisoLogin: boolean = true; 
    public conteudoMedicacoes: boolean = true; 
    public conteudoNaoComecou: boolean = false;
    public slideCalendario: boolean = false; 
    public slideMedicacoes: boolean = false; 
    public slideVideos: boolean = false;

    registroNaTabelaNome:string = 'pacienteNome';
    registroNaTabelaSenha:string = 'pacienteSenha';

    result:any[];
    gest:any[];
    medicacoes:Observable<any>;
    enviafoto:Observable<any>;
    gestante:Observable<any>;
    base64Image:string;
    diaTratamento: String;
    nomeMae: any;
    nomeBebe: any;
    conjuge: any;
    mensagemMae: any;
    autoriza: any;
    myphoto="http://www.embrios.com.br/aplicativo/users/inicial.jpg";
    hideMe:Boolean;


    constructor (private inAppBrouser: InAppBrowser, private domSanitizer: DomSanitizer, private alertCtrl: AlertController, private transfer: FileTransfer, private file: File, private loadingCtrl:LoadingController, private camera:Camera, public http:HttpClient, public navCtrl: NavController, public storage: Storage, public api:ApiProvider, public navParms:NavParams) {
        console.log(this.navParms.get('cat_id'));
        this.getPosts();

        
        this.jaBaixando = this.domSanitizer.bypassSecurityTrustResourceUrl("http://www.embrios.com.br/aplicativo/pdf/branco.php");


        //mostra ou esconde o aviso de login
        this.storage.get('AvisoLogin').then((executado) => {
            if(executado === 'fechado'){
              this.avisoLogin = false;
            } else {
              this.avisoLogin = true;

                //acima ativa o ativo, mas se a pessoa já fez login, ai mesmo assim o sistema tem de desativar o aviso
                this.storage.get(this.registroNaTabelaNome).then((valNome) => {
                  if (valNome === undefined || valNome === null || valNome.length === 0 || valNome === 'vazio') {
                    this.avisoLogin = true;
                  } else {
                    this.avisoLogin = false;
                  }
                });

            }
        });





                //esse bloco de código recupera do storage o nome do paciente depois de logado e faz avaliação se mostra ou não as abras na pagina home
                this.storage.get(this.registroNaTabelaNome).then((valNome) => {
                  console.log('O paciente é:', valNome);
                 

                    if (valNome === undefined || valNome === null || valNome.length === 0 || valNome === 'vazio') {
                        //Se não tiver logado, retira varias tabs e deixa assim
                        this.tabs=[];

                    } else {
                      //caso logado, mostra estas tabs no topo da pagina home
                      this.tabs=["Home","Calendário","Medicações"];
                      this.slideCalendario = true;
                      this.slideMedicacoes = true;
                    }

                });


                //esse bloco mostra as medicações para o paciente logado atualmente.
                this.storage.get(this.registroNaTabelaNome).then((valNome) => {
                    let postData = new FormData();
                    postData.append('usuario',valNome)
                    var url = 'http://www.embrios.com.br/aplicativo/users/agenda/app_medicacoes.php';
                    this.medicacoes = this.http.post(url, postData);
                    this.medicacoes.subscribe(medicacoes => {
                      this.result = medicacoes;

                          //faço um if para ver se não retorna nulo, por se não tiver data definida na ficha na plataforma, vai retornar null e vai dar erro sem esse if
                          if(medicacoes === undefined || medicacoes === null || medicacoes.length === 0 ){ 
                            this.conteudoMedicacoes = false; //oculto o conteúdo medicações caso retorne vazio
                            this.conteudoNaoComecou = true;
                          } else {
                            this.diaTratamento = medicacoes[0]['diatratamento']; 
                            this.conteudoMedicacoes = true; //mostra o conteúdo medicações caso retorne vazio
                            this.conteudoNaoComecou = false;
                          }

                      console.log(medicacoes);
                      //console.log(medicacoes[3]['desfecho']);

                    });
                });




                                //esse bloco mostra as mensagens para a gestante logado atualmente.
                                this.storage.get(this.registroNaTabelaNome).then((valNome) => {
                                  let postData = new FormData();
                                  postData.append('usuario',valNome)
                                  var url = 'http://www.embrios.com.br/aplicativo/users/agenda/agenda_gestante.php';
                                  this.gestante = this.http.post(url, postData);
                                  this.gestante.subscribe(gestante => {
                                    this.gest = gestante;
                                    console.log(gestante);
                                    //console.log(medicacoes[3]['desfecho']);
              
                                  });
                              });


                //verifico se a ficha tem desfecho, se tiver desfecho oculta a guia medicamentos
                this.storage.get(this.registroNaTabelaNome).then((valNome) => {
                  let postData = new FormData();
                  postData.append('usuario',valNome)
                  var url = 'http://www.embrios.com.br/aplicativo/users/agenda/desfecho.php';
                  this.medicacoes = this.http.post(url, postData);
                  this.medicacoes.subscribe(medicacoes => {

                    //console.log(medicacoes[0]['desfecho']);
                    //console.log(medicacoes[1]['gestante']);
                  
                    //verifico se a ficha tem desfecho, se tiver desfecho ai a guia de medicações é ocultada
                    if (medicacoes[0]['desfecho'] !== '' &&  medicacoes[0]['desfecho'] !== null &&  medicacoes[0]['desfecho'] !== undefined &&  valNome !== null &&  valNome !== undefined) {
                      this.slideMedicacoes = false; //oculta a guia medicamentos
                      this.tabs=["Home","Calendário"];//oculta a guia medicamentos

                      console.log("Desfecho:");
                      console.log(medicacoes[0]['desfecho']);
                    }


                    //verifico se o usuario é gestante, se for ai mostra guia gestante
                    if (medicacoes[1]['gestante'] === 'sim' && medicacoes[0]['desfecho'] !== '' &&  medicacoes[0]['desfecho'] !== null &&  medicacoes[0]['desfecho'] !== undefined ) {
                      this.slideMedicacoes = false; //oculta a guia medicamentos
                      this.slideGestante = true; //mostra a guia gestante
                      this.tabs=["Home","Calendário","Gestante"];//oculta a guia medicamentos
                    }


                    //verifico se o usuario é mae, se for ai mostra guia depoimentos
                    if (medicacoes[1]['gestante'] === 'mae' && medicacoes[0]['desfecho'] !== '' &&  medicacoes[0]['desfecho'] !== null &&  medicacoes[0]['desfecho'] !== undefined  ) {
                      this.slideMedicacoes = false; //mostra a guia medicamentos
                      this.slideVideos = true; //mostra a guia depoimentos
                      this.slideGestante = false;
                      this.tabs=["Home","Calendário","Depoimento"];//oculta a guia medicamentos
                    }


                  });
              });



    }

 

    getPosts(infiniteScroll = null){
      if (!this.isLoading){
        this.isLoading = true;
        if(infiniteScroll!=null && infiniteScroll.ionRefresh){
          this.page = 1;
        }
        let url:string = 'posts?_embed&categories=47&per_page='+this.per_page +'&page='+this.page;
        url += this.ordenar=='1' ? '&order=asc' :this.ordenar=='2' ? '&orderby=title&order=asc' :this.ordenar=='3' ? '&orderby=title&order=desc': '';
        this.api.get(url)
        .subscribe((data:any) => {
          this.isLoading = false;
          this.items = infiniteScroll!=null && infiniteScroll.ionRefresh ? data: this.items.concat(data);
          if(data.length===this.per_page){
            this.page++;
          } 
          if(infiniteScroll!=null){
            infiniteScroll.complete();
          }
        }, (error)=> {
          this.isLoading = false;
          if(infiniteScroll!=null){
            infiniteScroll.complete();
          }
        });
      }
    }



    openDetail(item){
      this.navCtrl.push(DetailPage, {post:item})
    }


    getCatName(cat_id:number){
      let cat_name:string = '';
      this.api.Categories.forEach(element => {
        if (element.id == cat_id){
          cat_name = element.name;
        }
      });
      return cat_name;
    }


    BuscarPage(){
      this.navCtrl.push(BuscarPage);
    }



    mudarOrdem(){
    this.items = [];
    this.page = 1;
    this.getPosts();
    }


 
    

    ionViewDidEnter() {
      this.SwipedTabsIndicator = document.getElementById("indicator");

                var token = localStorage.getItem("token"); //busca token do dispositivo no localstorage
                this.storage.get(this.registroNaTabelaNome).then((valNome) => {
                  let postData = new FormData();

                  postData.append('usuario', valNome)
                  postData.append('token', token)

                  var url = 'http://www.embrios.com.br/aplicativo/users/agenda/salva_token_usuario.php';
                  this.medicacoes = this.http.post(url, postData);
                    this.medicacoes.subscribe(medicacoes => {
                      //alert(medicacoes[0]['feito']); // a mensagem desse alert esta dentro do arquivo acima
                    });

                });

    }

    selectTab(index) {    
      this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(100*index)+'%,0,0)';
      this.SwipedTabsSlider.slideTo(index, 500);
    }

    updateIndicatorPosition() {
        // this condition is to avoid passing to incorrect index
      if( this.SwipedTabsSlider.length()> this.SwipedTabsSlider.getActiveIndex())
      {
        this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(this.SwipedTabsSlider.getActiveIndex() * 100)+'%,0,0)';
      }
      
      }

    animateIndicator($event) {
      if(this.SwipedTabsIndicator)
          this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress* (this.SwipedTabsSlider.length()-1))*100) + '%,0,0)';
    }






    ngOnInit() {  

      this.storage.get(this.registroNaTabelaNome).then((valNome) => { //busca do storage  e joga o valor da tabela registroNaTabelaNome para a variavel valNome

                this.calendarOptions = {

                      buttonText: {
                        today: 'Hoje',
                        month: 'Mês',
                        week: 'Semana',
                        day: 'Dia',
 
                      },

                      selectable: true,
                      selectHelper: true,
                      height: 450,
                      editable: true,
                      eventLimit: false,
                      //monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
                      //monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
                        
                        header: {
                          left: 'prev,next today',
                          center: 'title',
                          right: 'month,listMonth'
                        },

                        defaultView: 'listMonth',

                        eventSources: [
                          {
                            url: 'http://www.embrios.com.br/aplicativo/users/agenda/retrieve-data.php?usuario='+valNome,
                            
                            type: 'GET',
                            data: {
                             // custom_param1: 'something',
                              //custom_param2: 'somethingelse'
                            },
                            error: function() {
                              //alert('there was an error while fetching events!');
                            },
                            color: '#26b8b9',   // a non-ajax option
                            textColor: '#fff' // a non-ajax option
                          }
                          // mais codigos aqui...
                        ]

                };

      });


    }




ativaNotificacao (medicacaoAtiva, quantidade, horaTomar) {

      var token = localStorage.getItem("token"); //busca token do dispositivo no localstorage

    this.storage.get(this.registroNaTabelaNome).then((valNome) => {
        let postData = new FormData();
        
        postData.append('notificacao','ativa')
        postData.append('medicacaoAtiva', medicacaoAtiva)
        postData.append('quantidade', quantidade)
        postData.append('horaTomar', horaTomar)
        postData.append('usuario', valNome)
        postData.append('token', token)

        var url = 'http://www.embrios.com.br/aplicativo/users/agenda/ativaDesativaNotificacao.php';
        this.medicacoes = this.http.post(url, postData);
          this.medicacoes.subscribe(medicacoes => {
            //alert(medicacoes[0]['feito']); // a mensagem desse alert esta dentro do arquivo acima

            let alertMedic = this.alertCtrl.create({
              title: '',
              subTitle: medicacoes[0]['feito'],
              buttons: ['OK']
            });
            alertMedic.present();


          });

    });
    
}
  

desativaNotificacao (medicacaoAtiva, quantidade, horaTomar) {
      this.storage.get(this.registroNaTabelaNome).then((valNome) => {
        let postData = new FormData();

        postData.append('notificacao','ativa')
        postData.append('medicacaoAtiva', medicacaoAtiva)
        postData.append('quantidade', quantidade)
        postData.append('horaTomar', horaTomar)
        postData.append('usuario', valNome)

        var url = 'http://www.embrios.com.br/aplicativo/users/agenda/deletaDesativaNotificacao.php';
        this.medicacoes = this.http.post(url, postData);

        this.medicacoes.subscribe(medicacoes => {
          //alert(medicacoes[0]['feito']); // a mensagem desse alert esta dentro do arquivo acima

          let alertTiraMed = this.alertCtrl.create({
            title: '',
            subTitle: medicacoes[0]['feito'],
            buttons: ['OK']
          });
          alertTiraMed.present();

        });


    });


}



rodaVideoYoutube(medicacaoAtiva, quantidade, horaTomar){
let postData = new FormData();
postData.append('medicacaoAtiva', medicacaoAtiva)
var url = 'http://www.embrios.com.br/aplicativo/users/agenda/buscaVideoMedicamento.php';
this.medicacoes = this.http.post(url, postData);

  this.medicacoes.subscribe(medicacoes => {
    //console.log(medicacoes[0]['linkVideo']);
    let str = medicacoes[0]['linkVideo'];
    let nome = medicacoes[0]['nome'];

    //esse bloco tira o watch?v= do link do youtube e substitiu por embed/ pois sem isso o video não roda, da problemas de permissão
    var re = "watch?v="; 
   var newstr = str.replace(re, "embed/"); 

    this.navCtrl.push(VideoPage, {
      link: newstr,
      nome: nome
    });

  });

}


atualizaCalendario(){
 // window.location.reload();//recarrega a página atual
 //this.navCtrl.setRoot(HomePage); //abre pagina mantendo o menu pilha
}








baixarFicha(){
      this.storage.get(this.registroNaTabelaNome).then((valNome) => {
        const options: InAppBrowserOptions = {
          zoon:'yes',
          enableViewportScale: 'yes',
          location: 'no'
          }
        const browser = this.inAppBrouser.create('http://www.embrios.com.br/aplicativo/pdf/gera_imagem.php?id_paciente='+valNome,'_system',options);
        //const browser = window.open(encodeURI('http://www.embrios.com.br/aplicativo/pdf/gera_imagem.php?id_paciente='+valNome),"_blank","location=no,enableViewportScale=yes");

      });
 }




 



direcionaLogin(){
  // window.location.reload();//recarrega a página atual
  this.navCtrl.setRoot(LoginPage); //abre pagina mantendo o menu pilha
 }

fechaAvisoLogin(){
  this.avisoLogin = false;
  
      this.storage.get('AvisoLogin').then((executado) => {

        this.storage.set('AvisoLogin', 'fechado'); //grava o valor fechado na variavel no storage
      
      });

 }



abrirGaleria(){
    const options: CameraOptions = {
      quality: 85,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.myphoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }

 

  cropImage() {
    const options: CameraOptions = {
      quality: 85,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false,
      allowEdit:true,
      targetWidth:800,
      targetHeight:800
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.myphoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }



    uploadImage(){
        //Show loading
          let loader = this.loadingCtrl.create({
            content: "Enviando..."
          });
          loader.present();

          //create file transfer object
          const fileTransfer: FileTransferObject = this.transfer.create();

          //random int
          var random = Math.floor(Math.random() * 1000000);

          //option transfer
          let options: FileUploadOptions = {
            fileKey: 'photo',
            fileName: "mae_" + random + ".jpg",
            chunkedMode: false,
            httpMethod: 'post',
            mimeType: "image/jpeg",
            headers: {}
          }

          //file transfer action
          fileTransfer.upload(this.myphoto, 'http://www.embrios.com.br/aplicativo/users/agenda/recebeFotoApp.php', options)
            .then((data) => {



              this.storage.get(this.registroNaTabelaNome).then((valNome) => {

                      var nomeMae = this.nomeMae;
                      var conjuge = this.conjuge;
                      var nomeBebe = this.nomeBebe;
                      var mensagemMae = this.mensagemMae;
                      var autoriza = this.autoriza;
                      var fileName = fileName;
                      var data = data;
                      
                      let postData = new FormData();

                      postData.append('nomeMae', nomeMae);
                      postData.append('nomeBebe', nomeBebe);
                      postData.append('mensagemMae', mensagemMae);
                      postData.append('autoriza', autoriza);
                      postData.append('conjuge', conjuge);

                      postData.append('linkFoto', "mae_" + random + ".jpg");
                      postData.append('usuario', valNome);

                      var url = 'http://www.embrios.com.br/aplicativo/users/agenda/salvaFotoBancoDados.php';
                      this.enviafoto = this.http.post(url, postData);
                      
                        this.enviafoto.subscribe(enviafoto => {
                          console.log(enviafoto);
                        });



                      let alerta = this.alertCtrl.create({
                        title: 'Informação',
                        subTitle: 'Caso queira alterar seu depoimento, basta escreve e enviar novamente, ele será substituído pelo atual.',
                        buttons: [
                          {
                            text: 'OK',
                            role: 'cancel',
                            handler: () => {
                              window.location.reload();//recarrega a página atual
                            }
                          }
                        ]
                      });
                      alerta.present();


                      let alert = this.alertCtrl.create({
                        title: 'Sucesso!',
                        subTitle: 'Seu depoimento foi enviado a postado automaticamente em nosso site, confere lá!',
                        buttons: ['OK']
                      });
                      alert.present();


                      loader.dismiss();
                     

              });


            }, (err) => {
              console.log(err);
             
              let alerterro = this.alertCtrl.create({
                title: 'Erro!',
                subTitle: 'Não foi possível enviar, tente novamente. Preencha todos os campos.',
                buttons: ['OK']
              });
              alerterro.present();

              loader.dismiss();
            });
    }






    hide() { //função que é chamada para mostrar botão enviar apos selecionar alguma opão na autorização do depoimento
      this.hideMe = true;
    }



}
