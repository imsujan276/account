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

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider) {
    this.getstockSummaryReport()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StockSummaryPage');
  }

  getstockSummaryReport(){
    this.api.stockSummaryReport()
      .then(data => {
        console.log(data);
        this.stock = data;
        this.filterData = data;
         this.getTotal(data)
      })
  }

  getTotal(stock){
    // this.opening_dr = 0; this.opening_cr = 0;this.dr_amount = 0;this.cr_amount = 0;this.balance  =  0;
    // for(let data of stock) {
    //   this.opening_dr += parseFloat(data.opening_dr);
    //   this.opening_cr += parseFloat(data.opening_cr);
    //   this.dr_amount += parseFloat(data.dr_amount);
    //   this.cr_amount += parseFloat(data.cr_amount);
    //   this.balance += parseFloat(data.balance);
    // }
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
