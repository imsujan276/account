import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { LedgerSummaryPage } from '../pages/ledger-summary/ledger-summary';
import { LedgerDetailPage } from '../pages/ledger-detail/ledger-detail';
import { StockSummaryPage } from '../pages/stock-summary/stock-summary';
import { DaybookReportPage } from '../pages/daybook-report/daybook-report';
import { StockDetailPage } from '../pages/stock-detail/stock-detail';
import { SelectCompanyModalPage } from '../pages/select-company-modal/select-company-modal';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';

import { HttpClientModule } from '@angular/common/http';
import { ApiProvider } from '../providers/api/api'; 
import { customFunctions } from '../providers/functions';

import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { RunningTotalPipe } from '../pipes/running-total/running-total';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    LedgerSummaryPage,
    LedgerDetailPage,
    DaybookReportPage,
    StockSummaryPage,
    StockDetailPage,
    SelectCompanyModalPage,
    RunningTotalPipe,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrMaskerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    LedgerSummaryPage,
    LedgerDetailPage,
    DaybookReportPage,
    StockSummaryPage,
    StockDetailPage,
    SelectCompanyModalPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    ApiProvider,
    customFunctions,
    ScreenOrientation,
  ]
})
export class AppModule {}
