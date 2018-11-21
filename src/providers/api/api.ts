import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  user_id;
  company_id;

  url = "http://www.progressive.nepgeeks.com/api/app/"
  getCompanies = this.url+ "getCompanies";
  ledgerSummaryReportApi = this.url+ 'ledgerSummaryReport';
  ledgerDetailApi = this.url+ 'ledgerDetail';
  stockSummaryReportApi = this.url + 'stockSummaryReport';
  stockDetailReportApi = this.url + 'stockSummaryDetail';
  dayBookReportApi = this.url + 'dayBookReport';
  
  constructor(public http: HttpClient) {
  }

  getUserId(){
    return localStorage.getItem('user_id');
  }
  getCompanyId(){
    return localStorage.getItem('company_id');
  }

  // return new Promise( resolve => {
  //   this.http.post(this.update_vehicle_damage_api, info, { headers: headers})
  //     .subscribe( data => {
  //         resolve(data['message']);
  //     });
  // });
  getUserCompanies(user_id){
    let p= new HttpParams().
    set("user_id", user_id);
    return this.http.get(this.getCompanies, {params: p});
  }


  ledgerSummaryReport(){
    let p= new HttpParams().
    set("user_id", this.getUserId()).
    set("company_id", this.getCompanyId());
    return this.http.get(this.ledgerSummaryReportApi, {params: p});
  }

  ledgerDetail(ledger_id, page){
    let p= new HttpParams().
    set("user_id", this.getUserId()).
    set("company_id", this.getCompanyId()).
    set("ledger_id", ledger_id).
    set('page', page);

    return new Promise(resolve => {
      this.http.get(this.ledgerDetailApi, {params: p})
        .subscribe(
          data => {
            resolve(data);
          },
          error => {
            resolve(error.statusText);
          }
        );
    });
  }

  stockDetailReport(stock_summary_id, stock_name, page){
    let p= new HttpParams().
    set("user_id", this.getUserId()).
    set("company_id", this.getCompanyId()).
    set('stock_summary_id', stock_summary_id).
    set("stock_name", stock_name).
    set('page', page);

    return new Promise(resolve => {
      this.http.get(this.stockDetailReportApi, {params: p})
        .subscribe(
          data => {
            resolve(data);
          },
          error => {
            resolve(error.statusText);
          }
        );
    });
  }


  stockSummaryReport(){
    let p= new HttpParams().
    set("user_id", this.getUserId()).
    set("company_id", this.getCompanyId());
    return new Promise(resolve => {
      this.http.get(this.stockSummaryReportApi, {params: p})
        .subscribe(
          data => {
            resolve(data);
          },
          error => {
            resolve(error.statusText);
          }
        );
    });
  }


  dayBookReport(page){
    let p= new HttpParams().
    set("user_id", this.getUserId()).
    set("company_id", this.getCompanyId()).
    set('page', page);
    return new Promise(resolve => {
      this.http.get(this.dayBookReportApi, {params: p})
        .subscribe(
          data => {
            resolve(data);
          },
          error => {
            resolve(error.statusText);
          }
        );
    });
  }

  // dayBookReportNext(page){
  //   let p= new HttpParams().
  //   set("user_id", this.getUserId()).
  //   set("company_id", this.getCompanyId()).
  //   set('page', page);
  //   return new Promise(resolve => {
  //     this.http.get(this.dayBookReportApi, {params: p})
  //       .subscribe(
  //         data => {
  //           resolve(data);
  //         },
  //         error => {
  //           resolve(error.statusText);
  //         }
  //       );
  //   });
  // }


}
