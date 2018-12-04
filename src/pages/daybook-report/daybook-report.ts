import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { customFunctions } from '../../providers/functions';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@Component({
  selector: 'page-daybook-report',
  templateUrl: 'daybook-report.html',
})
export class DaybookReportPage {

  daybook;
  current_page = 1;
  last_page = 1;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public api: ApiProvider,
              public func: customFunctions,
              private screenOrientation: ScreenOrientation
            ) {
    
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.getdayBookReport();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DaybookReportPage');
  }

  getdayBookReport(){
    this.func.presentLoading("Loading DayBook Reports...")
    this.api.dayBookReport(this.current_page)
      .then(data => {
        console.log(data)
        this.func.dismissLoading();
        this.daybook = data['data'];
        this.current_page = data['current_page'];
        this.last_page = data['last_page'];
      })
  }

  doInfinite(event){
    if(this.current_page <= this.last_page){
      this.api.dayBookReport(this.current_page+1)
        .then(data => {
          console.log(data)
          if(data['data'].length > 0){
            this.daybook = this.daybook.concat(data['data'])
            this.current_page = data['current_page'];
            this.last_page = data['last_page'];
          }
          event.complete();
        },
        (err) => {
          event.complete();
        }
      )
      }
  }

}
