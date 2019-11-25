import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { App } from 'ionic-angular';

import { LoginPage } from '../../pages/login/login';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  url = "http://nepgeeks.com//api/app/"
  
  login_api = this.url+ 'user';

  constructor(public http: HttpClient, private app: App) {
    console.log('Hello AuthProvider Provider');
  }

  login(data){
  	let p= new HttpParams().
         set("email",data.email).
         set("password", data.password);

  	return this.http.get(this.login_api, {params: p});
  }



  logout(){
    if(localStorage.getItem('company_id')){
      let company_id = localStorage.getItem('company_id');
      localStorage.clear()
      localStorage.setItem('company_id', company_id)
    }else{
      localStorage.clear()
    }
    var nav = this.app.getRootNav();
    nav.setRoot(LoginPage);
  }

}
