import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { LedgerDetailPage } from '../ledger-detail/ledger-detail';
/**
 * Generated class for the LedgerSummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ledger-summary',
  templateUrl: 'ledger-summary.html',
})
export class LedgerSummaryPage {

  ledger;
  filterData;

    opening_dr;
    opening_cr;
    dr_amount;
    cr_amount;
    balance;
  
  loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public api: ApiProvider, 
              public loadingCtrl: LoadingController
              ) {
    this.getLedgerSummaryReport();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LedgerSummaryPage');
  }

  getLedgerSummaryReport(){
    // this.loading.present();
    this.api.ledgerSummaryReport()
      .subscribe(data => {
        // this.loading.dismiss();
        console.log(data);
        this.ledger = data;
        this.filterData = data;
         this.getTotal(data)
      })
  }

  getTotal(ledger){
    this.opening_dr = 0; this.opening_cr = 0;this.dr_amount = 0;this.cr_amount = 0;this.balance  =  0;
    for(let data of ledger) {
      this.opening_dr += parseFloat(data.opening_dr);
      this.opening_cr += parseFloat(data.opening_cr);
      this.dr_amount += parseFloat(data.dr_amount);
      this.cr_amount += parseFloat(data.cr_amount);
      this.balance += parseFloat(data.balance);
    }
  }

  search(ev: any) {
    // set val to the value of the searchbar
    const val = ev.target.value;
    console.log(val)
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.ledger = this.filterData.filter((item) => {
        return (item.ledger_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
      this.getTotal(this.ledger)
    }else{
      this.getLedgerSummaryReport();
    }
  }

  onSearchCancel(){
    this.getLedgerSummaryReport();
  }

  viewLedgerDetail(ledger){
    this.navCtrl.push(LedgerDetailPage, {ledger: ledger});
  }


}
