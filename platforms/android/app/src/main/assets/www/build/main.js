webpackJsonp([5],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LedgerDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(33);
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
 * Generated class for the LedgerDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LedgerDetailPage = /** @class */ (function () {
    function LedgerDetailPage(navCtrl, navParams, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.ledger = this.navParams.get('ledger');
        this.getLedgerDetail();
    }
    LedgerDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LedgerDetailPage');
    };
    LedgerDetailPage.prototype.getLedgerDetail = function () {
        var _this = this;
        this.api.ledgerDetail(this.ledger.ledger_summary_id, this.ledger.ledger_name)
            .then(function (data) {
            console.log(data);
            _this.ledgerDetail = data;
            _this.getTotal(data);
        });
    };
    LedgerDetailPage.prototype.getTotal = function (ledgerDetail) {
        this.balance = 0;
        this.uc_amount = 0;
        this.dr_amount = 0;
        this.cr_amount = 0;
        this.balance = 0;
        for (var _i = 0, ledgerDetail_1 = ledgerDetail; _i < ledgerDetail_1.length; _i++) {
            var data = ledgerDetail_1[_i];
            this.uc_amount += parseFloat(data.uc_amount);
            this.dr_amount += parseFloat(data.dr_amount);
            this.cr_amount += parseFloat(data.cr_amount);
            this.balance += parseFloat(data.balance);
        }
    };
    LedgerDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ledger-detail',template:/*ion-inline-start:"D:\Sujan\ionic\account\src\pages\ledger-detail\ledger-detail.html"*/'<!--\n\n  Generated template for the LedgerDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ledger.ledger_name}} - Detail</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content fullscreen>\n\n  <ion-card *ngFor="let l of ledgerDetail">\n\n    <ion-card-content>\n\n      <ion-grid>\n\n        <ion-row >\n\n          <ion-col col-12  style="text-align:center;">\n\n            Miti: <span> {{l.miti}} </span>\n\n            <hr>\n\n          </ion-col>\n\n          <ion-col col-5>\n\n            DR Amt: <span class="pull-right"> {{l.dr_amount}} </span>\n\n          </ion-col>\n\n          <ion-col offset-2 col-5>\n\n            CR Amt: <span class="pull-right"> {{l.cr_amount}} </span>\n\n          </ion-col>\n\n          <ion-col col-5>\n\n            Balance: <span class="pull-right"> {{l.balance}} </span>\n\n          </ion-col>\n\n          <ion-col offset-2 col-5>\n\n            UC Amt: <span class="pull-right"> {{l.uc_amount}} </span>\n\n          </ion-col>\n\n        </ion-row>\n\n        <!-- <hr> -->\n\n      </ion-grid>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card *ngIf="ledgerDetail">\n\n    <ion-card-content>\n\n      <ion-grid>\n\n        <ion-row >\n\n          <ion-col col-12  style="text-align:center; font-weight:600; font-size:18px;background: #fe5e00;\n\n          color: #fff;">\n\n            Total\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            DR Amt: <span class="pull-right"> {{dr_amount}} </span>\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            CR Amt: <span class="pull-right"> {{cr_amount}} </span>\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            Balance: <span class="pull-right"> {{balance}} </span>\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            UC Amt: <span class="pull-right"> {{uc_amount}} </span>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Sujan\ionic\account\src\pages\ledger-detail\ledger-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], LedgerDetailPage);
    return LedgerDetailPage;
}());

//# sourceMappingURL=ledger-detail.js.map

/***/ }),

/***/ 120:
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
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/daybook-report/daybook-report.module": [
		285,
		4
	],
	"../pages/ledger-detail/ledger-detail.module": [
		286,
		3
	],
	"../pages/ledger-summary/ledger-summary.module": [
		287,
		2
	],
	"../pages/login/login.module": [
		288,
		1
	],
	"../pages/select-company-modal/select-company-modal.module": [
		289,
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
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the StockDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StockDetailPage = /** @class */ (function () {
    function StockDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.stock = this.navParams.get('stock');
    }
    StockDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StockDetailPage');
    };
    StockDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-stock-detail',template:/*ion-inline-start:"D:\Sujan\ionic\account\src\pages\stock-detail\stock-detail.html"*/'<!--\n\n  Generated template for the StockDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title> {{stock.stock_name}} - Detail</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Sujan\ionic\account\src\pages\stock-detail\stock-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], StockDetailPage);
    return StockDetailPage;
}());

//# sourceMappingURL=stock-detail.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_ledger_summary_ledger_summary__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_ledger_detail_ledger_detail__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_stock_summary_stock_summary__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_daybook_report_daybook_report__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_stock_detail_stock_detail__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_select_company_modal_select_company_modal__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_auth_auth__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_api_api__ = __webpack_require__(33);
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
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_ledger_summary_ledger_summary__["a" /* LedgerSummaryPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_ledger_detail_ledger_detail__["a" /* LedgerDetailPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_daybook_report_daybook_report__["a" /* DaybookReportPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_stock_summary_stock_summary__["a" /* StockSummaryPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_stock_detail_stock_detail__["a" /* StockDetailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_select_company_modal_select_company_modal__["a" /* SelectCompanyModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/daybook-report/daybook-report.module#DaybookReportPageModule', name: 'DaybookReportPage', segment: 'daybook-report', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ledger-detail/ledger-detail.module#LedgerDetailPageModule', name: 'LedgerDetailPage', segment: 'ledger-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ledger-summary/ledger-summary.module#LedgerSummaryPageModule', name: 'LedgerSummaryPage', segment: 'ledger-summary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-company-modal/select-company-modal.module#SelectCompanyModalPageModule', name: 'SelectCompanyModalPage', segment: 'select-company-modal', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_ledger_summary_ledger_summary__["a" /* LedgerSummaryPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_ledger_detail_ledger_detail__["a" /* LedgerDetailPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_daybook_report_daybook_report__["a" /* DaybookReportPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_stock_summary_stock_summary__["a" /* StockSummaryPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_stock_detail_stock_detail__["a" /* StockDetailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_select_company_modal_select_company_modal__["a" /* SelectCompanyModalPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_api_api__["a" /* ApiProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_ledger_summary_ledger_summary__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_stock_summary_stock_summary__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_daybook_report_daybook_report__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_select_company_modal_select_company_modal__ = __webpack_require__(54);
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
    function MyApp(platform, statusBar, splashScreen, auth) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.auth = auth;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { logo: 'document', title: 'Ledger Summary Report', component: __WEBPACK_IMPORTED_MODULE_4__pages_ledger_summary_ledger_summary__["a" /* LedgerSummaryPage */] },
            { logo: 'book', title: 'Daybook Report ', component: __WEBPACK_IMPORTED_MODULE_6__pages_daybook_report_daybook_report__["a" /* DaybookReportPage */] },
            { logo: 'logo-buffer', title: 'Stock Summary Report ', component: __WEBPACK_IMPORTED_MODULE_5__pages_stock_summary_stock_summary__["a" /* StockSummaryPage */] }
        ];
        // this.checkUserLogin()
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.push(page.component);
    };
    MyApp.prototype.changeCompany = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_select_company_modal_select_company_modal__["a" /* SelectCompanyModalPage */], { refresh: true });
    };
    MyApp.prototype.logout = function () {
        this.auth.logout();
    };
    MyApp.prototype.checkUserLogin = function () {
        if (!localStorage.getItem('user_id')) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Sujan\ionic\account\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n          <ion-icon name="{{p.logo}}" style="color: #FE5E00;"></ion-icon> {{p.title}}\n\n      </button>\n\n      <button menuClose ion-item (click)="changeCompany()">\n\n        <ion-icon name="podium"  style="color: #FE5E00;"></ion-icon> Change Company\n\n      </button>\n\n      <button menuClose ion-item (click)="logout()">\n\n          <ion-icon name="log-out"  style="color: #FE5E00;"></ion-icon> Logout\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\Sujan\ionic\account\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth__["a" /* AuthProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
            selector: 'page-list',template:/*ion-inline-start:"D:\Sujan\ionic\account\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Sujan\ionic\account\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(82);
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


/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiProvider = /** @class */ (function () {
    function ApiProvider(http) {
        this.http = http;
        this.url = "http://www.progressive.nepgeeks.com/api/app/";
        this.getCompanies = this.url + "getCompanies";
        this.ledgerSummaryReportApi = this.url + 'ledgerSummaryReport';
        this.ledgerDetailApi = this.url + 'ledgerDetail';
        this.stockSummaryReportApi = this.url + 'stockSummaryReport';
    }
    ApiProvider.prototype.getUserId = function () {
        return localStorage.getItem('user_id');
    };
    ApiProvider.prototype.getCompanyId = function () {
        return localStorage.getItem('company_id');
    };
    // return new Promise( resolve => {
    //   this.http.post(this.update_vehicle_damage_api, info, { headers: headers})
    //     .subscribe( data => {
    //         resolve(data['message']);
    //     });
    // });
    ApiProvider.prototype.getUserCompanies = function (user_id) {
        var p = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]().
            set("user_id", user_id);
        return this.http.get(this.getCompanies, { params: p });
    };
    ApiProvider.prototype.ledgerSummaryReport = function () {
        var p = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]().
            set("user_id", this.getUserId()).
            set("company_id", this.getCompanyId());
        return this.http.get(this.ledgerSummaryReportApi, { params: p });
    };
    ApiProvider.prototype.ledgerDetail = function (ledger_summary_id, ledger_name) {
        var _this = this;
        var p = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]().
            set("user_id", this.getUserId()).
            set("company_id", this.getCompanyId()).
            set('ledger_summary_id', ledger_summary_id).
            set("ledger_name", ledger_name);
        return new Promise(function (resolve) {
            _this.http.get(_this.ledgerDetailApi, { params: p })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error.statusText);
            });
        });
    };
    ApiProvider.prototype.stockSummaryReport = function () {
        var _this = this;
        var p = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]().
            set("user_id", this.getUserId()).
            set("company_id", this.getCompanyId());
        return new Promise(function (resolve) {
            _this.http.get(_this.stockSummaryReportApi, { params: p })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error.statusText);
            });
        });
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DaybookReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the DaybookReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DaybookReportPage = /** @class */ (function () {
    function DaybookReportPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DaybookReportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DaybookReportPage');
    };
    DaybookReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-daybook-report',template:/*ion-inline-start:"D:\Sujan\ionic\account\src\pages\daybook-report\daybook-report.html"*/'<!--\n\n  Generated template for the DaybookReportPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>DayBook Report</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Sujan\ionic\account\src\pages\daybook-report\daybook-report.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], DaybookReportPage);
    return DaybookReportPage;
}());

//# sourceMappingURL=daybook-report.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LedgerSummaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ledger_detail_ledger_detail__ = __webpack_require__(108);
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
 * Generated class for the LedgerSummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LedgerSummaryPage = /** @class */ (function () {
    function LedgerSummaryPage(navCtrl, navParams, api, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.loadingCtrl = loadingCtrl;
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.getLedgerSummaryReport();
    }
    LedgerSummaryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LedgerSummaryPage');
    };
    LedgerSummaryPage.prototype.getLedgerSummaryReport = function () {
        var _this = this;
        // this.loading.present();
        this.api.ledgerSummaryReport()
            .subscribe(function (data) {
            // this.loading.dismiss();
            console.log(data);
            _this.ledger = data;
            _this.filterData = data;
            _this.getTotal(data);
        });
    };
    LedgerSummaryPage.prototype.getTotal = function (ledger) {
        this.opening_dr = 0;
        this.opening_cr = 0;
        this.dr_amount = 0;
        this.cr_amount = 0;
        this.balance = 0;
        for (var _i = 0, ledger_1 = ledger; _i < ledger_1.length; _i++) {
            var data = ledger_1[_i];
            this.opening_dr += parseFloat(data.opening_dr);
            this.opening_cr += parseFloat(data.opening_cr);
            this.dr_amount += parseFloat(data.dr_amount);
            this.cr_amount += parseFloat(data.cr_amount);
            this.balance += parseFloat(data.balance);
        }
    };
    LedgerSummaryPage.prototype.search = function (ev) {
        // set val to the value of the searchbar
        var val = ev.target.value;
        console.log(val);
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.ledger = this.filterData.filter(function (item) {
                return (item.ledger_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            this.getTotal(this.ledger);
        }
        else {
            this.getLedgerSummaryReport();
        }
    };
    LedgerSummaryPage.prototype.onSearchCancel = function () {
        this.getLedgerSummaryReport();
    };
    LedgerSummaryPage.prototype.viewLedgerDetail = function (ledger) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__ledger_detail_ledger_detail__["a" /* LedgerDetailPage */], { ledger: ledger });
    };
    LedgerSummaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ledger-summary',template:/*ion-inline-start:"D:\Sujan\ionic\account\src\pages\ledger-summary\ledger-summary.html"*/'<!--\n\n  Generated template for the LedgerSummaryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title >Ledger Summary</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n      \n\n  <ion-searchbar \n\n          (ionInput)="search($event)" \n\n          placeholder="Search by Ledger"\n\n          (ionCancel)="onSearchCancel($event)"\n\n          >\n\n  </ion-searchbar>\n\n\n\n  <ion-card *ngFor="let l of ledger" (click)="viewLedgerDetail(l)">\n\n    <ion-card-content>\n\n      <ion-grid>\n\n        <ion-row >\n\n          <ion-col col-12>\n\n            Ledger Name: <span class="pull-right"> {{l.ledger_name}} </span>\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            Opening DR: <span class="pull-right"> {{l.opening_dr}} </span>\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            Opening CR: <span class="pull-right"> {{l.opening_cr}} </span>\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            DR Amount: <span class="pull-right"> {{l.dr_amount}} </span>\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            CR Amount: <span class="pull-right"> {{l.cr_amount}} </span>\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            Balance: <span class="pull-right"> {{l.balance}} </span>\n\n          </ion-col>\n\n        </ion-row>\n\n        <!-- <hr> -->\n\n      </ion-grid>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n\n\n  <ion-card *ngIf="ledger">\n\n    <ion-card-content>\n\n      <ion-grid>\n\n        <ion-row >\n\n          <ion-col col-12  style="text-align:center; font-weight:600; font-size:18px;background: #fe5e00;\n\n          color: #fff;">\n\n            Total\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            Opening DR: <span class="pull-right"> {{opening_dr}} </span>\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            Opening CR: <span class="pull-right"> {{opening_cr}} </span>\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            DR Amount: <span class="pull-right"> {{dr_amount}} </span>\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            CR Amount: <span class="pull-right"> {{cr_amount}} </span>\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            Balance: <span class="pull-right"> {{balance}} </span>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-card-content>\n\n  </ion-card>\n\n<!-- \n\n  <ion-footer padding class="footer">\n\n    <ion-grid>\n\n      <ion-row >\n\n        <ion-col col-6>\n\n          Opening DR: <span class="pull-right"> {{opening_dr}} </span>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          Opening CR: <span class="pull-right"> {{opening_cr}} </span>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          DR Amount: <span class="pull-right"> {{dr_amount}} </span>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          CR Amount: <span class="pull-right"> {{cr_amount}} </span>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          Balance: <span class="pull-right"> {{balance}} </span>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-footer>\n\n   -->\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Sujan\ionic\account\src\pages\ledger-summary\ledger-summary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LedgerSummaryPage);
    return LedgerSummaryPage;
}());

//# sourceMappingURL=ledger-summary.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_company_modal_select_company_modal__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(modalCtrl, navCtrl, auth, navParams, loadingCtrl) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.email = "patelab15@.com";
        this.password = "123";
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        if (localStorage.getItem('user_id') && localStorage.getItem('company_id') && localStorage.getItem('email')) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
        // if(!localStorage.getItem('company_id')){
        //   this.auth.logout();
        // }
        this.error = this.navParams.get('error') ? this.navParams.get('error') : '';
    }
    LoginPage_1 = LoginPage;
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var data = {
            'email': this.email,
            'password': this.password
        };
        this.loading.present();
        this.auth.login(data)
            .subscribe(function (data) {
            _this.loading.dismiss();
            if (data['status'] == 'success') {
                var user_1 = data['message'][0];
                if (localStorage.getItem('company_id')) {
                    _this.saveUser(user_1);
                }
                else {
                    var SelectCompanyModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__select_company_modal_select_company_modal__["a" /* SelectCompanyModalPage */], { user_id: user_1.user_id });
                    SelectCompanyModal.onDidDismiss(function (data) {
                        console.log(data);
                        if (data['status'] == true) {
                            // localStorage.setItem('company_id', data['company_id']);
                            _this.saveUser(user_1);
                        }
                        else {
                            _this.error = 'Please select the company to proceed';
                            _this.navCtrl.setRoot(LoginPage_1, { error: data['message'] });
                        }
                    });
                    SelectCompanyModal.present();
                }
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
            }
            else {
                _this.error = data['message'];
                _this.navCtrl.setRoot(LoginPage_1, { error: data['message'] });
            }
        });
    };
    LoginPage.prototype.saveUser = function (user) {
        localStorage.setItem('user_id', user.user_id);
        localStorage.setItem('email', user.email);
    };
    LoginPage = LoginPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\Sujan\ionic\account\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>User Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header> -->\n\n\n\n<ion-content padding style="border-top: 20px solid #FE5E00;border-bottom: 20px solid #FE5E00;">\n\n\n\n	<ion-grid style="padding-top: 10%;">\n\n		<ion-row>\n\n			<!-- <ion-col col-12>\n\n				<p style="font-size: 25px; text-align: center;">\n\n					Log In to View Your Reports.\n\n				</p>\n\n			</ion-col> -->\n\n			<ion-col col-8 offset-2>\n\n				<img src="assets/icon/pflogo.png">\n\n			</ion-col>\n\n			<ion-col col-12>\n\n				<p *ngIf="error" style="color:red; text-align:center"> {{error}} </p>\n\n				<form (ngSubmit)="login()">\n\n					<ion-item>\n\n				        <ion-label floating>Email</ion-label>\n\n				        <ion-input type="email" [(ngModel)]="email" required name="email"></ion-input>\n\n				     </ion-item>\n\n				     <ion-item>\n\n				        <ion-label floating>Password</ion-label>\n\n				        <ion-input type="password" [(ngModel)]="password" required name="password"></ion-input>\n\n						 </ion-item>\n\n						 <!-- <ion-item>\n\n							<ion-label floating>Company ID</ion-label>\n\n							<ion-input type="text" [(ngModel)]="company_id" required name="password"></ion-input>\n\n					 </ion-item> -->\n\n				     <br>\n\n				     <button ion-button type="submit" block>Login</button>\n\n				</form>\n\n			</ion-col>\n\n		</ion-row>\n\n	</ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Sujan\ionic\account\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
    var LoginPage_1;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectCompanyModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(83);
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
 * Generated class for the SelectCompanyModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelectCompanyModalPage = /** @class */ (function () {
    function SelectCompanyModalPage(navCtrl, navParams, viewCtrl, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.api = api;
        this.refresh = false;
        this.user_id = this.navParams.get('user_id') ? this.navParams.get('user_id') : localStorage.getItem('user_id');
        this.refresh = this.navParams.get('refresh') ? true : false;
        this.getCompanies(this.user_id);
    }
    SelectCompanyModalPage.prototype.getCompanies = function (user_id) {
        var _this = this;
        console.log(user_id);
        this.api.getUserCompanies(user_id)
            .subscribe(function (data) {
            console.log(data);
            _this.companies = data;
        });
    };
    SelectCompanyModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelectCompanyModalPage');
    };
    SelectCompanyModalPage.prototype.dismiss = function () {
        var data = { 'status': false };
        this.viewCtrl.dismiss(data);
    };
    SelectCompanyModalPage.prototype.dismissWithData = function () {
        var data = this.company == undefined ? { 'status': false } : { 'status': true };
        if (data['status'] == true) {
            localStorage.setItem('company_id', this.company);
        }
        if (this.refresh) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }
        else {
            this.viewCtrl.dismiss(data);
        }
    };
    SelectCompanyModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-select-company-modal',template:/*ion-inline-start:"D:\Sujan\ionic\account\src\pages\select-company-modal\select-company-modal.html"*/'<!--\n\n  Generated template for the SelectCompanyModalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Select CompanyModal</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header> -->\n\n\n\n\n\n<ion-content padding>\n\n  <h3 style="text-align:center;     \n\n              background: #FE5E00;\n\n              color: white;\n\n              padding: 10px;\n\n              border-radius: 5px;">\n\n    Select Company\n\n  </h3>\n\n<hr>\n\n<br>\n\n<ion-list radio-group [(ngModel)]="company">\n\n    <ion-item *ngFor="let c of companies">\n\n      <ion-label>{{c}}</ion-label>\n\n      <ion-radio value="{{c}}"></ion-radio>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n<ion-grid>\n\n  <ion-row>\n\n    <ion-col col-5>\n\n        <button ion-button color="danger" (click)="dismiss()" block>Cancel</button>\n\n    </ion-col>\n\n    <ion-col offset-2 col-5>\n\n        <button ion-button (click)="dismissWithData()" block style="background-color:#FE5E00;">Select</button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"D:\Sujan\ionic\account\src\pages\select-company-modal\select-company-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], SelectCompanyModalPage);
    return SelectCompanyModalPage;
}());

//# sourceMappingURL=select-company-modal.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ledger_summary_ledger_summary__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stock_summary_stock_summary__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__daybook_report_daybook_report__ = __webpack_require__(51);
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
    function HomePage(navCtrl, api) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.api = api;
        setInterval(function () {
            _this.company = _this.api.getCompanyId();
        }, 500);
    }
    HomePage.prototype.gotoLedgerSummary = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__ledger_summary_ledger_summary__["a" /* LedgerSummaryPage */]);
    };
    HomePage.prototype.gotoDaybookReport = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__daybook_report_daybook_report__["a" /* DaybookReportPage */]);
    };
    HomePage.prototype.gotoStockSummary = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__stock_summary_stock_summary__["a" /* StockSummaryPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Sujan\ionic\account\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Reports - <small>{{company}}</small></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content fullscreen> \n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <p class="heading"> Select The report You want to View. </p>\n\n        <hr>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-card>\n\n    <ion-card-content (click)="gotoLedgerSummary()" class="component">\n\n        <ion-icon name="document" style="font-size:30px"></ion-icon>\n\n            Ledger Summary Report\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n      <ion-card-content  class="component" (click)="gotoDaybookReport()">\n\n          <ion-icon name="book" style="font-size:30px"></ion-icon>\n\n          DayBook Report\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-content  class="component" (click)="gotoStockSummary()">\n\n            <ion-icon name="logo-buffer" style="font-size:30px"></ion-icon>\n\n            Stock Summary Report\n\n        </ion-card-content>\n\n      </ion-card>\n\n  \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Sujan\ionic\account\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockSummaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stock_detail_stock_detail__ = __webpack_require__(163);
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
 * Generated class for the StockSummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StockSummaryPage = /** @class */ (function () {
    function StockSummaryPage(navCtrl, navParams, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.getstockSummaryReport();
    }
    StockSummaryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StockSummaryPage');
    };
    StockSummaryPage.prototype.getstockSummaryReport = function () {
        var _this = this;
        this.api.stockSummaryReport()
            .then(function (data) {
            console.log(data);
            _this.stock = data;
            _this.filterData = data;
            _this.getTotal(data);
        });
    };
    StockSummaryPage.prototype.getTotal = function (stock) {
        // this.opening_dr = 0; this.opening_cr = 0;this.dr_amount = 0;this.cr_amount = 0;this.balance  =  0;
        // for(let data of stock) {
        //   this.opening_dr += parseFloat(data.opening_dr);
        //   this.opening_cr += parseFloat(data.opening_cr);
        //   this.dr_amount += parseFloat(data.dr_amount);
        //   this.cr_amount += parseFloat(data.cr_amount);
        //   this.balance += parseFloat(data.balance);
        // }
    };
    StockSummaryPage.prototype.search = function (ev) {
        // set val to the value of the searchbar
        var val = ev.target.value;
        console.log(val);
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.stock = this.filterData.filter(function (item) {
                return (item.stock_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            this.getTotal(this.stock);
        }
        else {
            this.getstockSummaryReport();
        }
    };
    StockSummaryPage.prototype.onSearchCancel = function () {
        this.getstockSummaryReport();
    };
    StockSummaryPage.prototype.viewStockDetail = function (stock) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__stock_detail_stock_detail__["a" /* StockDetailPage */], { stock: stock });
    };
    StockSummaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-stock-summary',template:/*ion-inline-start:"D:\Sujan\ionic\account\src\pages\stock-summary\stock-summary.html"*/'<!--\n\n  Generated template for the StockSummaryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Stock Sumamry</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-searchbar \n\n    (ionInput)="search($event)" \n\n    placeholder="Search by Stock Name"\n\n    (ionCancel)="onSearchCancel($event)"\n\n    >\n\n  </ion-searchbar>\n\n\n\n  <ion-card *ngFor="let s of stock" (click)="viewStockDetail(s)">\n\n    <ion-card-content>\n\n      <ion-grid>\n\n        <ion-row >\n\n\n\n          <ion-col col-12 style="text-align:center;">\n\n            <strong>Stock Name: <span> {{s.stock_name}} </span></strong>\n\n            <hr>\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            IN Quantity: <span class="pull-right"> {{s.in_quantity}} </span>\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            IN Value: <span class="pull-right"> {{s.in_value}} </span>\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            OUT Quantity: <span class="pull-right"> {{s.out_quantity}} </span>\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            OUT Value: <span class="pull-right"> {{s.out_value}} </span>\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            Opening Quantity: <span class="pull-right"> {{s.opening_quantity}} </span>\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            Opening Value: <span class="pull-right"> {{s.opening_value}} </span>\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            Rate: <span class="pull-right"> {{s.rate}} </span>\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            Balance Quantity: <span class="pull-right"> {{s.balance_quantity}} </span>\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            Balance Value: <span class="pull-right"> {{s.balance_value}} </span>\n\n          </ion-col>\n\n\n\n        </ion-row>\n\n        <!-- <hr> -->\n\n      </ion-grid>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Sujan\ionic\account\src\pages\stock-summary\stock-summary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], StockSummaryPage);
    return StockSummaryPage;
}());

//# sourceMappingURL=stock-summary.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(http, app) {
        this.http = http;
        this.app = app;
        this.url = "http://www.progressive.nepgeeks.com/api/app/";
        this.login_api = this.url + 'user';
        console.log('Hello AuthProvider Provider');
    }
    AuthProvider.prototype.login = function (data) {
        var p = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]().
            set("email", data.email).
            set("password", data.password);
        return this.http.get(this.login_api, { params: p });
    };
    AuthProvider.prototype.logout = function () {
        if (localStorage.getItem('company_id')) {
            var company_id = localStorage.getItem('company_id');
            localStorage.clear();
            localStorage.setItem('company_id', company_id);
        }
        else {
            localStorage.clear();
        }
        var nav = this.app.getRootNav();
        nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* App */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map