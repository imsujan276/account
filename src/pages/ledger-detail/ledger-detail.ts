import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the LedgerDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ledger-detail',
  templateUrl: 'ledger-detail.html',
})
export class LedgerDetailPage {

	ledger;
  ledgerDetail;

  dr_amount;
  cr_amount;
  balance;
  uc_amount

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiProvider) {
  	this.ledger = this.navParams.get('ledger')
  	this.getLedgerDetail();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LedgerDetailPage');
  }

  getLedgerDetail(){
    this.api.ledgerDetail(this.ledger.ledger_summary_id, this.ledger.ledger_name)
      .then(data => {
        console.log(data)
        this.ledgerDetail = data;
        this.getTotal(data);
      })
  }

  getTotal(ledgerDetail){
    this.balance = 0; this.uc_amount = 0;this.dr_amount = 0;this.cr_amount = 0;this.balance  =  0;
    for(let data of ledgerDetail) {
      this.uc_amount += parseFloat(data.uc_amount);
      this.dr_amount += parseFloat(data.dr_amount);
      this.cr_amount += parseFloat(data.cr_amount);
      this.balance += parseFloat(data.balance);
    }
  }
}
