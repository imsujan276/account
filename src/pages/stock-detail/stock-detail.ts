import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { customFunctions } from '../../providers/functions';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

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
  stockDetail;
  current_page = 1;
  last_page = 1;

  in_quantity;
  out_quantity;
  in_value;
  out_value;
  balance_quantity;
  balance_amount;

  isLoadingMoreData = false;

  constructor(private screenOrientation: ScreenOrientation,public navCtrl: NavController, public navParams: NavParams, private api: ApiProvider, private func: customFunctions) {
  	this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    this.stock = this.navParams.get('stock')
  	this.getstockDetail();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad stockDetailPage');
  }

  ionViewWillLeave(){
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  getstockDetail(){
    this.func.presentLoading('Loading '+this.stock.stock_name+' Details...')
    this.api.stockDetailReport(this.stock.stock_id, this.current_page)
      .then(data => {
        console.log(data)
        this.func.dismissLoading();
        this.stockDetail = data['data'];
        this.current_page = parseInt(data['current_page']);
        this.last_page =  parseInt(data['last_page']);
        this.getTotal(data['data']);
      })
  }

  doInfinite(event){
      this.api.stockDetailReport(this.stock.stock_id, this.current_page+1)
        .then(data => {
          console.log(data)
          if(data['data'].length > 0){
            this.stockDetail = this.stockDetail.concat(data['data'])
            this.current_page =  parseInt(data['current_page']);
            this.last_page =  parseInt(data['last_page']);
            this.getTotal(this.stockDetail);
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
    this.api.stockDetailReport(this.stock.stock_id, this.current_page+1)
        .then(data => {
          this.isLoadingMoreData = false;
          console.log(data)
          if(data['data'].length > 0){
            this.stockDetail = this.stockDetail.concat(data['data'])
            this.current_page =  parseInt(data['current_page']);
            this.last_page =  parseInt(data['last_page']);
            this.getTotal(this.stockDetail);
          }
        },
        (err) => {
          this.isLoadingMoreData = false;
        }
      )
  }

  getTotal(stockDetail){
    this.in_quantity = 0; this.out_quantity = 0;this.in_value = 0;this.out_value = 0;this.balance_quantity  =  0; this.balance_amount = 0;
    for(let data of stockDetail) {
      this.in_quantity += parseFloat(data.in_quantity);
      this.out_quantity += parseFloat(data.out_quantity);
      this.in_value += parseFloat(data.in_value);
      this.out_value += parseFloat(data.out_value);
      this.balance_quantity += parseFloat(data.balance_quantity);
      this.balance_amount += parseFloat(data.balance_amount);
    }
  }



}
