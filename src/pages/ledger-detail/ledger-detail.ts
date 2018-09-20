import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { customFunctions } from '../../providers/functions';

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
  current_page = 1;
  last_page = 1;

  dr_amount;
  cr_amount;
  balance;
  uc_amount

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiProvider, private func: customFunctions) {
  	this.ledger = this.navParams.get('ledger')
  	this.getLedgerDetail();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LedgerDetailPage');
  }

  getLedgerDetail(){
    this.func.presentLoading('Loading '+this.ledger.ledger_name+' Details...')
    this.api.ledgerDetail(this.ledger.ledger_summary_id, this.ledger.ledger_name, this.current_page)
      .then(data => {
        console.log(data)
        this.func.dismissLoading();
        this.ledgerDetail = data['data'];
        this.current_page = data['current_page'];
        this.last_page = data['last_page'];
        this.getTotal(data['data']);
      })
  }

  doInfinite(event){
      this.api.ledgerDetail(this.ledger.ledger_summary_id, this.ledger.ledger_name, this.current_page+1)
        .then(data => {
          console.log(data)
          if(data['data'].length > 0){
            this.ledgerDetail = this.ledgerDetail.concat(data['data'])
            this.current_page = data['current_page'];
            this.last_page = data['last_page'];
            this.getTotal(this.ledgerDetail);
          }
          event.complete();
        },
        (err) => {
          event.complete();
        }
      )
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
