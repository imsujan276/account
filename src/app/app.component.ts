import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LedgerSummaryPage } from '../pages/ledger-summary/ledger-summary';
import { StockSummaryPage } from '../pages/stock-summary/stock-summary';
import { DaybookReportPage } from '../pages/daybook-report/daybook-report';
import { SelectCompanyModalPage } from '../pages/select-company-modal/select-company-modal';

import { LoginPage } from '../pages/login/login';

import { AuthProvider } from '../providers/auth/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public auth: AuthProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Ledger Summary Report', component: LedgerSummaryPage },
      { title: 'Daybook Report ', component: DaybookReportPage },
      { title: 'Stock Summary Report ', component: StockSummaryPage },
      { title: 'Change Company', component: SelectCompanyModalPage }
    ];
    // this.checkUserLogin()
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }

  logout(){
    this.auth.logout();
  }

  checkUserLogin(){
    if(!localStorage.getItem('user_id')){
      this.nav.setRoot(LoginPage)
    }
  }
}
