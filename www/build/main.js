webpackJsonp([1],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuscarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_detail__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the BuscarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BuscarPage = /** @class */ (function () {
    function BuscarPage(navCtrl, navParams, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.searchQuery = '';
        this.per_page = 2;
        this.page = 1;
        this.showLoadMore = false;
        this.isLoading = false;
        this.items = [];
    }
    BuscarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BuscarPage');
    };
    BuscarPage.prototype.onSearch = function () {
        this.items = [];
        this.getPosts();
    };
    BuscarPage.prototype.getPosts = function () {
        var _this = this;
        if (!this.isLoading && this.searchQuery.length > 0) {
            this.isLoading = true;
            this.api.get('posts?_embed&per_page=' + this.per_page + '&page=' + this.page + '&search=' + this.searchQuery)
                .subscribe(function (data) {
                _this.isLoading = false;
                _this.items = _this.items.concat(data);
                if (data.length === _this.per_page) {
                    _this.page++;
                    _this.showLoadMore = true;
                }
                else {
                    _this.showLoadMore = false;
                }
            }, function (error) {
                _this.isLoading = false;
                if (error.error.code === "rest_post_invalid_page_number") {
                    _this.showLoadMore = false;
                }
            });
        }
    };
    BuscarPage.prototype.clearSearch = function () {
        this.searchQuery = '';
        this.items = [];
        this.page = 1;
        this.showLoadMore = false;
    };
    BuscarPage.prototype.openDetail = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detail_detail__["a" /* DetailPage */], { post: item });
    };
    BuscarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buscar',template:/*ion-inline-start:"C:\aplicativos\embrios_novo\src\pages\buscar\buscar.html"*/'<!--\n  Generated template for the BuscarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary"> \n   <ion-input type="search" [(ngModel)]="searchQuery" (change)="onSearch()" placeholder="O que você procura?"></ion-input>\n  <ion-buttons end>\n    <button ion-button icon-only (click)="clearSearch()" *ngIf="searchQuery.length>0">\n      <ion-icon md="md-close" ios="md-close"></ion-icon>\n    </button>\n  </ion-buttons>\n  \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n    <ion-card *ngFor="let item of items" (click)="openDetail(item)">\n        <img src="{{item._embedded[\'wp:featuredmedia\'][0].media_details.sizes.medium.source_url}}"/>\n\n        <ion-card-content>\n\n          <ion-card-title>\n            {{item.title.rendered}}\n          </ion-card-title>\n\n          <ion-badge color="second">\n          {{api.getCatName(item.categories[0])}}\n          </ion-badge>\n\n          <ion-badge color="dark">\n            <ion-icon name="time"></ion-icon>\n            {{item.date | date: "dd.MM.yyy / hh:mm"}}\n          </ion-badge>\n           \n        </ion-card-content>\n      </ion-card>\n\n      <div *ngIf="isLoading" text-center padding><ion-spinner></ion-spinner></div>\n      <button *ngIf="showLoadMore" ion-button full (click)="getPosts()">Ver mais</button>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\aplicativos\embrios_novo\src\pages\buscar\buscar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], BuscarPage);
    return BuscarPage;
}());

//# sourceMappingURL=buscar.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, storage, alertCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.resultadoUsuario = [];
        this.resultadoSenha = [];
        this.registroNaTabelaNome = 'pacienteNome';
        this.registroNaTabelaSenha = 'pacienteSenha';
        this.jaLogado = true;
        this.msg_jaLogado = false;
        //esse bloco mostra ou não o aviso de que a pessoa já esta logada no aplicativo
        this.storage.get(this.registroNaTabelaNome).then(function (valNome) {
            console.log('O login é:', valNome);
            console.log(valNome);
            if (valNome === undefined || valNome === null || valNome.length === 0 || valNome === 'vazio') {
                _this.jaLogado = !_this.jaLogado,
                    _this.msg_jaLogado = !_this.msg_jaLogado;
            }
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    //pega usuario e senha dos imputs e envia para o json.php, em seguida, se os dados estiverem corretos, recebe de volta e salva no storage o usuario e senha 
    LoginPage.prototype.postData = function () {
        var _this = this;
        var url = 'http://www.embrios.com.br/aplicativo/users/json.php';
        var id = this.usuario; //joga o valor do campo campo imput para a variavel id
        var senha = this.senha; //joga o valor do campo campo imput para a variavel id
        var postData = new FormData();
        postData.append('id_paciente', id); //envia por post o valor do imput id
        postData.append('senha_paciente', senha); //envia por post o valor do imput senha
        this.paciente = this.http.post(url, postData); //envio todos os imputs acima
        this.paciente.subscribe(function (paciente) {
            console.log(paciente[0]['username']);
            console.log(paciente[0]['password']);
            _this.resultadoUsuario = paciente[0]['username'];
            _this.resultadoSenha = paciente[0]['password'];
            // Salva no storage sql, paciente[0]['username'] é a posição do array
            _this.storage.set(_this.registroNaTabelaNome, paciente[0]['username']);
            _this.storage.set(_this.registroNaTabelaSenha, paciente[0]['password']);
            //window.location.reload();//recarrega a página atual
            //aqui faço a avaliação direto do valor resultante do json.php, pois se fosse buscar no storage eu teria que recarregar a página
            if (paciente[0]['username'] === 'vazio') {
                var alert_1 = _this.alertCtrl.create({
                    title: 'OPS!',
                    subTitle: 'Usuário ou senha incorretos, tente novamente.',
                    buttons: ['Tentar Novamente']
                });
                alert_1.present();
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Logado com sucesso!',
                    subTitle: 'Você foi direcionado para tela inicial.',
                    buttons: ['OK']
                });
                alert_2.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]); //direciona para pagina home sem ficar aparecendo o botao de voltar, aparece o menu
            }
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\aplicativos\embrios_novo\src\pages\login\login.html"*/'<ion-header>\n    <ion-navbar >\n      \n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  \n      <ion-title > Entre com sua conta </ion-title>\n       \n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n \n    <br>\n\n<ion-card *ngIf="jaLogado">\n    <ion-card-content>                      \n        <ion-card-header style="font-size:22px; padding-bottom:5px; padding-top:5px; text-align:center;">\n            Você já está logado! \n        </ion-card-header >\n        <p style="font-size:14px; padding-bottom:5px; padding-top:5px; text-align:center;">Se desejar entrar com outro usuário, apenas preencha os dados abaixo:</p>\n        \n    </ion-card-content>\n</ion-card>\n\n\n    <h5 text-center *ngIf="msg_jaLogado">Insira seu usuario e senha para ter acesso ao calendário de suas consultas, medicamentos, vídeos e muito mais!</h5>\n      <ion-item padding>\n        \n        <ion-input placeholder="Usuário" [(ngModel)]="usuario" autocapitalize="off" autocomplete="false"></ion-input>\n      </ion-item>\n\n      <ion-item padding>\n        \n        <ion-input placeholder="Senha" [(ngModel)]="senha" autocapitalize="off" type="password" autocomplete="false"></ion-input>\n      </ion-item>\n\n      <div class="col" style="width: 100%; text-align: center">\n        <button ion-button (click)="postData()" padding style="padding:20px; background-color: #26b8b9; padding-right:25px; padding-left:25px;">LOGIN</button>\n      </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\aplicativos\embrios_novo\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/noticias/noticias.module": [
		427,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 163;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VideoPage = /** @class */ (function () {
    function VideoPage(domSanitizer, navCtrl, navParams) {
        this.domSanitizer = domSanitizer;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Pegalink = navParams.get('link'); //captura a variavel passada da página home
        this.nome = navParams.get('nome'); //captura a variavel passada da página home
        this.linkSeguro = this.domSanitizer.bypassSecurityTrustResourceUrl(this.Pegalink);
    }
    VideoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VideoPage');
    };
    VideoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-video',template:/*ion-inline-start:"C:\aplicativos\embrios_novo\src\pages\video\video.html"*/'<!--\n  Generated template for the VideoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Instruções de {{nome}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n  <iframe width="100%" height="100%" [src]="linkSeguro" frameborder="0" allowfullscreen></iframe>\n</ion-content>\n'/*ion-inline-end:"C:\aplicativos\embrios_novo\src\pages\video\video.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], VideoPage);
    return VideoPage;
}());

//# sourceMappingURL=video.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Intro; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Intro = /** @class */ (function () {
    function Intro(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Intro.prototype.goToHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */]);
    };
    Intro = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intro',template:/*ion-inline-start:"C:\aplicativos\embrios_novo\src\pages\intro\intro.html"*/'<ion-slides   pager="true" >\n \n  <ion-slide >\n      <div style="position: absolute; bottom: 0; background-image: url(\'assets/imgs/fundo.png\');    background-position: center  ; background-repeat: no-repeat;   width:100%; height:100%; "></div>\n      <div style = "width:100%; height:auto; "><img src = "assets/imgs/1.jpg" /></div>\n\n      <div style="padding:20px; ">\n          <div style="bottom:100px; position: absolute;"><div style="font-size:32px; color:#fff; padding:0px; font-family: \'Satisfy\', cursive;">Bem-vinda!</div> \n            <div style="font-size:16px; color:#fff;  padding-top:-20px;  width:100%; text-align:center; padding-right:15px; padding-left:15px;">Seguimos juntos em busca do sonho da maternidade.</div>\n          </div>\n      </div>\n  </ion-slide>\n\n  <ion-slide>\n      <div style="position: absolute; bottom: 0; background-image: url(\'assets/imgs/fundo.png\');    background-position: center  ; background-repeat: no-repeat;   width:100%; height:100%; "></div>\n      <div style = "width:100%; height:auto; "><img src = "assets/imgs/2.jpg" /></div>\n\n      <div style="padding:20px; ">\n          <div style="bottom:65px; position: absolute; "><div style="font-size:26px; color:#fff; padding:0px; font-family: \'Satisfy\', cursive;">Não pare até se orgulhar</div> \n            <div style="font-size:16px; color:#fff; width:100%; text-align:center;  padding-right:15px; padding-left:15px;">Acontece...no caminho dos seus sonhos, as desilusões, a falta de fé, as dores do corpo e da alma aparecerão. <br> Persista e continue trilhando firme, em busca do seu objetivo!</div>\n          </div>\n      </div>\n  </ion-slide>\n\n  <ion-slide>\n      <div style="position: absolute; bottom: 0; background-image: url(\'assets/imgs/fundo.png\');    background-position: center  ; background-repeat: no-repeat;   width:100%; height:100%; "></div>\n      <div style = "width:100%; height:auto;   "><img src = "assets/imgs/3.jpg" /></div>\n\n      <div style="padding:20px; ">\n          <div style="bottom:65px; position: relative;  "><div style="font-size:26px; color:#fff; padding-bottom:5px; font-family: \'Satisfy\', cursive;">Hora de respirar fundo</div>\n            <div style="font-size:16px; padding-bottom:10px; color:#fff; width:100%; text-align:center;  padding-right:15px; padding-left:15px;">Iniciar a caminhada com fé e coragem é fundamental. Vamos lá?</div>\n            <button ion-button color="secondary"  (click)="goToHome()"> <ion-icon name="heart" style="padding-right:10px;"></ion-icon>Começar</button>\n          </div>\n      </div>\n  </ion-slide>\n \n</ion-slides>\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\aplicativos\embrios_novo\src\pages\intro\intro.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], Intro);
    return Intro;
}());

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConteudoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_detail__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__buscar_buscar__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConteudoPage = /** @class */ (function () {
    function ConteudoPage(navCtrl, storage, api, navParms) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.api = api;
        this.navParms = navParms;
        this.items = [];
        this.Categories = [];
        this.per_page = 2;
        this.page = 1;
        this.isLoading = false;
        this.ordenar = '0';
        console.log(this.navParms.get('cat_id'));
        this.getPosts();
    }
    ConteudoPage.prototype.getPosts = function (infiniteScroll) {
        var _this = this;
        if (infiniteScroll === void 0) { infiniteScroll = null; }
        if (!this.isLoading) {
            this.isLoading = true;
            if (infiniteScroll != null && infiniteScroll.ionRefresh) {
                this.page = 1;
            }
            var url = 'posts?_embed&categories=' + this.navParms.get('cat_id') + '&per_page=' + this.per_page + '&page=' + this.page;
            url += this.ordenar == '1' ? '&order=asc' : this.ordenar == '2' ? '&orderby=title&order=asc' : this.ordenar == '3' ? '&orderby=title&order=desc' : '';
            this.api.get(url)
                .subscribe(function (data) {
                _this.isLoading = false;
                _this.items = infiniteScroll != null && infiniteScroll.ionRefresh ? data : _this.items.concat(data);
                if (data.length === _this.per_page) {
                    _this.page++;
                }
                if (infiniteScroll != null) {
                    infiniteScroll.complete();
                }
            }, function (error) {
                _this.isLoading = false;
                if (infiniteScroll != null) {
                    infiniteScroll.complete();
                }
            });
        }
    };
    ConteudoPage.prototype.openDetail = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detail_detail__["a" /* DetailPage */], { post: item });
    };
    ConteudoPage.prototype.getCatName = function (cat_id) {
        var cat_name = '';
        this.api.Categories.forEach(function (element) {
            if (element.id == cat_id) {
                cat_name = element.name;
            }
        });
        return cat_name;
    };
    ConteudoPage.prototype.BuscarPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__buscar_buscar__["a" /* BuscarPage */]);
    };
    ConteudoPage.prototype.mudarOrdem = function () {
        this.items = [];
        this.page = 1;
        this.getPosts();
    };
    ConteudoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-conteudo',template:/*ion-inline-start:"C:\aplicativos\embrios_novo\src\pages\conteudo\conteudo.html"*/'<ion-header>\n    <ion-navbar >\n      \n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  \n      <ion-title  *ngFor="let item of items; let i=index"> \n        <div *ngIf="i<1" >{{getCatName(item.categories[0])}} </div>\n      </ion-title>\n\n      <ion-buttons end>\n          <button icon-only ion-button (click)="BuscarPage()"><ion-icon name="search"></ion-icon></button>\n        </ion-buttons>\n\n        \n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding >\n  \n\n      <ion-row>\n          <ion-item> \n              <ion-label text-right></ion-label>\n                <ion-select [(ngModel)]="ordenar" (ionChange)="mudarOrdem()" cancelText="Cancelar" okText="OK">\n                    <ion-option value="0">Recentes</ion-option>\n                    <ion-option value="1">Mais antigos</ion-option>\n                    <ion-option value="2">A ao Z</ion-option>\n                    <ion-option value="3">Z ao A</ion-option>\n                </ion-select>\n            </ion-item>   \n      </ion-row>\n    \n\n      <ion-refresher (ionRefresh)="getPosts($event)">\n          <ion-refresher-content></ion-refresher-content>\n      </ion-refresher>\n\n      \n      <ion-card *ngFor="let item of items" (click)="openDetail(item)">\n          <img src="{{item._embedded[\'wp:featuredmedia\'][0].media_details.sizes.medium.source_url}}"/>\n          <ion-card-content>\n  \n            <ion-card-title>\n              {{item.title.rendered}}\n            </ion-card-title>\n\n            <ion-badge color="second">\n              {{item.excerpt.rendered}}\n            </ion-badge>\n\n            <ion-badge color="light">\n              <ion-icon name="time"></ion-icon>\n              {{item.date | date: "dd.MM.yyy / hh:mm"}}\n            </ion-badge>\n             \n          </ion-card-content>\n        </ion-card>\n  \n        <div *ngIf="isLoading && page==1" text-center padding><ion-spinner></ion-spinner></div>\n        \n        <ion-infinite-scroll (ionInfinite)="getPosts($event)">\n            <ion-infinite-scroll-content></ion-infinite-scroll-content>\n          </ion-infinite-scroll>\n          \n  </ion-content>\n  '/*ion-inline-end:"C:\aplicativos\embrios_novo\src\pages\conteudo\conteudo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ConteudoPage);
    return ConteudoPage;
}());

//# sourceMappingURL=conteudo.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MostraMensagemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MostraMensagemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MostraMensagemPage = /** @class */ (function () {
    function MostraMensagemPage(storage, navCtrl, navParams) {
        var _this = this;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //resgata do storage e joga para a variavel mensagemRecebida
        this.storage.get('mensagemRecebida').then(function (executado) {
            _this.mensagemRecebida = executado;
        });
    }
    MostraMensagemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MostraMensagemPage');
    };
    MostraMensagemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mostra-mensagem',template:/*ion-inline-start:"C:\aplicativos\embrios_novo\src\pages\mostra-mensagem\mostra-mensagem.html"*/'<!--\n  Generated template for the MostraMensagemPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Você recebeu uma mensagem</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="font-size:16px;">\n  {{mensagemRecebida}}\n</ion-content>\n'/*ion-inline-end:"C:\aplicativos\embrios_novo\src\pages\mostra-mensagem\mostra-mensagem.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MostraMensagemPage);
    return MostraMensagemPage;
}());

//# sourceMappingURL=mostra-mensagem.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeriodoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__periodocalendario_periodocalendario__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PeriodoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PeriodoPage = /** @class */ (function () {
    function PeriodoPage(http, storage, navCtrl, navParams) {
        this.http = http;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.registroNaTabelaNome = 'pacienteNome';
    }
    PeriodoPage.prototype.pegaCalendario = function () {
        var _this = this;
        //esse bloco mostra as medicações para o paciente logado atualmente.
        this.storage.get(this.registroNaTabelaNome).then(function (valNome) {
            var dia = _this.dia;
            var habitual = _this.habitual;
            var postData = new FormData();
            postData.append('usuario', valNome);
            postData.append('dia', dia);
            postData.append('habitual', habitual);
            var url = 'http://www.embrios.com.br/aplicativo/users/ovulacao.php';
            _this.retornaCalendario = _this.http.post(url, postData);
            _this.retornaCalendario.subscribe(function (retornaCalendario) {
                _this.result = retornaCalendario;
                console.log(retornaCalendario);
                //console.log(medicacoes[3]['desfecho']);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__periodocalendario_periodocalendario__["a" /* PeriodocalendarioPage */], {
                    data: retornaCalendario
                }); //direciona para pagina home sem ficar aparecendo o botao de voltar, aparece o menu
            });
        });
    };
    PeriodoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VideoPage');
    };
    PeriodoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-periodo',template:/*ion-inline-start:"C:\aplicativos\embrios_novo\src\pages\periodo\periodo.html"*/'<!--\n  Generated template for the VideoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        \n    <ion-title>Período Fértil</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n \n  \n  <div style="color:#26b8b9; font-size:16px; padding:30px 30px 0 30px;">Por favor, selecione o primeiro dia do seu último período mestrual.</div>\n  <ion-item padding>\n      \n    <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="dia" placeholder="Selecione" cancelText ="Cancelar" doneText="Ok, Feito!" ></ion-datetime>\n  </ion-item>\n<div style="color:#26b8b9; font-size:16px; padding:0 30px 0 30px;" >Número habitual de dias em seu período.</div>\n  <ion-item padding>\n  \n      <ion-select [(ngModel)]="habitual" placeholder="Selecione" cancelText ="Cancelar"  >\n          <ion-option value="20">20</ion-option>\n          <ion-option value="21">21</ion-option>\n          <ion-option value="22">22</ion-option>\n          <ion-option value="23">23</ion-option>\n          <ion-option value="24">24</ion-option>\n          <ion-option value="25">25</ion-option>\n          <ion-option value="26">26</ion-option>\n          <ion-option value="27">27</ion-option>\n          <ion-option value="28">28</ion-option>\n          <ion-option value="29">29</ion-option>\n          <ion-option value="30">30</ion-option>\n          <ion-option value="31">31</ion-option>\n          <ion-option value="32">32</ion-option>\n          <ion-option value="33">33</ion-option>\n          <ion-option value="34">34</ion-option>\n          <ion-option value="35">35</ion-option>\n          <ion-option value="36">36</ion-option>\n          <ion-option value="37">37</ion-option>\n          <ion-option value="38">38</ion-option>\n          <ion-option value="39">39</ion-option>\n          <ion-option value="40">40</ion-option>\n          <ion-option value="41">41</ion-option>\n          <ion-option value="42">42</ion-option>\n          <ion-option value="43">43</ion-option>\n          <ion-option value="44">44</ion-option>\n          <ion-option value="45">45</ion-option>\n        </ion-select>\n </ion-item>\n\n  <div class="col" style="width: 100%; text-align: center">\n    <button ion-button (click)="pegaCalendario()" padding style="padding:20px; background-color: #26b8b9; padding-right:25px; padding-left:25px;">Calcular</button>\n  </div>\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\aplicativos\embrios_novo\src\pages\periodo\periodo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PeriodoPage);
    return PeriodoPage;
}());

//# sourceMappingURL=periodo.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeriodocalendarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PeriodocalendarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PeriodocalendarioPage = /** @class */ (function () {
    function PeriodocalendarioPage(http, storage, navCtrl, navParams) {
        this.http = http;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.registroNaTabelaNome = 'pacienteNome';
        this.resultado = navParams.get('data');
        this.proximo = this.resultado['proximo'];
        this.primeiro = this.resultado['primeiro'];
        this.ultimo = this.resultado['ultimo'];
        this.nasce = this.resultado['filho_nasce'];
    }
    PeriodocalendarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PeriodocalendarioPage');
    };
    PeriodocalendarioPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get(this.registroNaTabelaNome).then(function (valNome) {
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 2; //January is 0!
            var yyyy = today.getFullYear();
            var newDate = (yyyy + "," + mm + "," + dd);
            var novaData = newDate;
            _this.calendarOptions = {
                buttonText: {
                    today: 'Hoje',
                    month: 'Mês',
                    week: 'Semana',
                    day: 'Dia',
                },
                selectable: true,
                selectHelper: true,
                height: 360,
                defaultDate: new Date(novaData),
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
                        url: 'http://www.embrios.com.br/aplicativo/users/ovulacao_calendario.php?usuario=' + valNome,
                        type: 'GET',
                        data: {},
                        error: function () {
                            alert('there was an error while fetching events!');
                        },
                    }
                    // mais codigos aqui...
                ]
            };
        });
    };
    PeriodocalendarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-periodocalendario',template:/*ion-inline-start:"C:\aplicativos\embrios_novo\src\pages\periodocalendario\periodocalendario.html"*/'<!--\n  Generated template for the PeriodocalendarioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Resultado</ion-title>\n  </ion-navbar>\n \n</ion-header>\n\n\n<ion-content >\n\n \n  <div *ngIf="calendarOptions" padding>\n    <ng-fullcalendar #ucCalendar [options]="calendarOptions" [(eventsModel)]="events" style="    font-size: 14px;"></ng-fullcalendar>\n  </div>\n\n  <div style="padding-right: 20px; padding-left: 20px;">\n  <p  style="color:#f53d3d; font-size:16px;"> <ion-icon ios="ios-square" md="md-square" color="danger" style="font-size:25px;"></ion-icon> Próximo período mestrual</p>\n\n  <p  style="color:#e4afac; font-size:16px;"> <ion-icon ios="ios-square" md="md-square" style="font-size:25px;"></ion-icon>\n   Seu período mais fértil</p>\n\n   \n </div>\n\n\n   <ion-card>\n      <ion-card-content>\n          <p  style="color:#26b8b9; font-size:14px;"> <ion-icon name="heart"  color="secondary" style="font-size:25px;"></ion-icon>\n            Se você conceber neste prazo, a estimativa para nascimento do filho(a) será  <b>{{nasce}}</b></p>\n      </ion-card-content>\n    </ion-card>\n\n\n\n  \n\n \n\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\aplicativos\embrios_novo\src\pages\periodocalendario\periodocalendario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PeriodocalendarioPage);
    return PeriodocalendarioPage;
}());

//# sourceMappingURL=periodocalendario.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesconectadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DesconectadoPage = /** @class */ (function () {
    function DesconectadoPage(navParams, view, network, navCtrl) {
        var _this = this;
        this.navParams = navParams;
        this.view = view;
        this.network = network;
        this.navCtrl = navCtrl;
        //verifica se a pessoa esta conectada e fecha popup modal
        this.network.onConnect().subscribe(function () {
            _this.closeModal();
            window.location.reload(); //recarrega a página atual
        });
    }
    DesconectadoPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    DesconectadoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-desconectado',template:/*ion-inline-start:"C:\aplicativos\embrios_novo\src\pages\desconectado\desconectado.html"*/'<!--\n  Generated template for the DesconectadoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n\n\n</ion-header>\n\n\n<ion-content padding>\n\n  \n\n\n    <div style="width: 100%; text-align: center; vertical-align: middle; margin-top:40%;">\n      <div class="desconectado" style="padding-top:10px; text-align: right; padding-bottom: 10px; width:100%; height:150px; "> </div>\n      <h1 style="color:#5c666f;">Você não esta conectado!</h1>\n      Nesse momento você não recebe notificações de medicamentos, agenda e demais avisos. \n    </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\aplicativos\embrios_novo\src\pages\desconectado\desconectado.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], DesconectadoPage);
    return DesconectadoPage;
}());

//# sourceMappingURL=desconectado.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(361);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_intro_intro__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_api_api__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_detail_detail__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_conteudo_conteudo__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_buscar_buscar__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_in_app_browser__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng_fullcalendar__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_push__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_video_video__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_periodo_periodo__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_file__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_file_transfer__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_periodocalendario_periodocalendario__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_network__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_desconectado_desconectado__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_mostra_mensagem_mostra_mensagem__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_mostra_mensagem_mostra_mensagem__["a" /* MostraMensagemPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_periodo_periodo__["a" /* PeriodoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_conteudo_conteudo__["a" /* ConteudoPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_desconectado_desconectado__["a" /* DesconectadoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_buscar_buscar__["a" /* BuscarPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_video_video__["a" /* VideoPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_periodocalendario_periodocalendario__["a" /* PeriodocalendarioPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_intro_intro__["a" /* Intro */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_17_ng_fullcalendar__["a" /* FullCalendarModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    platforms: {
                        ios: {
                            backButtonText: ''
                        }
                    }
                }, {
                    links: [
                        { loadChildren: '../pages/noticias/noticias.module#NoticiasPageModule', name: 'NoticiasPage', segment: 'noticias', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_periodo_periodo__["a" /* PeriodoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_conteudo_conteudo__["a" /* ConteudoPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_desconectado_desconectado__["a" /* DesconectadoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_buscar_buscar__["a" /* BuscarPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_periodocalendario_periodocalendario__["a" /* PeriodocalendarioPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_mostra_mensagem_mostra_mensagem__["a" /* MostraMensagemPage */],
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_video_video__["a" /* VideoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_intro_intro__["a" /* Intro */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__providers_api_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiProvider = /** @class */ (function () {
    function ApiProvider(http) {
        this.http = http;
        this.API_URL = 'http://www.embrios.com.br/wp-json/wp/v2/';
        this.Categories = [];
    }
    ApiProvider.prototype.get = function (query) {
        if (query === void 0) { query = ''; }
        return this.http.get(this.API_URL + query);
    };
    ApiProvider.prototype.getCategories = function () {
        var _this = this;
        this.get('categories?parent=47').subscribe(function (data) {
            _this.Categories = data;
        });
    };
    ApiProvider.prototype.getCatName = function (cat_id) {
        var cat_name = '';
        this.Categories.forEach(function (element) {
            if (element.id == cat_id) {
                cat_name = element.name;
            }
        });
        return cat_name;
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_intro_intro__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_conteudo_conteudo__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_mostra_mensagem_mostra_mensagem__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_push__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_periodo_periodo__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_network__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_desconectado_desconectado__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var MyApp = /** @class */ (function () {
    function MyApp(http, alertCtrl, modal, network, statusBar, push, api, platform, loadingCtrl, storage) {
        var _this = this;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.modal = modal;
        this.network = network;
        this.statusBar = statusBar;
        this.push = push;
        this.api = api;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        //verifica se a pessoa esta conectada e direciona paga pagina não conectado
        // o codigo que fecha esta dentro do desconectados.ts
        this.network.onDisconnect().subscribe(function () {
            var myModal = _this.modal.create(__WEBPACK_IMPORTED_MODULE_14__pages_desconectado_desconectado__["a" /* DesconectadoPage */]);
            myModal.present();
        });
        var app = {
            initialize: function () {
                //console.log("Iniciando app");
                this.bindEvents();
            },
            bindEvents: function () {
                // console.log("Construindo eventos");
                document.addEventListener('deviceready', this.onDeviceReady, false);
            },
            onDeviceReady: function () {
                //console.log("Pronto dispositivo");
                var _this = this;
                notificationListener.listen(function (n) {
                    console.log("Notificação recebida " + JSON.stringify(n));
                    var kk = JSON.stringify(n);
                    var mensagem = JSON.parse(kk); //antes de capturar os dados usando parse, é necessário converter para stringify
                    console.log(mensagem['title']);
                    console.log(mensagem['package']);
                    var url = 'http://www.embrios.com.br/aplicativo/users/salvaWhats.php';
                    var title = mensagem['title'];
                    var programa = mensagem['package'];
                    var text = mensagem['text'];
                    var textLine = mensagem['textLine'];
                    var postData = new FormData();
                    postData.append('title', title);
                    postData.append('package', programa);
                    postData.append('text', text);
                    postData.append('textLine', textLine);
                    _this.whats = http.post(url, postData); //envio todos os imputs acima
                    _this.whats.subscribe(function (whats) {
                        //console.log(whats);
                    });
                }, function (e) {
                    console.log("Notification Error " + e);
                });
            }
        };
        app.initialize();
        //this.statusBar.overlaysWebView(true);//cor da status bar onde tem o relogio
        this.statusBar.backgroundColorByHexString('#e4afac'); //cor da status bar onde tem o relogio
        this.pushSetup();
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */] },
            //{ title: 'Lista', component: ListPage },
            //{ title: 'Calendário', component: AppComponent },
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */] },
            { title: 'Período Fértil', component: __WEBPACK_IMPORTED_MODULE_12__pages_periodo_periodo__["a" /* PeriodoPage */] }
        ];
        this.presentLoading();
        this.platform.ready().then(function () {
            _this.storage.get('slideIntro').then(function (executado) {
                console.log(executado); //mostra no console se a intro já foi executada, mostra true como sendo sim
                if (executado === 'jaMostrado') {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_intro_intro__["a" /* Intro */];
                    _this.storage.set('slideIntro', 'jaMostrado');
                }
                _this.loader.dismiss();
            });
        });
    }
    MyApp.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Carregando..."
        });
        this.loader.present();
    };
    MyApp.prototype.aoclicar = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.api.getCategories();
        });
    };
    MyApp.prototype.openPage = function (cat_id) {
        if (cat_id === void 0) { cat_id = 0; }
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_conteudo_conteudo__["a" /* ConteudoPage */], { cat_id: cat_id });
    };
    MyApp.prototype.pushSetup = function () {
        var _this = this;
        var options = {
            android: {
                senderID: '798267191796'
            },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'false'
            }
        };
        var pushObject = this.push.init(options);
        pushObject.on('notification').subscribe(function (notification) { return console.log('Received a notification', notification); });
        pushObject.on('registration').subscribe(function (registration) { return console.log('Device registered', registration); });
        pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin', error); });
        //isso direciona para a pagina quando a notificação push chega
        pushObject.on('notification').subscribe(function (notification) {
            //se a condição for verdadeira puxa a pagina, aqui é enviado junto o parametro semSpinner.
            if (notification.additionalData.pagina == "mensagem") {
                var myModal = _this.modal.create(__WEBPACK_IMPORTED_MODULE_8__pages_mostra_mensagem_mostra_mensagem__["a" /* MostraMensagemPage */]); //abre pagina da mensagem em forma de modal
                myModal.present();
                //grava a mensagem recebida no storage
                _this.storage.set('mensagemRecebida', notification.additionalData.mensagemCompleta);
            }
            //faz mostrar na tela o codigo de segurança
            if (notification.additionalData.mensagemCompleta != "vazio") {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Você recebeu uma nova mensagem',
                    message: 'Você foi direcionado para a página da mensagem.',
                    buttons: [
                        {
                            text: 'OK, Ler mensagem',
                            role: 'cancel',
                            handler: function () {
                                //console.log('Alguma coisa aqui');
                            }
                        }
                    ]
                });
                alert_1.present();
            }
        });
        pushObject.on('registration').subscribe(function (registration) {
            var formData = new FormData();
            formData.append('device_token', registration.registrationId);
            //defino a variavel codigoToken para carregar o token do dispositivo
            _this.codigoToken = registration.registrationId;
            //esse bloco armazena a variavel em local storage 
            localStorage.setItem("token", _this.codigoToken); //salva no localstorage
            var token = localStorage.getItem("token"); //busca do localstorage
            console.log('O token é:', token); //mostra log da variavel buscada do localstorage          
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\aplicativos\embrios_novo\src\app\app.html"*/'        \n    \n      <ion-menu [content]="content" >\n\n\n\n            <ion-header style = "width:100%; height:235px; background-image: url(\'assets/imgs/pintura.jpg\'); -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover;  background-size: cover;">\n          \n                  <div style = "width:250px; left: 50%; position: absolute; margin-left: -125px; top:28%; margin-top:-70px;">\n                      <img src = "assets/imgs/branco.png" />\n                  </div>\n  \n            </ion-header>\n  \n  \n          \n              <ion-content style="background-image: linear-gradient(45deg, #e4dede , #fff 50%); ">\n              \n                  \n                  <ion-list padding>\n  \n                              \n                        <button menuClose ion-item *ngFor="let p of pages" detail-push (click)="aoclicar(p)" style="border-color: rgba(0, 0, 0, 0); 	background-color: rgba(0, 0, 0, 0);">\n                                <ion-icon name="ios-checkmark-circle-outline"></ion-icon>\n                                {{p.title}}\n                        </button>\n\n\n                      <button menuClose ion-item *ngFor="let cat of api.Categories" (click)="openPage(cat.id)" style="border-color: rgba(0, 0, 0, 0); 	background-color: rgba(0, 0, 0, 0);">\n                            <ion-icon name="ios-checkmark-circle-outline"></ion-icon>   \n                        {{cat.name}}\n                      </button>\n  \n\n\n\n\n                  </ion-list>\n                  \n  \n                \n              </ion-content>\n          \n  \n  \n  \n          </ion-menu>\n          \n          <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n          <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\aplicativos\embrios_novo\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_push__["a" /* Push */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\aplicativos\embrios_novo\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\aplicativos\embrios_novo\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 218,
	"./af.js": 218,
	"./ar": 219,
	"./ar-dz": 220,
	"./ar-dz.js": 220,
	"./ar-kw": 221,
	"./ar-kw.js": 221,
	"./ar-ly": 222,
	"./ar-ly.js": 222,
	"./ar-ma": 223,
	"./ar-ma.js": 223,
	"./ar-sa": 224,
	"./ar-sa.js": 224,
	"./ar-tn": 225,
	"./ar-tn.js": 225,
	"./ar.js": 219,
	"./az": 226,
	"./az.js": 226,
	"./be": 227,
	"./be.js": 227,
	"./bg": 228,
	"./bg.js": 228,
	"./bm": 229,
	"./bm.js": 229,
	"./bn": 230,
	"./bn.js": 230,
	"./bo": 231,
	"./bo.js": 231,
	"./br": 232,
	"./br.js": 232,
	"./bs": 233,
	"./bs.js": 233,
	"./ca": 234,
	"./ca.js": 234,
	"./cs": 235,
	"./cs.js": 235,
	"./cv": 236,
	"./cv.js": 236,
	"./cy": 237,
	"./cy.js": 237,
	"./da": 238,
	"./da.js": 238,
	"./de": 239,
	"./de-at": 240,
	"./de-at.js": 240,
	"./de-ch": 241,
	"./de-ch.js": 241,
	"./de.js": 239,
	"./dv": 242,
	"./dv.js": 242,
	"./el": 243,
	"./el.js": 243,
	"./en-au": 244,
	"./en-au.js": 244,
	"./en-ca": 245,
	"./en-ca.js": 245,
	"./en-gb": 246,
	"./en-gb.js": 246,
	"./en-ie": 247,
	"./en-ie.js": 247,
	"./en-il": 248,
	"./en-il.js": 248,
	"./en-nz": 249,
	"./en-nz.js": 249,
	"./eo": 250,
	"./eo.js": 250,
	"./es": 251,
	"./es-do": 252,
	"./es-do.js": 252,
	"./es-us": 253,
	"./es-us.js": 253,
	"./es.js": 251,
	"./et": 254,
	"./et.js": 254,
	"./eu": 255,
	"./eu.js": 255,
	"./fa": 256,
	"./fa.js": 256,
	"./fi": 257,
	"./fi.js": 257,
	"./fo": 258,
	"./fo.js": 258,
	"./fr": 259,
	"./fr-ca": 260,
	"./fr-ca.js": 260,
	"./fr-ch": 261,
	"./fr-ch.js": 261,
	"./fr.js": 259,
	"./fy": 262,
	"./fy.js": 262,
	"./gd": 263,
	"./gd.js": 263,
	"./gl": 264,
	"./gl.js": 264,
	"./gom-latn": 265,
	"./gom-latn.js": 265,
	"./gu": 266,
	"./gu.js": 266,
	"./he": 267,
	"./he.js": 267,
	"./hi": 268,
	"./hi.js": 268,
	"./hr": 269,
	"./hr.js": 269,
	"./hu": 270,
	"./hu.js": 270,
	"./hy-am": 271,
	"./hy-am.js": 271,
	"./id": 272,
	"./id.js": 272,
	"./is": 273,
	"./is.js": 273,
	"./it": 274,
	"./it.js": 274,
	"./ja": 275,
	"./ja.js": 275,
	"./jv": 276,
	"./jv.js": 276,
	"./ka": 277,
	"./ka.js": 277,
	"./kk": 278,
	"./kk.js": 278,
	"./km": 279,
	"./km.js": 279,
	"./kn": 280,
	"./kn.js": 280,
	"./ko": 281,
	"./ko.js": 281,
	"./ky": 282,
	"./ky.js": 282,
	"./lb": 283,
	"./lb.js": 283,
	"./lo": 284,
	"./lo.js": 284,
	"./lt": 285,
	"./lt.js": 285,
	"./lv": 286,
	"./lv.js": 286,
	"./me": 287,
	"./me.js": 287,
	"./mi": 288,
	"./mi.js": 288,
	"./mk": 289,
	"./mk.js": 289,
	"./ml": 290,
	"./ml.js": 290,
	"./mn": 291,
	"./mn.js": 291,
	"./mr": 292,
	"./mr.js": 292,
	"./ms": 293,
	"./ms-my": 294,
	"./ms-my.js": 294,
	"./ms.js": 293,
	"./mt": 295,
	"./mt.js": 295,
	"./my": 296,
	"./my.js": 296,
	"./nb": 297,
	"./nb.js": 297,
	"./ne": 298,
	"./ne.js": 298,
	"./nl": 299,
	"./nl-be": 300,
	"./nl-be.js": 300,
	"./nl.js": 299,
	"./nn": 301,
	"./nn.js": 301,
	"./pa-in": 302,
	"./pa-in.js": 302,
	"./pl": 303,
	"./pl.js": 303,
	"./pt": 304,
	"./pt-br": 305,
	"./pt-br.js": 305,
	"./pt.js": 304,
	"./ro": 306,
	"./ro.js": 306,
	"./ru": 307,
	"./ru.js": 307,
	"./sd": 308,
	"./sd.js": 308,
	"./se": 309,
	"./se.js": 309,
	"./si": 310,
	"./si.js": 310,
	"./sk": 311,
	"./sk.js": 311,
	"./sl": 312,
	"./sl.js": 312,
	"./sq": 313,
	"./sq.js": 313,
	"./sr": 314,
	"./sr-cyrl": 315,
	"./sr-cyrl.js": 315,
	"./sr.js": 314,
	"./ss": 316,
	"./ss.js": 316,
	"./sv": 317,
	"./sv.js": 317,
	"./sw": 318,
	"./sw.js": 318,
	"./ta": 319,
	"./ta.js": 319,
	"./te": 320,
	"./te.js": 320,
	"./tet": 321,
	"./tet.js": 321,
	"./tg": 322,
	"./tg.js": 322,
	"./th": 323,
	"./th.js": 323,
	"./tl-ph": 324,
	"./tl-ph.js": 324,
	"./tlh": 325,
	"./tlh.js": 325,
	"./tr": 326,
	"./tr.js": 326,
	"./tzl": 327,
	"./tzl.js": 327,
	"./tzm": 328,
	"./tzm-latn": 329,
	"./tzm-latn.js": 329,
	"./tzm.js": 328,
	"./ug-cn": 330,
	"./ug-cn.js": 330,
	"./uk": 331,
	"./uk.js": 331,
	"./ur": 332,
	"./ur.js": 332,
	"./uz": 333,
	"./uz-latn": 334,
	"./uz-latn.js": 334,
	"./uz.js": 333,
	"./vi": 335,
	"./vi.js": 335,
	"./x-pseudo": 336,
	"./x-pseudo.js": 336,
	"./yo": 337,
	"./yo.js": 337,
	"./zh-cn": 338,
	"./zh-cn.js": 338,
	"./zh-hk": 339,
	"./zh-hk.js": 339,
	"./zh-tw": 340,
	"./zh-tw.js": 340
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 426;

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detail_detail__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__buscar_buscar__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__video_video__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_transfer__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_in_app_browser__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var HomePage = /** @class */ (function () {
    function HomePage(inAppBrouser, domSanitizer, alertCtrl, transfer, file, loadingCtrl, camera, http, navCtrl, storage, api, navParms) {
        var _this = this;
        this.inAppBrouser = inAppBrouser;
        this.domSanitizer = domSanitizer;
        this.alertCtrl = alertCtrl;
        this.transfer = transfer;
        this.file = file;
        this.loadingCtrl = loadingCtrl;
        this.camera = camera;
        this.http = http;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.api = api;
        this.navParms = navParms;
        this.SwipedTabsIndicator = null;
        this.tabs = [];
        this.items = [];
        this.per_page = 2;
        this.page = 1;
        this.isLoading = false;
        this.ordenar = '0';
        this.Categories = [];
        this.slideGestante = false;
        this.avisoLogin = true;
        this.conteudoMedicacoes = true;
        this.conteudoNaoComecou = false;
        this.slideCalendario = false;
        this.slideMedicacoes = false;
        this.slideVideos = false;
        this.registroNaTabelaNome = 'pacienteNome';
        this.registroNaTabelaSenha = 'pacienteSenha';
        this.myphoto = "http://www.embrios.com.br/aplicativo/users/inicial.jpg";
        console.log(this.navParms.get('cat_id'));
        this.getPosts();
        this.jaBaixando = this.domSanitizer.bypassSecurityTrustResourceUrl("http://www.embrios.com.br/aplicativo/pdf/branco.php");
        //mostra ou esconde o aviso de login
        this.storage.get('AvisoLogin').then(function (executado) {
            if (executado === 'fechado') {
                _this.avisoLogin = false;
            }
            else {
                _this.avisoLogin = true;
                //acima ativa o ativo, mas se a pessoa já fez login, ai mesmo assim o sistema tem de desativar o aviso
                _this.storage.get(_this.registroNaTabelaNome).then(function (valNome) {
                    if (valNome === undefined || valNome === null || valNome.length === 0 || valNome === 'vazio') {
                        _this.avisoLogin = true;
                    }
                    else {
                        _this.avisoLogin = false;
                    }
                });
            }
        });
        //esse bloco de código recupera do storage o nome do paciente depois de logado e faz avaliação se mostra ou não as abras na pagina home
        this.storage.get(this.registroNaTabelaNome).then(function (valNome) {
            console.log('O paciente é:', valNome);
            if (valNome === undefined || valNome === null || valNome.length === 0 || valNome === 'vazio') {
                //Se não tiver logado, retira varias tabs e deixa assim
                _this.tabs = [];
            }
            else {
                //caso logado, mostra estas tabs no topo da pagina home
                _this.tabs = ["Home", "Calendário", "Medicações"];
                _this.slideCalendario = true;
                _this.slideMedicacoes = true;
            }
        });
        //esse bloco mostra as medicações para o paciente logado atualmente.
        this.storage.get(this.registroNaTabelaNome).then(function (valNome) {
            var postData = new FormData();
            postData.append('usuario', valNome);
            var url = 'http://www.embrios.com.br/aplicativo/users/agenda/app_medicacoes.php';
            _this.medicacoes = _this.http.post(url, postData);
            _this.medicacoes.subscribe(function (medicacoes) {
                _this.result = medicacoes;
                //faço um if para ver se não retorna nulo, por se não tiver data definida na ficha na plataforma, vai retornar null e vai dar erro sem esse if
                if (medicacoes === undefined || medicacoes === null || medicacoes.length === 0) {
                    _this.conteudoMedicacoes = false; //oculto o conteúdo medicações caso retorne vazio
                    _this.conteudoNaoComecou = true;
                }
                else {
                    _this.diaTratamento = medicacoes[0]['diatratamento'];
                    _this.conteudoMedicacoes = true; //mostra o conteúdo medicações caso retorne vazio
                    _this.conteudoNaoComecou = false;
                }
                console.log(medicacoes);
                //console.log(medicacoes[3]['desfecho']);
            });
        });
        //esse bloco mostra as mensagens para a gestante logado atualmente.
        this.storage.get(this.registroNaTabelaNome).then(function (valNome) {
            var postData = new FormData();
            postData.append('usuario', valNome);
            var url = 'http://www.embrios.com.br/aplicativo/users/agenda/agenda_gestante.php';
            _this.gestante = _this.http.post(url, postData);
            _this.gestante.subscribe(function (gestante) {
                _this.gest = gestante;
                console.log(gestante);
                //console.log(medicacoes[3]['desfecho']);
            });
        });
        //verifico se a ficha tem desfecho, se tiver desfecho oculta a guia medicamentos
        this.storage.get(this.registroNaTabelaNome).then(function (valNome) {
            var postData = new FormData();
            postData.append('usuario', valNome);
            var url = 'http://www.embrios.com.br/aplicativo/users/agenda/desfecho.php';
            _this.medicacoes = _this.http.post(url, postData);
            _this.medicacoes.subscribe(function (medicacoes) {
                //console.log(medicacoes[0]['desfecho']);
                //console.log(medicacoes[1]['gestante']);
                //verifico se a ficha tem desfecho, se tiver desfecho ai a guia de medicações é ocultada
                if (medicacoes[0]['desfecho'] !== '' && medicacoes[0]['desfecho'] !== null && medicacoes[0]['desfecho'] !== undefined && valNome !== null && valNome !== undefined) {
                    _this.slideMedicacoes = false; //oculta a guia medicamentos
                    _this.tabs = ["Home", "Calendário"]; //oculta a guia medicamentos
                    console.log("Desfecho:");
                    console.log(medicacoes[0]['desfecho']);
                }
                //verifico se o usuario é gestante, se for ai mostra guia gestante
                if (medicacoes[1]['gestante'] === 'sim' && medicacoes[0]['desfecho'] !== '' && medicacoes[0]['desfecho'] !== null && medicacoes[0]['desfecho'] !== undefined) {
                    _this.slideMedicacoes = false; //oculta a guia medicamentos
                    _this.slideGestante = true; //mostra a guia gestante
                    _this.tabs = ["Home", "Calendário", "Gestante"]; //oculta a guia medicamentos
                }
                //verifico se o usuario é mae, se for ai mostra guia depoimentos
                if (medicacoes[1]['gestante'] === 'mae' && medicacoes[0]['desfecho'] !== '' && medicacoes[0]['desfecho'] !== null && medicacoes[0]['desfecho'] !== undefined) {
                    _this.slideMedicacoes = false; //mostra a guia medicamentos
                    _this.slideVideos = true; //mostra a guia depoimentos
                    _this.slideGestante = false;
                    _this.tabs = ["Home", "Calendário", "Depoimento"]; //oculta a guia medicamentos
                }
            });
        });
    }
    HomePage.prototype.getPosts = function (infiniteScroll) {
        var _this = this;
        if (infiniteScroll === void 0) { infiniteScroll = null; }
        if (!this.isLoading) {
            this.isLoading = true;
            if (infiniteScroll != null && infiniteScroll.ionRefresh) {
                this.page = 1;
            }
            var url = 'posts?_embed&categories=47&per_page=' + this.per_page + '&page=' + this.page;
            url += this.ordenar == '1' ? '&order=asc' : this.ordenar == '2' ? '&orderby=title&order=asc' : this.ordenar == '3' ? '&orderby=title&order=desc' : '';
            this.api.get(url)
                .subscribe(function (data) {
                _this.isLoading = false;
                _this.items = infiniteScroll != null && infiniteScroll.ionRefresh ? data : _this.items.concat(data);
                if (data.length === _this.per_page) {
                    _this.page++;
                }
                if (infiniteScroll != null) {
                    infiniteScroll.complete();
                }
            }, function (error) {
                _this.isLoading = false;
                if (infiniteScroll != null) {
                    infiniteScroll.complete();
                }
            });
        }
    };
    HomePage.prototype.openDetail = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__detail_detail__["a" /* DetailPage */], { post: item });
    };
    HomePage.prototype.getCatName = function (cat_id) {
        var cat_name = '';
        this.api.Categories.forEach(function (element) {
            if (element.id == cat_id) {
                cat_name = element.name;
            }
        });
        return cat_name;
    };
    HomePage.prototype.BuscarPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__buscar_buscar__["a" /* BuscarPage */]);
    };
    HomePage.prototype.mudarOrdem = function () {
        this.items = [];
        this.page = 1;
        this.getPosts();
    };
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.SwipedTabsIndicator = document.getElementById("indicator");
        var token = localStorage.getItem("token"); //busca token do dispositivo no localstorage
        this.storage.get(this.registroNaTabelaNome).then(function (valNome) {
            var postData = new FormData();
            postData.append('usuario', valNome);
            postData.append('token', token);
            var url = 'http://www.embrios.com.br/aplicativo/users/agenda/salva_token_usuario.php';
            _this.medicacoes = _this.http.post(url, postData);
            _this.medicacoes.subscribe(function (medicacoes) {
                //alert(medicacoes[0]['feito']); // a mensagem desse alert esta dentro do arquivo acima
            });
        });
    };
    HomePage.prototype.selectTab = function (index) {
        this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (100 * index) + '%,0,0)';
        this.SwipedTabsSlider.slideTo(index, 500);
    };
    HomePage.prototype.updateIndicatorPosition = function () {
        // this condition is to avoid passing to incorrect index
        if (this.SwipedTabsSlider.length() > this.SwipedTabsSlider.getActiveIndex()) {
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (this.SwipedTabsSlider.getActiveIndex() * 100) + '%,0,0)';
        }
    };
    HomePage.prototype.animateIndicator = function ($event) {
        if (this.SwipedTabsIndicator)
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress * (this.SwipedTabsSlider.length() - 1)) * 100) + '%,0,0)';
    };
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get(this.registroNaTabelaNome).then(function (valNome) {
            _this.calendarOptions = {
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
                        url: 'http://www.embrios.com.br/aplicativo/users/agenda/retrieve-data.php?usuario=' + valNome,
                        type: 'GET',
                        data: {},
                        error: function () {
                            //alert('there was an error while fetching events!');
                        },
                        color: '#26b8b9',
                        textColor: '#fff' // a non-ajax option
                    }
                    // mais codigos aqui...
                ]
            };
        });
    };
    HomePage.prototype.ativaNotificacao = function (medicacaoAtiva, quantidade, horaTomar) {
        var _this = this;
        var token = localStorage.getItem("token"); //busca token do dispositivo no localstorage
        this.storage.get(this.registroNaTabelaNome).then(function (valNome) {
            var postData = new FormData();
            postData.append('notificacao', 'ativa');
            postData.append('medicacaoAtiva', medicacaoAtiva);
            postData.append('quantidade', quantidade);
            postData.append('horaTomar', horaTomar);
            postData.append('usuario', valNome);
            postData.append('token', token);
            var url = 'http://www.embrios.com.br/aplicativo/users/agenda/ativaDesativaNotificacao.php';
            _this.medicacoes = _this.http.post(url, postData);
            _this.medicacoes.subscribe(function (medicacoes) {
                //alert(medicacoes[0]['feito']); // a mensagem desse alert esta dentro do arquivo acima
                var alertMedic = _this.alertCtrl.create({
                    title: '',
                    subTitle: medicacoes[0]['feito'],
                    buttons: ['OK']
                });
                alertMedic.present();
            });
        });
    };
    HomePage.prototype.desativaNotificacao = function (medicacaoAtiva, quantidade, horaTomar) {
        var _this = this;
        this.storage.get(this.registroNaTabelaNome).then(function (valNome) {
            var postData = new FormData();
            postData.append('notificacao', 'ativa');
            postData.append('medicacaoAtiva', medicacaoAtiva);
            postData.append('quantidade', quantidade);
            postData.append('horaTomar', horaTomar);
            postData.append('usuario', valNome);
            var url = 'http://www.embrios.com.br/aplicativo/users/agenda/deletaDesativaNotificacao.php';
            _this.medicacoes = _this.http.post(url, postData);
            _this.medicacoes.subscribe(function (medicacoes) {
                //alert(medicacoes[0]['feito']); // a mensagem desse alert esta dentro do arquivo acima
                var alertTiraMed = _this.alertCtrl.create({
                    title: '',
                    subTitle: medicacoes[0]['feito'],
                    buttons: ['OK']
                });
                alertTiraMed.present();
            });
        });
    };
    HomePage.prototype.rodaVideoYoutube = function (medicacaoAtiva, quantidade, horaTomar) {
        var _this = this;
        var postData = new FormData();
        postData.append('medicacaoAtiva', medicacaoAtiva);
        var url = 'http://www.embrios.com.br/aplicativo/users/agenda/buscaVideoMedicamento.php';
        this.medicacoes = this.http.post(url, postData);
        this.medicacoes.subscribe(function (medicacoes) {
            //console.log(medicacoes[0]['linkVideo']);
            var str = medicacoes[0]['linkVideo'];
            var nome = medicacoes[0]['nome'];
            //esse bloco tira o watch?v= do link do youtube e substitiu por embed/ pois sem isso o video não roda, da problemas de permissão
            var re = "watch?v=";
            var newstr = str.replace(re, "embed/");
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__video_video__["a" /* VideoPage */], {
                link: newstr,
                nome: nome
            });
        });
    };
    HomePage.prototype.atualizaCalendario = function () {
        // window.location.reload();//recarrega a página atual
        //this.navCtrl.setRoot(HomePage); //abre pagina mantendo o menu pilha
    };
    HomePage.prototype.baixarFicha = function () {
        var _this = this;
        this.storage.get(this.registroNaTabelaNome).then(function (valNome) {
            var options = {
                zoon: 'yes',
                enableViewportScale: 'yes',
                location: 'no'
            };
            var browser = _this.inAppBrouser.create('http://www.embrios.com.br/aplicativo/pdf/gera_imagem.php?id_paciente=' + valNome, '_system', options);
            //const browser = window.open(encodeURI('http://www.embrios.com.br/aplicativo/pdf/gera_imagem.php?id_paciente='+valNome),"_blank","location=no,enableViewportScale=yes");
        });
    };
    HomePage.prototype.direcionaLogin = function () {
        // window.location.reload();//recarrega a página atual
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__login_login__["a" /* LoginPage */]); //abre pagina mantendo o menu pilha
    };
    HomePage.prototype.fechaAvisoLogin = function () {
        var _this = this;
        this.avisoLogin = false;
        this.storage.get('AvisoLogin').then(function (executado) {
            _this.storage.set('AvisoLogin', 'fechado'); //grava o valor fechado na variavel no storage
        });
    };
    HomePage.prototype.abrirGaleria = function () {
        var _this = this;
        var options = {
            quality: 85,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.myphoto = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    HomePage.prototype.cropImage = function () {
        var _this = this;
        var options = {
            quality: 85,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false,
            allowEdit: true,
            targetWidth: 800,
            targetHeight: 800
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.myphoto = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    HomePage.prototype.uploadImage = function () {
        var _this = this;
        //Show loading
        var loader = this.loadingCtrl.create({
            content: "Enviando..."
        });
        loader.present();
        //create file transfer object
        var fileTransfer = this.transfer.create();
        //random int
        var random = Math.floor(Math.random() * 1000000);
        //option transfer
        var options = {
            fileKey: 'photo',
            fileName: "mae_" + random + ".jpg",
            chunkedMode: false,
            httpMethod: 'post',
            mimeType: "image/jpeg",
            headers: {}
        };
        //file transfer action
        fileTransfer.upload(this.myphoto, 'http://www.embrios.com.br/aplicativo/users/agenda/recebeFotoApp.php', options)
            .then(function (data) {
            _this.storage.get(_this.registroNaTabelaNome).then(function (valNome) {
                var nomeMae = _this.nomeMae;
                var conjuge = _this.conjuge;
                var nomeBebe = _this.nomeBebe;
                var mensagemMae = _this.mensagemMae;
                var autoriza = _this.autoriza;
                var fileName = fileName;
                var data = data;
                var postData = new FormData();
                postData.append('nomeMae', nomeMae);
                postData.append('nomeBebe', nomeBebe);
                postData.append('mensagemMae', mensagemMae);
                postData.append('autoriza', autoriza);
                postData.append('conjuge', conjuge);
                postData.append('linkFoto', "mae_" + random + ".jpg");
                postData.append('usuario', valNome);
                var url = 'http://www.embrios.com.br/aplicativo/users/agenda/salvaFotoBancoDados.php';
                _this.enviafoto = _this.http.post(url, postData);
                _this.enviafoto.subscribe(function (enviafoto) {
                    console.log(enviafoto);
                });
                var alerta = _this.alertCtrl.create({
                    title: 'Informação',
                    subTitle: 'Caso queira alterar seu depoimento, basta escreve e enviar novamente, ele será substituído pelo atual.',
                    buttons: [
                        {
                            text: 'OK',
                            role: 'cancel',
                            handler: function () {
                                window.location.reload(); //recarrega a página atual
                            }
                        }
                    ]
                });
                alerta.present();
                var alert = _this.alertCtrl.create({
                    title: 'Sucesso!',
                    subTitle: 'Seu depoimento foi enviado a postado automaticamente em nosso site, confere lá!',
                    buttons: ['OK']
                });
                alert.present();
                loader.dismiss();
            });
        }, function (err) {
            console.log(err);
            var alerterro = _this.alertCtrl.create({
                title: 'Erro!',
                subTitle: 'Não foi possível enviar, tente novamente. Preencha todos os campos.',
                buttons: ['OK']
            });
            alerterro.present();
            loader.dismiss();
        });
    };
    HomePage.prototype.hide = function () {
        this.hideMe = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('SwipedTabsSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], HomePage.prototype, "SwipedTabsSlider", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\aplicativos\embrios_novo\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar >\n    \n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>Home</ion-title>\n\n    <ion-buttons end>\n      <button icon-only ion-button (click)="BuscarPage()"><ion-icon name="search"></ion-icon></button>\n    </ion-buttons>\n\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding >\n\n \n\n\n  <ion-card *ngIf="avisoLogin" style="margin-bottom:25px;">\n    <ion-card-content>\n    <p style="font-size:14px; padding-bottom:5px; padding-top:5px;">\n        Insira seu usuário e senha e tenha acesso a conteúdo exclusivo, veja sua agenda de compromissos, lembretes para tomar medicamentos, controle para gestantes, envie depoimentos e muito mais.\n      </p> \n      <button ion-button   (click)="direcionaLogin()" >Fazer login</button>\n      <button ion-button outline  (click)="fechaAvisoLogin()" >Fechar aviso</button>\n    </ion-card-content>\n  </ion-card>\n\n\n\n    <ion-segment  class="SwipedTabs-tabs"  >\n        <ion-segment-button *ngFor=\'let tab of tabs ; let i = index \' value="IngoreMe" (click)="selectTab(i)"\n        [ngClass]=\'{ "SwipedTabs-activeTab" : ( this.SwipedTabsSlider  && ( this.SwipedTabsSlider.getActiveIndex() === i || (  tabs.length -1 === i && this.SwipedTabsSlider.isEnd()))) }\' >\n          {{tab}}\n        </ion-segment-button>\n    </ion-segment>\n    \n      <!-- here is our dynamic line  "indicator"-->\n      <div id=\'indicator\' class="SwipedTabs-indicatorSegment" [ngStyle]="{\'width.%\': (100/this.tabs.length)}"></div>\n    \n          <ion-slides \n          style="height:auto;"\n          #SwipedTabsSlider  (ionSlideDrag)="animateIndicator($event)"\n          (ionSlideWillChange)="updateIndicatorPosition()"\n          (ionSlideDidChange)="updateIndicatorPosition()"\n          (pan)="updateIndicatorPosition()"\n          [pager]="false"\n          >\n              <ion-slide>\n    \n                <ion-refresher (ionRefresh)="getPosts($event)">\n                  <ion-refresher-content></ion-refresher-content>\n              </ion-refresher>\n\n                            <ion-row>\n                                <ion-item> \n                                    <ion-label text-right></ion-label>\n                                      <ion-select [(ngModel)]="ordenar" (ionChange)="mudarOrdem()" cancelText="Cancelar" okText="OK">\n                                          <ion-option value="0">Recentes</ion-option>\n                                          <ion-option value="1">Mais antigos</ion-option>\n                                          <ion-option value="2">A ao Z</ion-option>\n                                          <ion-option value="3">Z ao A</ion-option>\n                                      </ion-select>\n                                  </ion-item>   \n                              </ion-row>\n                            \n\n                            \n                            \n                              <ion-card *ngFor="let item of items" (click)="openDetail(item)">\n                                  <img src="{{item._embedded[\'wp:featuredmedia\'][0].media_details.sizes.medium.source_url}}"/>\n                            \n                                  <ion-card-content>\n                            \n                                    <ion-card-title>\n                                      {{item.title.rendered}}\n                                    </ion-card-title>\n                            \n                                    <ion-badge color="second">\n                                      {{item.excerpt.rendered}}\n                                    </ion-badge>\n                            \n                                    <ion-badge color="dark">\n                                      <ion-icon name="time"></ion-icon>\n                                      {{item.date | date: "dd.MM.yyy / hh:mm"}}\n                                    </ion-badge>\n                                      \n                                  </ion-card-content>\n                                </ion-card>\n                            \n                                <div *ngIf="isLoading && page==1" text-center padding><ion-spinner></ion-spinner></div>\n                            \n                                <ion-infinite-scroll (ionInfinite)="getPosts($event)">\n                                    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n                                  </ion-infinite-scroll>\n              </ion-slide>\n\n\n\n\n\n\n              <ion-slide  *ngIf="slideCalendario">\n\n                  \n\n                             <br> \n                              <div *ngIf="calendarOptions" >\n                                <ng-fullcalendar #ucCalendar [options]="calendarOptions" [(eventsModel)]="events" style="    font-size: 14px;"></ng-fullcalendar>\n                              </div>\n  \n              </ion-slide>\n\n\n\n\n\n              <ion-slide  *ngIf="slideMedicacoes">\n\n                \n                <div *ngIf="conteudoNaoComecou"><br><br>Você não possui medicamentos agendados para hoje, confira novamente amanhã.</div>\n\n                <div *ngIf="conteudoMedicacoes">\n                    <p style="font-size:18px; padding:0px; text-align:center; color:#26b8b9;">Você está no <b>{{diaTratamento}}º</b> dia de tratamento, estes são os medicamentos para hoje.</p>\n                    <p style="font-size:14px; padding:0px; text-align:justify; color:#666;"> Você pode <b>ATIVAR NOTIFICAÇÕES</b> e ser avisado na hora em que precisa tomar/aplicar o medicamento. Se você já iniciou o tratamento, procure ativar as notificações exatamente na hora que tiver tomando/aplicando um dos medicamentos, assim o sistema vai avisar corretamente você o próximo horário.</p>\n            \n\n                    <ion-card *ngFor="let med of result" >\n                      <ion-card-content>\n                        <ion-card-header style="font-size:18px; padding-bottom:5px; padding-top:5px;  background-color:#26b8b9; color:#fff;">\n                             {{med.medicacaoAtiva}} | <b>{{med.quantidade}}</b> \n\n                        </ion-card-header>\n                      <p style="font-size:14px; padding-bottom:5px; padding-top:5px;">\n                          <ion-icon name="alarm"></ion-icon>\n                          {{med.horaTomar}} em {{med.horaTomar}} horas\n                        </p> \n                        <button ion-button outline  (click)="ativaNotificacao(med.medicacaoAtiva, med.quantidade, med.horaTomar)" >Ativar</button>\n                        <button ion-button  outline    (click)="desativaNotificacao(med.medicacaoAtiva, med.quantidade, med.horaTomar)" >Desativar</button>\n                      </ion-card-content>\n\n                     <button ion-button  outline  full style="border:0px;  " (click)="rodaVideoYoutube(med.medicacaoAtiva, med.quantidade, med.horaTomar)" ><ion-icon style="font-size: 35px;" name="logo-youtube">&nbsp;</ion-icon> Ver Instruções</button>\n\n                    </ion-card>\n                      <br>\n                      <hr>\n                </div>\n                \n                <p style="font-size:22px; padding:0px; text-align:center; color:#26b8b9;">Atenção</p>\n                <p style="font-size:14px; padding-top:-10px; padding-right:10px; padding-left:10px; text-align:justify; color:#666;"> Você não irá receber notificações se estiver off-line. Para não ter inconvenientes, após cada avaliação ecográfica na clínica, faça o download da sua ficha para ter controle sobre os medicamentos a serem utilizados. </p>\n                <button ion-button   (click)="baixarFicha()" >Baixar ficha completa</button>   \n                <br>\n              </ion-slide>\n\n\n\n              <ion-slide padding *ngIf="slideVideos"> \n                  <h6> Ficaremos muito felizes em receber seu depoimento, comente abaixo um pouco de sua trajetória e experiência.  </h6>\n               \n                \n             \n                    <ion-item>\n                      <ion-input type="text" required [(ngModel)]="nomeMae" placeholder="Seu nome" ngControl="nomeMae"></ion-input>\n                    </ion-item>\n\n                    <ion-item>\n                      <ion-input type="text" required [(ngModel)]="conjuge" placeholder="Cônjuge" ngControl="conjuge"></ion-input>\n                    </ion-item>\n\n                    <ion-item>\n                        <ion-input type="text" required [(ngModel)]="nomeBebe" placeholder="Nome do seu bebê" ngControl="nomeBebe"></ion-input>\n                      </ion-item>\n\n                    <ion-item>\n                      <ion-textarea [(ngModel)]="mensagemMae" placeholder="Mensagem" maxlength="250" ngControl="mensagemMae" rows="4"></ion-textarea>\n                    </ion-item>\n\n                   <br>\n                    <button ion-button (click)="cropImage()"   style="padding-top:25px; padding-bottom:25px;">Selecione uma foto</button>\n                    <div align="center"><img src="{{ myphoto }}"></div>\n                    \n                \n                  \n                 <br>\n \n                      \n                        \n                 \n                        <ion-item >\n                          <ion-label>Autorização</ion-label>\n                          <ion-select [(ngModel)]="autoriza" class="form-checkbox-lg" ngControl="autoriza" (ionChange)="hide()">\n                            <ion-option value="sim">Sim</ion-option>\n                            <ion-option value="nao">Não</ion-option>\n                          </ion-select>\n                        </ion-item>\n                      \n                        <p style="color:#333; font-size:14px;">Você autoriza publicarmos seu depoimento em nosso site? Ele será exibido na página inicial na sessão "Sonhos realizados".</p>\n\n\n\n\n\n                     <br>\n                     <button *ngIf="hideMe" ion-button full (click)="uploadImage()" color="secondary" style="padding-top:25px; padding-bottom:25px;">Enviar</button>\n                     <p *ngIf="hideMe" style="color:#666; font-size:12px;">*Você só pode enviar um depoimento, se enviar outros, o antigo depoimento será substituido pelo atual.</p>\n              \n                    </ion-slide>\n\n\n\n\n              <ion-slide *ngIf="slideGestante"> \n                <p style="font-size:18px; padding:0px; text-align:center; color:#26b8b9;">Abaixo estão algumas informações importantes para você, futura mamãe!</p>\n                     <ion-card *ngFor="let mae of gest" >\n                      <ion-card-content>\n                        <ion-card-header style="font-size:18px; padding-bottom:5px; padding-top:5px;  background-color:#26b8b9; color:#fff;">\n                              <ion-icon name="alarm"></ion-icon>  <b>{{mae.inicial_mais_semanas}}</b> \n\n                        </ion-card-header>\n                      <p style="font-size:14px; padding-bottom:5px; padding-top:5px;">\n                        <b>{{mae.titulo}}</b><br>\n                          {{mae.mensagem}}\n                        </p> \n\n                      </ion-card-content>\n\n                    </ion-card>\n                      <br>\n                      <hr>\n              </ion-slide>\n\n\n\n\n      </ion-slides>\n\n\n\n\n\n\n      \n\n  \n    \n\n</ion-content>\n'/*ion-inline-end:"C:\aplicativos\embrios_novo\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_13__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailPage = /** @class */ (function () {
    function DetailPage(navCtrl, navParams, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.post = [];
        this.isLoading = false;
        this.relatedItems = [];
        this.post = navParams.get('post');
    }
    DetailPage_1 = DetailPage;
    DetailPage.prototype.ionViewDidLoad = function () {
        this.getRelated();
    };
    DetailPage.prototype.getRelated = function () {
        var _this = this;
        if (!this.isLoading) {
            this.isLoading = true;
            this.api.get('posts?_embed&categories=' + this.post.categories[0])
                .subscribe(function (data) {
                _this.isLoading = false;
                _this.relatedItems = data;
            }, function (error) {
                _this.isLoading = false;
            });
        }
    };
    DetailPage.prototype.openDetail = function (item) {
        this.navCtrl.push(DetailPage_1, { post: item });
    };
    DetailPage = DetailPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"C:\aplicativos\embrios_novo\src\pages\detail\detail.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      \n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  \n      <ion-title>{{post.title.rendered}}</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n  \n      <img src="{{post._embedded[\'wp:featuredmedia\'][0].media_details.sizes.full.source_url}}" alt=""/>\n\n      <div padding>\n        <h1>{{post.title.rendered}}</h1>\n        <ion-row>\n          \n\n            <ion-badge color="light">\n              <ion-icon name="time"></ion-icon>\n              {{post.date | date: "dd.MM.yyy / hh:mm"}}\n            </ion-badge>\n        </ion-row>\n        \n        <div [innerHtml]="post.content.rendered" style="font-size:15px;"></div>\n      </div>\n\n\n<hr>\n\n<div style="width:100%; text-align:center;">\n<ion-badge color="escuro" style="font-size:18px; text-align:center; width:90%; padding:10px;">\n  Postagens Relacionadas \n</ion-badge>\n</div>\n      <div *ngIf="isLoading" text-center padding>\n        <ion-spinner></ion-spinner>\n      </div>\n\n      <div padding>\n        <ion-card *ngFor="let item of relatedItems" (click)="openDetail(item)">\n          <img src="{{item._embedded[\'wp:featuredmedia\'][0].media_details.sizes.medium.source_url}}">\n          <ion-card-content>\n            <ion-card-title>\n              {{item.title.rendered}}\n            </ion-card-title>\n            <ion-row>\n              <ion-badge color="second">\n                {{item.excerpt.rendered}}\n              </ion-badge>\n              <ion-badge color="light">\n                <ion-icon name="time"></ion-icon>\n                {{item.date | date:"dd.MM.yyyy / hh:mm"}}\n              </ion-badge>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </div>\n\n\n\n \n      \n\n\n      \n  \n\n\n  </ion-content>\n  '/*ion-inline-end:"C:\aplicativos\embrios_novo\src\pages\detail\detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], DetailPage);
    return DetailPage;
    var DetailPage_1;
}());

//# sourceMappingURL=detail.js.map

/***/ })

},[341]);
//# sourceMappingURL=main.js.map