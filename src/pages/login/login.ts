import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';

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

	email="";
  password="";
  error;

  loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  constructor(public modalCtrl: ModalController, 
              public navCtrl: NavController, 
              public auth:AuthProvider, 
              public navParams: NavParams, 
              public loadingCtrl: LoadingController,
              ) {
    if(localStorage.getItem('user_id') && localStorage.getItem('company_id') && localStorage.getItem('email')){
      this.navCtrl.setRoot(HomePage)
    }
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
    .subscribe(
      data => {
        this.loading.dismiss();
        if(data['status'] == 'success'){
          let user = data['message'][0];
            let SelectCompanyModal = this.modalCtrl.create(SelectCompanyModalPage, { user_id: user.user_id });
            SelectCompanyModal.onDidDismiss(data => {
              console.log(data);
              if(data['status'] == true){
                this.saveUser(user);
              }else{
                this.error = 'Please select the company to proceed';
                this.navCtrl.setRoot(LoginPage, {error: data['message']});
              }
            });
            SelectCompanyModal.present();
          // }
          this.navCtrl.setRoot(HomePage);
        }else{
          this.error = data['message'];
          this.navCtrl.setRoot(LoginPage, {error: data['message']});
        }
      },
      error => {
        this.loading.dismiss();
        console.log(error);
        alert(JSON.stringify(error))
        this.error = 'Unable to login.'
      }
    )
  }


  saveUser(user){
    localStorage.setItem('user_id',user.user_id)
    localStorage.setItem('email', user.email)
  }

}
