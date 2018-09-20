import { customFunctions } from './../../providers/functions';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { StockDetailPage } from '../stock-detail/stock-detail';

/**
 * Generated class for the StockSummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-stock-summary',
  templateUrl: 'stock-summary.html',
})
export class StockSummaryPage {


  stock;
  filterData;

  data= {
    in_quantity: 0,
    in_value: 0,
    out_quantity: 0,
    out_value: 0,
    opening_quantity: 0,
    opening_value: 0,
    rate: 0,
    balance_quantity: 0,
    balance_value: 0
  }

  constructor(public navCtrl: NavController, public func: customFunctions, public navParams: NavParams, public api: ApiProvider) {
    this.getstockSummaryReport()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StockSummaryPage');
  }

  getstockSummaryReport(){
    this.func.presentLoading('Loading Stock Summaries...')
    this.api.stockSummaryReport()
      .then(data => {
        this.func.dismissLoading();
        this.stock = data;
        this.filterData = data;
         this.getTotal(data)
      })
  }

  getTotal(stock){
    console.log(stock);
    for(let data of stock) {
      this.data.in_quantity += parseFloat(data.in_quantity);
      this.data.in_value += parseFloat(data.in_value);
      this.data.out_quantity += parseFloat(data.out_quantity);
      this.data.out_value += parseFloat(data.out_value);
      this.data.opening_quantity += parseFloat(data.opening_quantity);
      this.data.opening_value += parseFloat(data.opening_value);
      this.data.rate += parseFloat(data.rate);
      this.data.balance_quantity += parseFloat(data.balance_quantity);
      this.data.balance_value += parseFloat(data.balance_value);
    }
  }

  search(ev: any) {
    // set val to the value of the searchbar
    const val = ev.target.value;
    console.log(val)
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.stock = this.filterData.filter((item) => {
        return (item.stock_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
      this.getTotal(this.stock)
    }else{
      this.getstockSummaryReport();
    }
  }

  onSearchCancel(){
    this.getstockSummaryReport();
  }

  viewStockDetail(stock){
    this.navCtrl.push(StockDetailPage, {stock: stock});
  }

}
