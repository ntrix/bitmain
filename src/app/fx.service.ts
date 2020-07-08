import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FxService {
  fxURL: string =
    'https://www.freeforexapi.com/api/live?pairs=EURUSD,GBPUSD,AUDUSD,NZDUSD,USDCHF,USDJPY,USDCAD,USDVND,USDSGD';
  proxyURL: string = 'https://cors-anywhere.herokuapp.com/';

  constructor(private http: HttpClient) {}

  getBeer() {
    return this.http.get(this.proxyURL + this.fxURL);
  }
}
