import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) {}
baseUrl = `http://localhost:3000/`
  getMeasures(): Observable<any> {
    let url = this.baseUrl +`getdata`;
    return this.http.get(url);


  }
  saveMeasures(saveData: any): Observable<any> {
    let url = this.baseUrl+`save`;
    return this.http.post(url, {saveData});
  }
  login(loginData: any): Observable<any> {
    let url = this.baseUrl + `login`;
    return this.http.post(url, {loginData});
  }
}
