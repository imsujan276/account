import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LedgerSummaryPage } from '../ledger-summary/ledger-summary';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotoLedgerSummary(){
    this.navCtrl.push(LedgerSummaryPage)
  }

}
