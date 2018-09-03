import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StockDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-stock-detail',
  templateUrl: 'stock-detail.html',
})
export class StockDetailPage {

  stock;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.stock = this.navParams.get('stock');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StockDetailPage');
  }

}
