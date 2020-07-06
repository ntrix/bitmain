import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  bfxURL: string = 'https://api-pub.bitfinex.com/v2/tickers?symbols=ALL';
  proxyURL: string = 'https://cors-anywhere.herokuapp.com/';

  constructor(private http: HttpClient) {}

  getBeer() {
    return this.http.get(this.proxyURL + this.bfxURL);
  }
}
