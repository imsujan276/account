webpackJsonp([4],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LedgerDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_functions__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__ = __webpack_require__(21);
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
    function LedgerDetailPage(screenOrientation, navCtrl, navParams, api, func) {
        this.screenOrientation = screenOrientation;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.func = func;
        this.current_page = 1;
        this.last_page = 1;
        // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        this.ledger = this.navParams.get('ledger');
        this.getLedgerDetail();
    }
    LedgerDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LedgerDetailPage');
    };
    LedgerDetailPage.prototype.getLedgerDetail = function () {
        var _this = this;
        this.func.presentLoading('Loading ' + this.ledger.ledger_name + ' Details...');
        this.api.ledgerDetail(this.ledger.ledger_id, this.current_page)
            .then(function (data) {
            console.log(data);
            _this.func.dismissLoading();
            _this.ledgerDetail = data['data'];
            _this.current_page = data['current_page'];
            _this.last_page = data['last_page'];
            _this.getTotal(data['data']);
        });
    };
    LedgerDetailPage.prototype.doInfinite = function (event) {
        var _this = this;
        this.api.ledgerDetail(this.ledger.ledger_id, this.current_page + 1)
            .then(function (data) {
            console.log(data);
            if (data['data'].length > 0) {
                _this.ledgerDetail = _this.ledgerDetail.concat(data['data']);
                _this.current_page = data['current_page'];
                _this.last_page = data['last_page'];
                _this.getTotal(_this.ledgerDetail);
            }
            event.complete();
        }, function (err) {
            event.complete();
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
            this.dr_amount += parseFloat(data.debit);
            this.cr_amount += parseFloat(data.credit);
            this.balance += parseFloat(data.balance);
        }
    };
    LedgerDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-ledger-detail',template:/*ion-inline-start:"/Volumes/D/Ionic/account/src/pages/ledger-detail/ledger-detail.html"*/'<!--\n  Generated template for the LedgerDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ledger.ledger_name}} - Detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content fullscreen>\n\n    <div class="content-container">\n        <div class="row header">\n          <div class="col">Date</div>\n          <div class="col">DR</div>\n          <div class="col">CR</div>\n          <!-- <div class="col col-2">UC</div> -->\n          <div class="col">Balance</div>\n        </div>\n        <div class="row" *ngFor="let l of ledgerDetail; let i=index" >\n          <!-- <div class="col">{{l.date | date: \'mediumDate\'}} </div> -->\n          <div class="col">{{l.miti}} </div>\n          <div class="col">{{l.debit | number}}</div>\n          <div class="col">{{l.credit | number}}</div>\n          <!-- <div class="col col-2">{{l.uc_amount}}</div> -->\n          <div class="col">{{ledgerDetail | runningTotal: i | number}}</div>\n        </div>\n        <div class="row footer" *ngIf="ledgerDetail">\n          <div class="col">Total</div>\n          <div class="col">{{dr_amount | number}}</div>\n          <div class="col">{{cr_amount | number}}</div>\n          <!-- <div class="col col-2">{{uc_amount}}</div> -->\n          <div class="col">{{balance | number}}</div>\n        </div>\n      </div>\n\n  <span *ngIf="current_page <= last_page" >\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </span>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/Ionic/account/src/pages/ledger-detail/ledger-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__["a" /* ScreenOrientation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_functions__["a" /* customFunctions */]])
    ], LedgerDetailPage);
    return LedgerDetailPage;
}());

//# sourceMappingURL=ledger-detail.js.map

/***/ }),

/***/ 123:
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
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ledger-detail/ledger-detail.module": [
		293,
		3
	],
	"../pages/ledger-summary/ledger-summary.module": [
		294,
		2
	],
	"../pages/login/login.module": [
		295,
		1
	],
	"../pages/select-company-modal/select-company-modal.module": [
		296,
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
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_functions__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__ = __webpack_require__(21);
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
    function StockDetailPage(screenOrientation, navCtrl, navParams, api, func) {
        this.screenOrientation = screenOrientation;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.func = func;
        this.current_page = 1;
        this.last_page = 1;
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
        this.stock = this.navParams.get('stock');
        this.getstockDetail();
    }
    StockDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad stockDetailPage');
    };
    StockDetailPage.prototype.ionViewWillLeave = function () {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    };
    StockDetailPage.prototype.getstockDetail = function () {
        var _this = this;
        this.func.presentLoading('Loading ' + this.stock.stock_name + ' Details...');
        this.api.stockDetailReport(this.stock.stock_id, this.current_page)
            .then(function (data) {
            console.log(data);
            _this.func.dismissLoading();
            _this.stockDetail = data['data'];
            _this.current_page = parseInt(data['current_page']);
            _this.last_page = parseInt(data['last_page']);
            _this.getTotal(data['data']);
        });
    };
    StockDetailPage.prototype.doInfinite = function (event) {
        var _this = this;
        this.api.stockDetailReport(this.stock.stock_id, this.current_page + 1)
            .then(function (data) {
            console.log(data);
            if (data['data'].length > 0) {
                _this.stockDetail = _this.stockDetail.concat(data['data']);
                _this.current_page = parseInt(data['current_page']);
                _this.last_page = parseInt(data['last_page']);
                _this.getTotal(_this.stockDetail);
            }
            event.complete();
        }, function (err) {
            event.complete();
        });
    };
    StockDetailPage.prototype.loadMoreData = function () {
        var _this = this;
        this.api.stockDetailReport(this.stock.stock_id, this.current_page + 1)
            .then(function (data) {
            console.log(data);
            if (data['data'].length > 0) {
                _this.stockDetail = _this.stockDetail.concat(data['data']);
                _this.current_page = parseInt(data['current_page']);
                _this.last_page = parseInt(data['last_page']);
                _this.getTotal(_this.stockDetail);
            }
        }, function (err) {
        });
    };
    StockDetailPage.prototype.getTotal = function (stockDetail) {
        this.in_quantity = 0;
        this.out_quantity = 0;
        this.in_value = 0;
        this.out_value = 0;
        this.balance_quantity = 0;
        this.balance_amount = 0;
        for (var _i = 0, stockDetail_1 = stockDetail; _i < stockDetail_1.length; _i++) {
            var data = stockDetail_1[_i];
            this.in_quantity += parseFloat(data.in_quantity);
            this.out_quantity += parseFloat(data.out_quantity);
            this.in_value += parseFloat(data.in_value);
            this.out_value += parseFloat(data.out_value);
            this.balance_quantity += parseFloat(data.balance_quantity);
            this.balance_amount += parseFloat(data.balance_amount);
        }
    };
    StockDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-stock-detail',template:/*ion-inline-start:"/Volumes/D/Ionic/account/src/pages/stock-detail/stock-detail.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{stock.stock_name}} - Detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content fullscreen>\n\n    <div class="content-container">\n        <div class="row header">\n          <div class="col">Date</div>\n          <div class="col">IN Qty</div>\n          <div class="col">IN Amt</div>\n          <div class="col">OUT Qty</div>\n          <div class="col">OUT Amt</div>\n          <div class="col">Qty</div>\n          <div class="col">Amt</div>\n        </div>\n        <div class="row" *ngFor="let l of stockDetail" >\n          <!-- <div class="col">{{l.date | date: \'mediumDate\'}} </div> -->\n          <div class="col">{{l.miti}} </div>\n          <div class="col">{{l.in_quantity | number}}</div>\n          <div class="col">{{l.in_value | number}}</div>\n          <div class="col">{{l.out_quantity | number}}</div>\n          <div class="col">{{l.out_value | number}}</div>\n          <div class="col">{{l.balance_quantity | number}}</div>\n          <div class="col">{{l.balance_amount | number}}</div>\n        </div>\n        <div class="row footer" *ngIf="stockDetail">\n          <div class="col">Total</div>\n          <div class="col">{{in_quantity | number}}</div>\n          <div class="col">{{in_value | number}}</div>\n          <div class="col">{{out_quantity | number}}</div>\n          <div class="col">{{out_value | number}}</div>\n          <div class="col">{{balance_quantity | number}}</div>\n          <div class="col">{{balance_amount | number}}</div>\n        </div>\n      </div>\n\n  <!-- <ion-card *ngFor="let s of stockDetail">\n    <ion-card-content>\n      <ion-grid>\n        <ion-row >\n          <ion-col col-12  style="text-align:center;">\n            Miti: <span> {{s.nepali_date}} ({{s.date}}) </span>\n            <hr>\n          </ion-col>\n          <ion-col col-5 >\n            IN Quantity: <span class="pull-right"> {{s.in_quantity}} </span>\n          </ion-col>\n          <ion-col col-5 offset-2>\n            OUT Quantity: <span class="pull-right"> {{s.out_quantity}} </span>\n          </ion-col>\n          <ion-col col-5>\n            IN Value: <span class="pull-right"> {{s.in_value}} </span>\n          </ion-col>\n          <ion-col col-5 offset-2>\n            OUT Value: <span class="pull-right"> {{s.out_value}} </span>\n          </ion-col>\n          <ion-col col-5>\n            IN rate: <span class="pull-right"> {{s.in_rate}} </span>\n          </ion-col>\n          <ion-col col-6></ion-col>\n          <ion-col col-12>\n            Category: <span class="pull-right"> {{s.page_name}} </span>\n          </ion-col>\n          <ion-col col-12>\n            Balance Quantity: <span class="pull-right"> {{s.balance_quantity}} </span>\n          </ion-col>\n          <ion-col col-12>\n            Balance Value: <span class="pull-right"> {{s.balance_value}} </span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf="stockDetail">\n    <ion-card-content>\n      <ion-grid>\n        <ion-row >\n          <ion-col col-12  style="text-align:center; font-weight:600; font-size:18px;background: #fe5e00;\n          color: #fff;">\n            Total\n          </ion-col>\n          <ion-col col-12 >\n            IN Quantity: <span class="pull-right"> {{in_quantity}} </span>\n          </ion-col>\n          <ion-col col-12>\n            OUT Quantity: <span class="pull-right"> {{out_quantity}} </span>\n          </ion-col>\n          <ion-col col-12>\n            IN Value: <span class="pull-right"> {{in_value}} </span>\n          </ion-col>\n          <ion-col col-12>\n            OUT Value: <span class="pull-right"> {{out_value}} </span>\n          </ion-col>\n          <ion-col col-12>\n            Balance Quantity: <span class="pull-right"> {{balance_quantity}} </span>\n          </ion-col>\n          <ion-col col-12>\n            Balance Value: <span class="pull-right"> {{balance_value}} </span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card> -->\n\n  <!-- <span *ngIf="current_page <= last_page" >\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </span> -->\n\n  <div *ngIf="current_page < last_page" padding style="display: flex; align-items: center; justify-content: center;">\n    <button ion-button color="light" round (click)="loadMoreData()">Load More</button>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/Ionic/account/src/pages/stock-detail/stock-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__["a" /* ScreenOrientation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_functions__["a" /* customFunctions */]])
    ], StockDetailPage);
    return StockDetailPage;
}());

//# sourceMappingURL=stock-detail.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_ledger_summary_ledger_summary__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_ledger_detail_ledger_detail__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_stock_summary_stock_summary__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_daybook_report_daybook_report__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_stock_detail_stock_detail__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_select_company_modal_select_company_modal__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_auth_auth__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_api_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_functions__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_screen_orientation__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pipes_running_total_running_total__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_brmasker_ionic_3__ = __webpack_require__(290);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
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
                __WEBPACK_IMPORTED_MODULE_20__pipes_running_total_running_total__["a" /* RunningTotalPipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/ledger-detail/ledger-detail.module#LedgerDetailPageModule', name: 'LedgerDetailPage', segment: 'ledger-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ledger-summary/ledger-summary.module#LedgerSummaryPageModule', name: 'LedgerSummaryPage', segment: 'ledger-summary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-company-modal/select-company-modal.module#SelectCompanyModalPageModule', name: 'SelectCompanyModalPage', segment: 'select-company-modal', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_21_brmasker_ionic_3__["a" /* BrMaskerModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
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
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_api_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_functions__["a" /* customFunctions */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(83);
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
        this.url = "http://nepgeeks.com/api/app/";
        this.getCompanies = this.url + "getCompanies";
        this.ledgerSummaryReportApi = this.url + 'ledgerSummaryReport';
        this.ledgerDetailApi = this.url + 'ledgerDetail';
        this.stockSummaryReportApi = this.url + 'stockSummaryReport';
        this.stockDetailReportApi = this.url + 'stockSummaryDetail';
        this.dayBookReportApi = this.url + 'dayBookReport';
        this.filterDayBookReportApi = this.url + 'filterDayBookReport';
    }
    ApiProvider.prototype.getUserId = function () {
        return localStorage.getItem('user_id');
    };
    ApiProvider.prototype.getCompanyId = function () {
        return localStorage.getItem('company_id');
    };
    ApiProvider.prototype.getUserCompanies = function (user_id) {
        var user = user_id ? user_id : localStorage.getItem('user_id');
        var p = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]().
            set("user_id", user);
        return this.http.get(this.getCompanies, { params: p });
    };
    ApiProvider.prototype.ledgerSummaryReport = function (page) {
        var p = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]().
            set("user_id", this.getUserId()).
            set("page", page).
            set("company_id", this.getCompanyId());
        return this.http.get(this.ledgerSummaryReportApi, { params: p });
    };
    ApiProvider.prototype.ledgerDetail = function (ledger_id, page) {
        var _this = this;
        var p = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]().
            set("user_id", this.getUserId()).
            set("company_id", this.getCompanyId()).
            set("ledger_id", ledger_id).
            set('page', page);
        return new Promise(function (resolve) {
            _this.http.get(_this.ledgerDetailApi, { params: p })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error.statusText);
            });
        });
    };
    ApiProvider.prototype.stockDetailReport = function (stock_id, page) {
        var _this = this;
        var p = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]().
            set("user_id", this.getUserId()).
            set("company_id", this.getCompanyId()).
            set("stock_id", stock_id).
            set('page', page);
        return new Promise(function (resolve) {
            _this.http.get(_this.stockDetailReportApi, { params: p })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error.statusText);
            });
        });
    };
    ApiProvider.prototype.stockSummaryReport = function (page) {
        var _this = this;
        var p = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]().
            set("user_id", this.getUserId()).
            set("page", page).
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
    ApiProvider.prototype.dayBookReport = function (page) {
        var _this = this;
        var p = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]().
            set("user_id", this.getUserId()).
            set("company_id", this.getCompanyId()).
            set('page', page);
        return new Promise(function (resolve) {
            _this.http.get(_this.dayBookReportApi, { params: p })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error.statusText);
            });
        });
    };
    ApiProvider.prototype.filterDayBookReport = function (year, month, day) {
        var _this = this;
        var p = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]().
            set("user_id", this.getUserId()).
            set("company_id", this.getCompanyId()).
            set('year', year).
            set('month', month).
            set('day', day);
        return new Promise(function (resolve) {
            _this.http.get(_this.filterDayBookReportApi, { params: p })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error.statusText);
            });
        });
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return customFunctions; });
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


var customFunctions = /** @class */ (function () {
    function customFunctions(alert, loadingController, toastCtrl, platform) {
        this.alert = alert;
        this.loadingController = loadingController;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
    }
    customFunctions.prototype.showAlert = function (title, text) {
        var alert = this.alert.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    customFunctions.prototype.presentLoading = function (text) {
        var loadingText = "Please wait...";
        if (text) {
            loadingText = text;
        }
        this.loader = this.loadingController.create({
            content: loadingText
        });
        this.loader.present();
    };
    customFunctions.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    customFunctions.prototype.presentToast = function (message, duration, position) {
        var toastMessage = "Done";
        var toastDuration = 3000;
        var toastPosition = 'bottom';
        if (message) {
            toastMessage = message;
        }
        if (duration) {
            toastDuration = duration;
        }
        if (position) {
            toastPosition = position;
        }
        var toast = this.toastCtrl.create({
            message: toastMessage,
            duration: toastDuration,
            position: toastPosition
        });
        toast.onDidDismiss(function () {
            //console.log('Dismissed toast');
        });
        toast.present();
    };
    customFunctions.prototype.getEncodedFormUrl = function (toConvert) {
        var formBody = [];
        for (var property in toConvert) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(toConvert[property]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        return formBody.join('&');
    };
    customFunctions.prototype.isEmptyObject = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    customFunctions = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], customFunctions);
    return customFunctions;
}());

//# sourceMappingURL=functions.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_ledger_summary_ledger_summary__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_stock_summary_stock_summary__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_daybook_report_daybook_report__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_select_company_modal_select_company_modal__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_functions__ = __webpack_require__(28);
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
    function MyApp(func, platform, statusBar, splashScreen, auth) {
        this.func = func;
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
        var _this = this;
        this.func.presentLoading('Logging Out...');
        setTimeout(function () {
            _this.func.dismissLoading();
            _this.auth.logout();
        }, 1000);
    };
    MyApp.prototype.checkUserLogin = function () {
        if (!localStorage.getItem('user_id')) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Volumes/D/Ionic/account/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          <ion-icon name="{{p.logo}}" style="color: #FE5E00;"></ion-icon> {{p.title}}\n      </button>\n      <button menuClose ion-item (click)="changeCompany()">\n        <ion-icon name="podium"  style="color: #FE5E00;"></ion-icon> Change Company\n      </button>\n      <button menuClose ion-item (click)="logout()">\n          <ion-icon name="log-out"  style="color: #FE5E00;"></ion-icon> Logout\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Volumes/D/Ionic/account/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__providers_functions__["a" /* customFunctions */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth__["a" /* AuthProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 288:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Volumes/D/Ionic/account/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/Ionic/account/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunningTotalPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the RunningTotalPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var RunningTotalPipe = /** @class */ (function () {
    function RunningTotalPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    RunningTotalPipe.prototype.transform = function (value, position) {
        console.log(value, position);
        var runningTotal = 0;
        for (var i = 0; i <= position; i++) {
            if (parseFloat(value[i]['credit']) == 0) {
                runningTotal += parseFloat(value[i]['debit']);
            }
            else {
                runningTotal -= parseFloat(value[i]['credit']);
            }
        }
        return runningTotal;
    };
    RunningTotalPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'runningTotal',
        })
    ], RunningTotalPipe);
    return RunningTotalPipe;
}());

//# sourceMappingURL=running-total.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LedgerSummaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_functions__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ledger_detail_ledger_detail__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__ = __webpack_require__(21);
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
    function LedgerSummaryPage(navCtrl, navParams, api, func, screenOrientation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.func = func;
        this.screenOrientation = screenOrientation;
        this.current_page = 1;
        this.last_page = 1;
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
        this.getLedgerSummaryReport();
    }
    LedgerSummaryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LedgerSummaryPage');
    };
    LedgerSummaryPage.prototype.ionViewWillLeave = function () {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    };
    LedgerSummaryPage.prototype.getLedgerSummaryReport = function () {
        var _this = this;
        this.func.presentLoading('Loading Ledger Summaries...');
        this.api.ledgerSummaryReport(this.current_page)
            .subscribe(function (data) {
            _this.func.dismissLoading();
            console.log(data['data']);
            _this.ledger = data['data'];
            _this.filterData = data['data'];
            _this.getTotal(data['data']);
            _this.current_page = data['current_page'];
            _this.last_page = data['last_page'];
        });
    };
    LedgerSummaryPage.prototype.doInfinite = function (event) {
        var _this = this;
        if (this.current_page <= this.last_page) {
            this.api.ledgerSummaryReport(this.current_page + 1)
                .subscribe(function (data) {
                console.log(data);
                if (data['data'].length > 0) {
                    _this.ledger = _this.ledger.concat(data['data']);
                    _this.filterData = _this.ledger;
                    _this.getTotal(_this.ledger);
                    _this.current_page = data['current_page'];
                    _this.last_page = data['last_page'];
                }
                event.complete();
            }, function (err) {
                event.complete();
            });
        }
    };
    LedgerSummaryPage.prototype.loadMoreData = function () {
        var _this = this;
        this.api.ledgerSummaryReport(this.current_page + 1)
            .subscribe(function (data) {
            console.log(data);
            if (data['data'].length > 0) {
                _this.ledger = _this.ledger.concat(data['data']);
                _this.filterData = _this.ledger;
                _this.getTotal(_this.ledger);
                _this.current_page = data['current_page'];
                _this.last_page = data['last_page'];
            }
        }, function (err) {
        });
    };
    LedgerSummaryPage.prototype.getTotal = function (ledger) {
        this.dr_amount = 0;
        this.cr_amount = 0;
        this.balance = 0;
        for (var _i = 0, ledger_1 = ledger; _i < ledger_1.length; _i++) {
            var data = ledger_1[_i];
            this.dr_amount += parseFloat(data.debit);
            this.cr_amount += parseFloat(data.credit);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__ledger_detail_ledger_detail__["a" /* LedgerDetailPage */], { ledger: ledger });
    };
    LedgerSummaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-ledger-summary',template:/*ion-inline-start:"/Volumes/D/Ionic/account/src/pages/ledger-summary/ledger-summary.html"*/'<!--\n  Generated template for the LedgerSummaryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title >Ledger Summary</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content fullscreen>\n      \n  <ion-searchbar \n          (ionInput)="search($event)" \n          placeholder="Search by Ledger"\n          (ionCancel)="onSearchCancel($event)"\n          >\n  </ion-searchbar>\n\n  <div class="content-container">\n    <div class="row header">\n      <div class="col">Ledger</div>\n      <div class="col">DR</div>\n      <div class="col">CR</div>\n      <div class="col">Balance</div>\n    </div>\n    <div class="row" *ngFor="let l of ledger" (click)="viewLedgerDetail(l)">\n      <div class="col">{{l.ledger_name}}</div>\n      <div class="col">{{l.debit | number}}</div>\n      <div class="col">{{l.credit | number}}</div>\n      <div class="col">{{l.balance | number}}</div>\n    </div>\n    <div class="row footer" *ngIf="ledger">\n      <div class="col">Total</div>\n      <div class="col">{{dr_amount | number}}</div>\n      <div class="col">{{cr_amount | number}}</div>\n      <div class="col">{{balance | number}}</div>\n    </div>\n  </div>\n\n  <div *ngIf="current_page < last_page" padding style="display: flex; align-items: center; justify-content: center;">\n    <button ion-button color="light" round (click)="loadMoreData()">Load More</button>\n  </div>\n\n  <!-- <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n </ion-infinite-scroll> -->\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/Ionic/account/src/pages/ledger-summary/ledger-summary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_functions__["a" /* customFunctions */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], LedgerSummaryPage);
    return LedgerSummaryPage;
}());

//# sourceMappingURL=ledger-summary.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_company_modal_select_company_modal__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__ = __webpack_require__(21);
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
    function LoginPage(modalCtrl, navCtrl, auth, navParams, loadingCtrl, screenOrientation) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.screenOrientation = screenOrientation;
        this.email = "";
        this.password = "";
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
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
                // if(localStorage.getItem('company_id')){
                //   this.saveUser(user);
                // }else{
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
                // }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Volumes/D/Ionic/account/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>User Login</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-content padding style="border-top: 20px solid #FE5E00;border-bottom: 20px solid #FE5E00;">\n\n	<ion-grid style="padding-top: 10%;">\n		<ion-row>\n			<!-- <ion-col col-12>\n				<p style="font-size: 25px; text-align: center;">\n					Log In to View Your Reports.\n				</p>\n			</ion-col> -->\n			<ion-col col-8 offset-2>\n				<img src="assets/icon/pflogo.png">\n			</ion-col>\n			<ion-col col-12>\n				<p *ngIf="error" style="color:red; text-align:center"> {{error}} </p>\n				<form (ngSubmit)="login()">\n					<ion-item>\n				        <ion-label floating>User ID</ion-label>\n				        <ion-input type="number" [(ngModel)]="email" required name="email"></ion-input>\n				     </ion-item>\n				     <ion-item>\n				        <ion-label floating>Password</ion-label>\n				        <ion-input type="password" [(ngModel)]="password" required name="password"></ion-input>\n						 </ion-item>\n						 <!-- <ion-item>\n							<ion-label floating>Company ID</ion-label>\n							<ion-input type="text" [(ngModel)]="company_id" required name="password"></ion-input>\n					 </ion-item> -->\n				     <br>\n				     <button ion-button type="submit" block>Login</button>\n				</form>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/Ionic/account/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], LoginPage);
    return LoginPage;
    var LoginPage_1;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectCompanyModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_functions__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__ = __webpack_require__(21);
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
    function SelectCompanyModalPage(navCtrl, navParams, viewCtrl, api, func, screenOrientation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.api = api;
        this.func = func;
        this.screenOrientation = screenOrientation;
        this.company = localStorage.getItem('company_id');
        this.refresh = false;
        // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
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
        var _this = this;
        var data = this.company == undefined ? { 'status': false } : { 'status': true };
        this.func.presentLoading('Setting Company Name...');
        setTimeout(function () {
            _this.func.dismissLoading();
            if (data['status'] == true) {
                localStorage.setItem('company_id', _this.company);
            }
            if (_this.refresh) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            }
            else {
                _this.viewCtrl.dismiss(data);
            }
        }, 1000);
    };
    SelectCompanyModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-select-company-modal',template:/*ion-inline-start:"/Volumes/D/Ionic/account/src/pages/select-company-modal/select-company-modal.html"*/'<!--\n  Generated template for the SelectCompanyModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>Select CompanyModal</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content padding>\n  <h3 style="text-align:center;     \n              background: #FE5E00;\n              color: white;\n              padding: 10px;\n              border-radius: 5px;">\n    Select Company\n  </h3>\n<hr>\n<br>\n\n<ion-grid>\n    <ion-row *ngFor="let c of companies">\n      <ion-col col-6 >\n        <b>{{c.company_id}}</b>\n      </ion-col>\n      <ion-col col-6 text-right>\n        <input type="radio" value="{{c.company_id}}" [(ngModel)]="company">\n          <!-- <ion-radio value="{{c.company_id}}" [(ngModel)]="company" name="company_id" ngDefaultControl></ion-radio> -->\n      </ion-col>\n      <ion-col col-6 style="color:grey; font-size: 14px;">\n          From: {{c.company_start_date | date: \'mediumDate\'}}\n      </ion-col>\n      <ion-col col-6 text-right style="color:grey; font-size: 14px;">\n          To: {{c.company_end_date | date: \'mediumDate\'}}\n      </ion-col>\n      <hr>\n    </ion-row>\n  </ion-grid>\n\n<!-- <ion-list radio-group [(ngModel)]="company">\n    <ion-item *ngFor="let c of companies">\n      <ion-label>{{c.company_id}}</ion-label>\n      <ion-radio value="{{c.company_id}}"></ion-radio>\n    </ion-item>\n  </ion-list> -->\n\n<ion-grid>\n  <ion-row>\n    <ion-col col-5>\n        <button ion-button color="danger" (click)="dismiss()" block>Cancel</button>\n    </ion-col>\n    <ion-col offset-2 col-5>\n        <button ion-button (click)="dismissWithData()" block style="background-color:#FE5E00;">Select</button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n  \n</ion-content>\n'/*ion-inline-end:"/Volumes/D/Ionic/account/src/pages/select-company-modal/select-company-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_functions__["a" /* customFunctions */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], SelectCompanyModalPage);
    return SelectCompanyModalPage;
}());

//# sourceMappingURL=select-company-modal.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ledger_summary_ledger_summary__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stock_summary_stock_summary__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__daybook_report_daybook_report__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__ = __webpack_require__(21);
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
    function HomePage(navCtrl, api, screenOrientation) {
        // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        var _this = this;
        this.navCtrl = navCtrl;
        this.api = api;
        this.screenOrientation = screenOrientation;
        setTimeout(function () {
            // this.getCompanies();
            _this.company_id = localStorage.getItem('company_id');
        }, 500);
    }
    HomePage.prototype.getCompanies = function () {
        var _this = this;
        this.api.getUserCompanies()
            .subscribe(function (data) {
            _this.companies = data;
            var c = _this.companies.filter(function (company) {
                return (company.company_id.toLowerCase().indexOf(_this.company_id.toLowerCase()) > -1);
            });
            _this.company = c[0];
            console.log(_this.company);
        });
    };
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Volumes/D/Ionic/account/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Reports - <small>{{company_id}}</small></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content fullscreen> \n  <ion-grid>\n    <ion-row>\n        <!-- <ion-grid *ngIf="company && (company.company_start_date || company.company_end_date)" style="color:gray;margin-bottom: -20px;">\n          <ion-row>\n            <ion-col col-6 *ngIf="company.company_start_date">\n              From: {{company.company_start_date | date: \'mediumDate\'}}\n            </ion-col>\n            <ion-col col-6 text-right *ngIf="company.company_end_date">\n              To: {{company.company_end_date | date: \'mediumDate\'}}\n            </ion-col>\n          </ion-row>\n        </ion-grid> -->\n      <ion-col col-12>\n        <p class="heading"> Select The report You want to View. </p>\n        <hr>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card>\n    <ion-card-content (click)="gotoLedgerSummary()" class="component">\n        <ion-icon name="document" style="font-size:30px; color:#FE5E00;"></ion-icon>\n            Ledger Summary Report\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n      <ion-card-content  class="component" (click)="gotoDaybookReport()">\n          <ion-icon name="book" style="font-size:30px; color:#FE5E00;"></ion-icon>\n          DayBook Report\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n        <ion-card-content  class="component" (click)="gotoStockSummary()">\n            <ion-icon name="logo-buffer" style="font-size:30px; color:#FE5E00;"></ion-icon>\n            Stock Summary Report\n        </ion-card-content>\n      </ion-card>\n  \n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/Ionic/account/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockSummaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_functions__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stock_detail_stock_detail__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__ = __webpack_require__(21);
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
    function StockSummaryPage(screenOrientation, navCtrl, func, navParams, api) {
        this.screenOrientation = screenOrientation;
        this.navCtrl = navCtrl;
        this.func = func;
        this.navParams = navParams;
        this.api = api;
        this.data = {
            in_quantity: 0,
            in_value: 0,
            out_quantity: 0,
            out_value: 0,
            opening_quantity: 0,
            opening_value: 0,
            rate: 0,
            balance_quantity: 0,
            balance_amount: 0
        };
        this.current_page = 1;
        this.last_page = 1;
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        this.getstockSummaryReport();
    }
    StockSummaryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StockSummaryPage');
    };
    StockSummaryPage.prototype.getstockSummaryReport = function () {
        var _this = this;
        this.func.presentLoading('Loading Stock Summaries...');
        this.api.stockSummaryReport(this.current_page)
            .then(function (data) {
            _this.func.dismissLoading();
            _this.stock = data['data'];
            _this.filterData = data['data'];
            _this.getTotal(data['data']);
            _this.current_page = data['current_page'];
            _this.last_page = data['last_page'];
        });
    };
    StockSummaryPage.prototype.doInfinite = function (event) {
        var _this = this;
        this.api.stockSummaryReport(this.current_page + 1)
            .then(function (data) {
            console.log(data);
            if (data['data'].length > 0) {
                _this.stock = _this.stock.concat(data['data']);
                _this.current_page = parseInt(data['current_page']);
                _this.last_page = parseInt(data['last_page']);
                _this.filterData = _this.stock;
                _this.getTotal(_this.stock);
            }
            event.complete();
        }, function (err) {
            event.complete();
        });
    };
    StockSummaryPage.prototype.loadMoreData = function () {
        var _this = this;
        this.api.stockSummaryReport(this.current_page + 1)
            .then(function (data) {
            console.log(data);
            if (data['data'].length > 0) {
                _this.stock = _this.stock.concat(data['data']);
                _this.current_page = parseInt(data['current_page']);
                _this.last_page = parseInt(data['last_page']);
                _this.filterData = _this.stock;
                _this.getTotal(_this.stock);
            }
        }, function (err) {
        });
    };
    StockSummaryPage.prototype.getTotal = function (stock) {
        this.data = {
            in_quantity: 0,
            in_value: 0,
            out_quantity: 0,
            out_value: 0,
            opening_quantity: 0,
            opening_value: 0,
            rate: 0,
            balance_quantity: 0,
            balance_amount: 0
        };
        for (var _i = 0, stock_1 = stock; _i < stock_1.length; _i++) {
            var data = stock_1[_i];
            this.data.in_quantity += parseFloat(data.in_quantity);
            this.data.in_value += parseFloat(data.in_value);
            this.data.out_quantity += parseFloat(data.out_quantity);
            this.data.out_value += parseFloat(data.out_value);
            this.data.opening_quantity += parseFloat(data.opening_quantity);
            this.data.opening_value += parseFloat(data.opening_value);
            this.data.rate += parseFloat(data.rate);
            this.data.balance_quantity += parseFloat(data.balance_quantity);
            this.data.balance_amount += parseFloat(data.balance_amount);
        }
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__stock_detail_stock_detail__["a" /* StockDetailPage */], { stock: stock });
    };
    StockSummaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-stock-summary',template:/*ion-inline-start:"/Volumes/D/Ionic/account/src/pages/stock-summary/stock-summary.html"*/'<!--\n  Generated template for the StockSummaryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Stock Sumamry</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content fullscreen>\n  <ion-searchbar \n    (ionInput)="search($event)" \n    placeholder="Search by Stock Name"\n    (ionCancel)="onSearchCancel($event)"\n    >\n  </ion-searchbar>\n\n    <div class="content-container">\n      <ion-row class="row header">\n        <ion-col col-4>Stock</ion-col>\n        <ion-col col-2>IN</ion-col>\n        <ion-col col-2>OUT</ion-col>\n        <ion-col col-2>Bal</ion-col>\n        <ion-col col-2>Amt</ion-col>\n      </ion-row>\n      <ion-row *ngFor="let s of stock" (click)="viewStockDetail(s)">\n        <ion-col col-4>{{s.stock_name}}</ion-col>\n        <ion-col col-2>{{s.in_quantity | number}}</ion-col>\n        <ion-col col-2>{{s.out_quantity | number}}</ion-col>\n        <ion-col col-2>{{s.balance_quantity | number}}</ion-col>\n        <ion-col col-2>{{s.balance_amount | number}}</ion-col>\n      </ion-row>\n      <ion-row class="row footer" *ngIf="stock">\n        <ion-col col-4>Total</ion-col>\n        <ion-col col-2>{{data.in_quantity | number}}</ion-col>\n        <ion-col col-2>{{data.out_quantity | number}}</ion-col>\n        <ion-col col-2>{{data.balance_quantity | number}}</ion-col>\n        <ion-col col-2>{{data.balance_amount | number}}</ion-col>\n      </ion-row>\n    </div>\n\n  <!-- <ion-card *ngFor="let s of stock" (click)="viewStockDetail(s)">\n    <ion-card-content>\n      <ion-grid>\n        <ion-row >\n\n          <ion-col col-12 style="text-align:center;">\n            <strong>Stock Name: <span> {{s.stock_name}} </span></strong>\n            <hr>\n          </ion-col>\n          <ion-col col-12>\n            IN Quantity: <span class="pull-right"> {{s.in_quantity}} </span>\n          </ion-col>\n          <ion-col col-12>\n            IN Value: <span class="pull-right"> {{s.in_value}} </span>\n          </ion-col>\n          <ion-col col-12>\n            OUT Quantity: <span class="pull-right"> {{s.out_quantity}} </span>\n          </ion-col>\n          <ion-col col-12>\n            OUT Value: <span class="pull-right"> {{s.out_value}} </span>\n          </ion-col>\n          <ion-col col-12>\n            Opening Quantity: <span class="pull-right"> {{s.opening_quantity}} </span>\n          </ion-col>\n          <ion-col col-12>\n            Opening Value: <span class="pull-right"> {{s.opening_value}} </span>\n          </ion-col>\n          <ion-col col-12>\n            Rate: <span class="pull-right"> {{s.rate}} </span>\n          </ion-col>\n          <ion-col col-12>\n            Balance Quantity: <span class="pull-right"> {{s.balance_quantity}} </span>\n          </ion-col>\n          <ion-col col-12>\n            Balance Value: <span class="pull-right"> {{s.balance_value}} </span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf="stock">\n    <ion-card-content>\n      <ion-grid>\n        <ion-row >\n          <ion-col col-12  style="text-align:center; font-weight:600; font-size:18px;background: #fe5e00;\n          color: #fff;">\n            Total\n          </ion-col>\n          <ion-col col-12>\n            IN Quantity: <span class="pull-right"> {{data.in_quantity}} </span>\n          </ion-col>\n          <ion-col col-12>\n            IN Value: <span class="pull-right"> {{data.in_value}} </span>\n          </ion-col>\n          <ion-col col-12>\n            OUT Quantity: <span class="pull-right"> {{data.out_quantity}} </span>\n          </ion-col>\n          <ion-col col-12>\n            OUT Value: <span class="pull-right"> {{data.out_value}} </span>\n          </ion-col>\n          <ion-col col-12>\n            Opening Quantity: <span class="pull-right"> {{data.opening_quantity}} </span>\n          </ion-col>\n          <ion-col col-12>\n            Opening Value: <span class="pull-right"> {{data.opening_value}} </span>\n          </ion-col>\n          <ion-col col-12>\n            Rate: <span class="pull-right"> {{data.rate}} </span>\n          </ion-col>\n          <ion-col col-12>\n            Balance Quantity: <span class="pull-right"> {{data.balance_quantity}} </span>\n          </ion-col>\n          <ion-col col-12>\n            Balance Value: <span class="pull-right"> {{data.balance_value}} </span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card> -->\n\n  <div *ngIf="current_page < last_page" padding style="display: flex; align-items: center; justify-content: center;">\n    <button ion-button color="light" round (click)="loadMoreData()">Load More</button>\n  </div>\n\n  <!-- <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n </ion-infinite-scroll> -->\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/Ionic/account/src/pages/stock-summary/stock-summary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__["a" /* ScreenOrientation */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__providers_functions__["a" /* customFunctions */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */]])
    ], StockSummaryPage);
    return StockSummaryPage;
}());

//# sourceMappingURL=stock-summary.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DaybookReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_functions__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DaybookReportPage = /** @class */ (function () {
    function DaybookReportPage(navCtrl, navParams, api, func, screenOrientation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.func = func;
        this.screenOrientation = screenOrientation;
        this.current_page = 1;
        this.last_page = 1;
        // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        this.getdayBookReport();
        this.func.presentLoading("Loading DayBook Reports...");
    }
    DaybookReportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DaybookReportPage');
    };
    DaybookReportPage.prototype.getdayBookReport = function () {
        var _this = this;
        this.api.dayBookReport(this.current_page)
            .then(function (data) {
            console.log(data);
            _this.func.dismissLoading();
            _this.daybook = data['data'];
            _this.current_page = data['current_page'];
            _this.last_page = data['last_page'];
        });
    };
    DaybookReportPage.prototype.doInfinite = function (event) {
        var _this = this;
        if (this.current_page <= this.last_page) {
            this.api.dayBookReport(this.current_page + 1)
                .then(function (data) {
                console.log(data);
                if (data['data'].length > 0) {
                    _this.daybook = _this.daybook.concat(data['data']);
                    _this.current_page = data['current_page'];
                    _this.last_page = data['last_page'];
                }
                event.complete();
            }, function (err) {
                event.complete();
            });
        }
    };
    DaybookReportPage.prototype.DateChange = function (ev) {
        var _this = this;
        var input = ev.target.value;
        if (input) {
            if (input.length == 10) {
                var split = input.split('-');
                var year = split[0];
                var month = split[1];
                var day = split[2];
                this.api.filterDayBookReport(year, month, day)
                    .then(function (data) {
                    _this.daybook = data;
                })
                    .catch(function () {
                    _this.func.presentLoading('Error Occured. Displaying all records.');
                    setTimeout(function () {
                        _this.func.dismissLoading();
                        _this.getdayBookReport();
                    }, 1000);
                });
            }
        }
        else {
            this.getdayBookReport();
        }
    };
    DaybookReportPage.prototype.onSearchCancel = function () {
        this.getdayBookReport();
    };
    DaybookReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-daybook-report',template:/*ion-inline-start:"/Volumes/D/Ionic/account/src/pages/daybook-report/daybook-report.html"*/'<!--\n  Generated template for the DaybookReportPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>DayBook Report</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content fullscreen>\n    <div class="content-container">\n\n        <ion-searchbar \n          (ionInput)="DateChange($event)" \n          placeholder="Search by Date"\n          (ionCancel)="onSearchCancel($event)"\n          [brmasker]="{mask:\'0000-00-00\', len:10, type:\'num\'}"\n          >\n        </ion-searchbar>\n            \n\n        <div class="row header">\n        <div class="col">Date</div>\n          <div class="col">Daybook</div>\n          <div class="col">DR</div>\n          <div class="col">CR</div>\n        </div>\n        <div class="row" *ngFor="let d of daybook">\n          <!-- <div class="col" *ngIf="d.ledger_name != \'TOTAL\' || d.ledger_name == \'Total\'">{{d.date | date: \'mediumDate\'}}</div> -->\n          <div class="col" *ngIf="d.ledger_name != \'TOTAL\'">{{d.miti}}</div>\n          <div class="col" *ngIf="d.ledger_name == \'TOTAL\' || d.ledger_name == \'Total\'"></div>\n          \n          <div class="col" *ngIf="d.ledger_name != \'TOTAL\'">{{d.ledger_name}}</div>\n          <div class="col" *ngIf="d.ledger_name == \'TOTAL\' || d.ledger_name == \'Total\'"><b>{{d.ledger_name}}</b></div>\n          \n          <div class="col" *ngIf="d.ledger_name != \'TOTAL\'">{{d.dr_amount}}</div>\n          <div class="col" *ngIf="d.ledger_name == \'TOTAL\' || d.ledger_name == \'Total\'"><b>{{d.dr_amount}}</b></div>\n\n          <div class="col" *ngIf="d.ledger_name != \'TOTAL\'">{{d.cr_amount}}</div>\n          <div class="col" *ngIf="d.ledger_name == \'TOTAL\' || d.ledger_name == \'Total\'"><b>{{d.cr_amount}}</b></div>\n\n          <!-- <div class="col">{{d.dr_amount}}</div>\n          <div class="col">{{d.cr_amount}}</div> -->\n        </div>\n    </div>\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n     </ion-infinite-scroll>\n  \n</ion-content>\n'/*ion-inline-end:"/Volumes/D/Ionic/account/src/pages/daybook-report/daybook-report.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_functions__["a" /* customFunctions */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], DaybookReportPage);
    return DaybookReportPage;
}());

//# sourceMappingURL=daybook-report.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(54);
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
        this.url = "http://nepgeeks.com//api/app/";
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ })

},[211]);
//# sourceMappingURL=main.js.map