import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
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

  company;
  companies;
  user_id;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public viewCtrl: ViewController,
              public api: ApiProvider,
              ) {
    this.user_id = this.navParams.get('user_id') ? this.navParams.get('user_id') : localStorage.getItem('user_id');
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
    if(data['status'] == true){
      localStorage.setItem('company_id', this.company)
    }
    this.viewCtrl.dismiss(data);
  }

}
