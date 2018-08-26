import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.ledger = this.navParams.get('ledger')
  	console.log(this.ledger)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LedgerDetailPage');
  }

}
