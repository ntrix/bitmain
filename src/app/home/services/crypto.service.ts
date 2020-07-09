import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  bfxURL: string = 'https://api-pub.bitfinex.com/v2/';
  proxyURL: string = 'https://cors-anywhere.herokuapp.com/';

  constructor(private http: HttpClient) {}

  getCryptoAll() {
    return this.http.get(this.proxyURL + this.bfxURL + 'tickers?symbols=ALL');
  }
  getBTCHist() {
    return this.http.get(
      this.proxyURL + this.bfxURL + 'candles/trade:1D:tBTCUSD/hist?limit=10'
    );
  }
}
//https://api-pub.bitfinex.com/v2/candles/trade:1m:tBTCUSD/hist?limit=19&sort=1
