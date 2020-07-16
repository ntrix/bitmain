import { CryptoService } from './../../services/crypto.service';
import { Component, OnInit } from '@angular/core';
import { DUMMY_DATA } from '../../constant'
@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss'],
})
export class BarchartComponent implements OnInit {
  isLoaded = false;
  unitSymbol: string = 'USD';

  title = 'BTC Daily';
  type = 'CandlestickChart';
  options = {
    legend: 'none',
    // bar: { groupWidth: '80%' },
    backgroundColor: 'none', // { strokeWidth: 0, fill: '#adeae6' },
    vAxis: {
      gridlines: {
        color: 'transparent',
      },
    },
    chartArea: { left: 0, top: 5, width: '100%', height: '97%' },
    candlestick: {
      fallingColor: { strokeWidth: 0, fill: '#a44' }, // red
      risingColor: { strokeWidth: 0, fill: '#096' }, // green
    },
  };
  width = 560;
  height = 250;

  d: any;
  data = DUMMY_DATA;

  private sub: any;

  constructor(private _http: CryptoService) {}

  ngOnInit() {
    this.isLoaded = false;
    this.sub = this._http.getBTCHist().subscribe(async (dat) => {
      for (let count = 0; count < 43; count++) {
        let obj = await dat[count];
        this.data[42 - count] = [' ', obj[3], obj[1], obj[2], obj[4]];
      }
      this.isLoaded = await !!dat;
    });
    setTimeout(() => (this.isLoaded = true), 5000);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
