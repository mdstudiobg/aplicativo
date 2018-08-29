import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Intro } from '../pages/intro/intro';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule  } from '@angular/http';
import { ApiProvider } from '../providers/api/api';
import { DetailPage } from '../pages/detail/detail';
import { ConteudoPage } from '../pages/conteudo/conteudo';
import { BuscarPage } from '../pages/buscar/buscar';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { FullCalendarModule } from 'ng-fullcalendar';
import { LoginPage } from '../pages/login/login';
import { Push } from '@ionic-native/push';
import { VideoPage } from '../pages/video/video';
import { PeriodoPage } from '../pages/periodo/periodo';

import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { PeriodocalendarioPage } from '../pages/periodocalendario/periodocalendario';
import { Network } from '@ionic-native/network';
import { DesconectadoPage } from '../pages/desconectado/desconectado';
import { MostraMensagemPage } from '../pages/mostra-mensagem/mostra-mensagem';


@NgModule({
  declarations: [
    MyApp,
    DetailPage,
    HomePage,
    MostraMensagemPage,
    PeriodoPage,
    ConteudoPage,
    DesconectadoPage,
    BuscarPage,
    ListPage,
    LoginPage,
    VideoPage,
    PeriodocalendarioPage,
    Intro
  ],
  imports: [
    FullCalendarModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      platforms: {
        ios:{
          backButtonText:''
        }
      }
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    DetailPage,
    PeriodoPage,
    ConteudoPage,
    DesconectadoPage,
    BuscarPage,
    PeriodocalendarioPage,
    MostraMensagemPage,
    MyApp,
    HomePage,
    VideoPage,
    LoginPage,
    ListPage,
    Intro
  ],
  providers: [
    ApiProvider,
    Push,
    Camera,
    FileTransfer,
    File,
    StatusBar,
    SplashScreen,
    Network,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
