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
  company_id;
  companies;
  constructor(public navCtrl: NavController, public api: ApiProvider) {
    
    let interval = setInterval(()=> {
      if(localStorage.getItem('company_id')){
        this.company_id = localStorage.getItem('company_id')
        clearInterval(interval)
      }
    },500)
  }

  getCompanies(){
    this.api.getUserCompanies()
      .subscribe(data => {
        this.companies = data;
        let c = this.companies.filter((company) => {
          return (company.company_id.toLowerCase().indexOf(this.company_id.toLowerCase()) > -1);
        })
        this.company = c[0];
        console.log(this.company)
      })
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
