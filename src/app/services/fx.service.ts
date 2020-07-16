import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FxService {
  
  fxURL: string = '/api/config/rates'
  baseURL: string = 'https://amazin-api-server.herokuapp.com'
  // fxURL1: string = 'https://www.freeforexapi.com/api/live?pairs=EURUSD,GBPUSD,AUDUSD,NZDUSD,USDCHF,USDJPY,USDCAD,USDVND,USDSGD';
  // proxyURL1: string = 'https://cors-anywhere.herokuapp.com/';

  constructor(private http: HttpClient) {}

  getInfos() {
    const res = this.http.get(this.baseURL + this.fxURL);
    return res;
  }
}
