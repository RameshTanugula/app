import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) {}

  getMeasures(): Observable<any> {
    //Write code calling service to obtain food fact data
    let url = `http://localhost:3000/getdata`;
    return this.http.get(url);


  }
  saveMeasures(data: any): Observable<any> {
    //Write code calling service to obtain food fact data
    let url = `http://localhost:3000/save`;
    return this.http.post(url, {data});


  }
}
