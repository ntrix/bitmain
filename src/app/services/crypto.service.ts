import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  bfxURL: string = '/api/config';
  baseURL: string = 'https://amazin-api-server.herokuapp.com'

  // bfxURL: string = 'https://api-pub.bitfinex.com/v2/';
  // proxyURL: string = 'https://cors-anywhere.herokuapp.com/';
  constructor(private http: HttpClient) {}

  getCryptoAll() {
    return this.http.get(this.baseURL + this.bfxURL + '/crypto');
  }
  getBTCHist() {
    return this.http.get(
      this.baseURL + this.bfxURL + '/BTCHist?count=43'
    );
  }
}
//https://api-pub.bitfinex.com/v2/candles/trade:1m:tBTCUSD/hist?limit=19&sort=1
