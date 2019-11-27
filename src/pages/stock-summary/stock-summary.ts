import { customFunctions } from './../../providers/functions';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { StockDetailPage } from '../stock-detail/stock-detail';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

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
    balance_amount: 0
  }


  current_page = 1;
  last_page = 1;

  isLoadingMoreData = false;

  constructor(private screenOrientation: ScreenOrientation,public navCtrl: NavController, public func: customFunctions, public navParams: NavParams, public api: ApiProvider) {
    // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.getstockSummaryReport()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StockSummaryPage');
  }

  getstockSummaryReport(){
    this.func.presentLoading('Loading Stock Summaries...')
    this.api.stockSummaryReport(this.current_page)
      .then(data => {
        this.func.dismissLoading();
        this.stock = data['data'];
        this.filterData = data['data'];
         this.getTotal(data['data'])
         this.current_page = data['current_page'];
         this.last_page = data['last_page'];
      })
  }

  doInfinite(event){
    this.api.stockSummaryReport(this.current_page+1)
      .then(data => {
        console.log(data)
        if(data['data'].length > 0){
          this.stock = this.stock.concat(data['data'])
          this.current_page =  parseInt(data['current_page']);
          this.last_page =  parseInt(data['last_page']);
          this.filterData = this.stock;
           this.getTotal(this.stock)
        }
        event.complete();
      },
      (err) => {
        event.complete();
      }
    )
}


loadMoreData(){
  this.isLoadingMoreData = true;
  this.api.stockSummaryReport(this.current_page+1)
  .then(data => {
    this.isLoadingMoreData = false;;
    if(data['data'].length > 0){
      this.stock = this.stock.concat(data['data'])
      this.current_page =  parseInt(data['current_page']);
      this.last_page =  parseInt(data['last_page']);
      this.filterData = this.stock;
       this.getTotal(this.stock)
    }
  },
  (err) => {
    this.isLoadingMoreData = false;
  }
)
}


  getTotal(stock){
    this.data= {
      in_quantity: 0,
      in_value: 0,
      out_quantity: 0,
      out_value: 0,
      opening_quantity: 0,
      opening_value: 0,
      rate: 0,
      balance_quantity: 0,
      balance_amount: 0
    }
    for(let data of stock) {
      this.data.in_quantity += parseFloat(data.in_quantity);
      this.data.in_value += parseFloat(data.in_value);
      this.data.out_quantity += parseFloat(data.out_quantity);
      this.data.out_value += parseFloat(data.out_value);
      this.data.opening_quantity += parseFloat(data.opening_quantity);
      this.data.opening_value += parseFloat(data.opening_value);
      this.data.rate += parseFloat(data.rate);
      this.data.balance_quantity += parseFloat(data.balance_quantity);
      this.data.balance_amount += parseFloat(data.balance_amount);
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
    }
    // else{
    //   this.getstockSummaryReport();
    // }
  }

  onSearchCancel(){
    this.getstockSummaryReport();
  }

  viewStockDetail(stock){
    this.navCtrl.push(StockDetailPage, {stock: stock});
  }

}
