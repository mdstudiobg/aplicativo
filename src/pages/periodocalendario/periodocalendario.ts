import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Options } from 'fullcalendar';

/**
 * Generated class for the PeriodocalendarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-periodocalendario',
  templateUrl: 'periodocalendario.html',
})
export class PeriodocalendarioPage {


  Pegalink: string;
  nome:string;
  registroNaTabelaNome:string = 'pacienteNome';
  retornaCalendario:Observable<any>;
  result:any[];
  dia:any;
  habitual:any;
  calendarOptions: Options;
  resultado:any;
  proximo:any;
  primeiro:any;
  ultimo:any;
  nasce:any;



  constructor(public http:HttpClient, public storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
  
    this.resultado = navParams.get('data');

    this.proximo = this.resultado['proximo'];
    this.primeiro = this.resultado['primeiro'];
    this.ultimo = this.resultado['ultimo'];
    this.nasce = this.resultado['filho_nasce'];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeriodocalendarioPage');
  }








  ngOnInit() {  

    this.storage.get(this.registroNaTabelaNome).then((valNome) => { //busca do storage  e joga o valor da tabela registroNaTabelaNome para a variavel valNome

      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+2; //January is 0!
      var yyyy = today.getFullYear();
      var newDate = (yyyy + "," + mm + "," + dd);
      
  
      let novaData = newDate;

              this.calendarOptions = {
                
                    buttonText: {
                      today: 'Hoje',
                      month: 'Mês',
                      week: 'Semana',
                      day: 'Dia',

                    },

                    selectable: true,
                    selectHelper: true,
                    height: 360,
                    defaultDate: new Date(novaData), //defini uma data de inicio para o calendario
               
                    editable: true,
                    eventLimit: false,
                    //monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
                    //monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
                      
                      header: {
                        //left: 'prev,next today',
                        left: '',
                        center: 'title',
                        right: ''
                      },

                      defaultView: 'month',

                      eventSources: [
                        {
                          url: 'http://www.embrios.com.br/aplicativo/users/ovulacao_calendario.php?usuario='+valNome,
                         
                          type: 'GET',
                          data: {
        
                          },
                          error: function() {
                            alert('there was an error while fetching events!');
                          },
                          //color: '#26b8b9',   // a non-ajax option
                          //textColor: '#fff' // a non-ajax option
                         
                        }
                        // mais codigos aqui...
                      ]

              };

    });


  }






}
