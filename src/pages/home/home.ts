import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LedgerSummaryPage } from '../ledger-summary/ledger-summary';
import { ApiProvider } from '../../providers/api/api';
import { StockSummaryPage } from '../stock-summary/stock-summary';
import { DaybookReportPage } from '../daybook-report/daybook-report';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  company;
  constructor(public navCtrl: NavController, public api: ApiProvider,private screenOrientation: ScreenOrientation) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    setInterval(() => {
      this.company = this.api.getCompanyId();
    }, 500)
  }

  gotoLedgerSummary(){
    this.navCtrl.push(LedgerSummaryPage)
  }

  gotoDaybookReport(){
    this.navCtrl.push(DaybookReportPage)
  }

  gotoStockSummary(){
    this.navCtrl.push(StockSummaryPage)
  }

}
