import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LedgerSummaryPage } from '../ledger-summary/ledger-summary';
import { ApiProvider } from '../../providers/api/api';
import { StockSummaryPage } from '../stock-summary/stock-summary';
import { DaybookReportPage } from '../daybook-report/daybook-report';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  company;
  constructor(public navCtrl: NavController, public api: ApiProvider) {
    this.company = this.api.getCompanyId();
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
