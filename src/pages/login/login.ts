import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
// import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { HomePage } from '../home/home';
import { SelectCompanyModalPage } from '../select-company-modal/select-company-modal';

import { AuthProvider } from '../../providers/auth/auth';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	email="patelab15@.com";
  password="123";
  error;

  loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  constructor(public modalCtrl: ModalController, 
              public navCtrl: NavController, 
              public auth:AuthProvider, 
              public navParams: NavParams, 
              public loadingCtrl: LoadingController
              ) {
    if(localStorage.getItem('user_id') && localStorage.getItem('company_id') && localStorage.getItem('email')){
      this.navCtrl.setRoot(HomePage)
    }
    // if(!localStorage.getItem('company_id')){
    //   this.auth.logout();
    // }
    this.error = this.navParams.get('error') ? this.navParams.get('error') : '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }



  login(){
    let data= {
      'email' : this.email,
      'password' : this.password
    };
    
    this.loading.present();

    this.auth.login(data)
    .subscribe(data => {
        this.loading.dismiss();
        if(data['status'] == 'success'){
          let user = data['message'][0];
          if(localStorage.getItem('company_id')){
            this.saveUser(user);
          }else{
            let SelectCompanyModal = this.modalCtrl.create(SelectCompanyModalPage, { user_id: user.user_id });
            SelectCompanyModal.onDidDismiss(data => {
              console.log(data);
              if(data['status'] == true){
                // localStorage.setItem('company_id', data['company_id']);
                this.saveUser(user);
              }else{
                this.error = 'Please select the company to proceed';
                this.navCtrl.setRoot(LoginPage, {error: data['message']});
              }
            });
            SelectCompanyModal.present();
          }
          this.navCtrl.setRoot(HomePage);
        }else{
          this.error = data['message'];
          this.navCtrl.setRoot(LoginPage, {error: data['message']});
        }
      })
  }


  saveUser(user){
    localStorage.setItem('user_id',user.user_id)
    localStorage.setItem('email', user.email)
  }

}
