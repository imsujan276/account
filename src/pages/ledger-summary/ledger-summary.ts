import { customFunctions } from './../../providers/functions';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { LedgerDetailPage } from '../ledger-detail/ledger-detail';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
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

    dr_amount;
    cr_amount;
    balance;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public api: ApiProvider, 
              public func: customFunctions,
              private screenOrientation: ScreenOrientation
              ) {
     this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.getLedgerSummaryReport();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LedgerSummaryPage');
  }

  getLedgerSummaryReport(){
    this.func.presentLoading('Loading Ledger Summaries...');
    this.api.ledgerSummaryReport()
      .subscribe(data => {
        this.func.dismissLoading();
        console.log(data['data']);
        this.ledger = data['data'];
        this.filterData = data['data'];
         this.getTotal(data['data'])
      })
  }

  getTotal(ledger){
    this.dr_amount = 0;this.cr_amount = 0;this.balance  =  0;
    for(let data of ledger) {
      this.dr_amount += parseFloat(data.debit);
      this.cr_amount += parseFloat(data.credit);
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
