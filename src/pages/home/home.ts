import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LedgerSummaryPage } from '../ledger-summary/ledger-summary';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  company;
  constructor(public navCtrl: NavController) {
    this.company = localStorage.getItem('company_id') ? localStorage.getItem('company_id') : ''
  }

  gotoLedgerSummary(){
    this.navCtrl.push(LedgerSummaryPage)
  }

}
