import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { HomePage } from '../home/home';
import { customFunctions } from '../../providers/functions';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
/**
 * Generated class for the SelectCompanyModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-company-modal',
  templateUrl: 'select-company-modal.html',
})
export class SelectCompanyModalPage {

  company= localStorage.getItem('company_id')
  companies;
  user_id;
  refresh = false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public viewCtrl: ViewController,
              public api: ApiProvider,
              public func: customFunctions,
              private screenOrientation: ScreenOrientation
              ) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.user_id = this.navParams.get('user_id') ? this.navParams.get('user_id') : localStorage.getItem('user_id');
    this.refresh = this.navParams.get('refresh') ? true : false;
    this.getCompanies(this.user_id);
  }

  getCompanies(user_id){
    console.log(user_id)
    this.api.getUserCompanies(user_id)
      .subscribe(data => {
        console.log(data);
        this.companies = data;
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectCompanyModalPage');
  }

  dismiss() {
    let data = { 'status': false};
    this.viewCtrl.dismiss(data);
  }

  dismissWithData() {
    let data = this.company == undefined ? { 'status': false} : { 'status': true};
    this.func.presentLoading('Setting Company Name...')
    setTimeout(()=>{
      this.func.dismissLoading();
      if(data['status'] == true){
        localStorage.setItem('company_id', this.company)
      }
      if(this.refresh){
        this.navCtrl.setRoot(HomePage)
      }else{
        this.viewCtrl.dismiss(data);
      }
    }, 1000)

  }

}
