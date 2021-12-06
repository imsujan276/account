import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { customFunctions } from '../../providers/functions';

@Component({
  selector: 'page-daybook-report',
  templateUrl: 'daybook-report.html',
})
export class DaybookReportPage {

  daybook;
  temp_daybook;
  current_page = 1;
  last_page = 1;

  isSearching = false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public api: ApiProvider,
              public func: customFunctions,
            ) {
    
    // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.getdayBookReport();
    this.func.presentLoading("Loading DayBook Reports...")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DaybookReportPage');
  }

  getdayBookReport(){
    this.api.dayBookReport(this.current_page)
      .then(data => {
        console.log(data)
        this.func.dismissLoading();
        this.daybook = data['data'];
        this.temp_daybook = data['data']
        this.current_page = data['current_page'];
        this.last_page = data['last_page'];
      })
  }

  doInfinite(event){
    if(this.isSearching){
      event.complete();
      return;
    }
    if(this.current_page <= this.last_page){
      this.api.dayBookReport(this.current_page+1)
        .then(data => {
          console.log(data)
          if(data['data'].length > 0){
            this.daybook = this.daybook.concat(data['data'])
            this.temp_daybook = this.temp_daybook.concat(data['data'])
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

  DateChange(ev: any){
    let input = ev.target.value;
    if(input){
      if(input.length == 10){
        let dateParse = Date.parse(input);
        if(dateParse){
          this.isSearching = true;
          let dateObj = new Date(dateParse)
          let month = dateObj.getMonth() + 1; //months from 1-12
          let day = dateObj.getDate();
          let year = dateObj.getFullYear();
          console.log(year + "/" + month + "/" + day)
          this.api.filterDayBookReport(year, month, day)
          .then(data => {
            this.daybook = data
          })
          .catch(()=>{
            this.func.presentToast('Error Occured.')
            setTimeout(()=>{
              this.daybook = this.temp_daybook
              this.isSearching = false;
            },1000)
          })
        }
        else{
          this.func.presentToast('Invalid Date. Please enter a valid date')
        }
      }
    }else{
      this.daybook = this.temp_daybook
      this.isSearching = false;
    }

    // if(input){
    //   if(input.length == 10){
    //     let split = input.split('-');
    //     let year = split[0];
    //     let month = split[1];
    //     let day = split[2];
    //     this.api.filterDayBookReport(year, month, day)
    //       .then(data => {
    //         this.daybook = data
    //       })
    //       .catch(()=>{
    //         this.func.presentLoading('Error Occured. Displaying all records.')
    //         setTimeout(()=>{
    //           this.func.dismissLoading();
    //           // this.getdayBookReport();
    //           this.daybook = this.temp_daybook
    //         },1000)
    //       })
    //   }
    // }else{
    //   this.daybook = this.temp_daybook
    //   // this.getdayBookReport()
    // }
  }

  onSearchCancel(){
    this.daybook = this.temp_daybook
    this.isSearching = false;
    // this.getdayBookReport()
  }

}
