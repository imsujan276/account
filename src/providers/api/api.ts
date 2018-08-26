import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  url = "http://www.progressive.nepgeeks.com/api/app/"
  user_id = localStorage.getItem('user_id');
  company_id = localStorage.getItem('company_id');

  getCompanies = this.url+ "getCompanies";
  ledgerSummaryReportApi = this.url+ 'ledgerSummaryReport';

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  getUserCompanies(user_id){
    let p= new HttpParams().
    set("user_id", user_id);
    return this.http.get(this.getCompanies, {params: p});
  }


  ledgerSummaryReport(){
    let p= new HttpParams().
    set("user_id", this.user_id).
    set("company_id", this.company_id);

    return this.http.get(this.ledgerSummaryReportApi, {params: p});
  }

}
