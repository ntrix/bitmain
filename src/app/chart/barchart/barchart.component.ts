import { CryptoService } from './../../home/services/crypto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss'],
})
export class BarchartComponent implements OnInit {
  hidden = false;
  unitSymbol: string = 'USD';

  title = 'BTC Daily';
  type = 'CandlestickChart';
  options = {
    legend: 'none',
    // bar: { groupWidth: '60%' }, // Remove space between bars.
    candlestick: {
      fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
      risingColor: { strokeWidth: 0, fill: '#0f9d58' }, // green
    },
  };
  width = 800;
  height = 400;

  d: any;
  datas = [];
  dummy = [
    ['day', 9447, 9407, 9451, 9380],
    ['day', 9267, 9447, 9497, 9256],
    ['day', 9361, 9267, 9389, 9211],
    ['day', 9089, 9361, 9389, 9075],
    ['day', 9146, 9084, 9152, 8918],
    ['day', 9073, 9147, 9204, 9060],
    ['day', 9100, 9073, 9135, 9056],
    ['day', 9239, 9100, 9266, 8950],
    ['day', 9150, 9239, 9298, 9109],
    ['day', 9194, 9150, 9206, 9077],
  ];

  constructor(private _http: CryptoService) {}

  ngOnInit() {
    this.datas = [...this.dummy];
    this._http.getBTCHist().subscribe((dat) => {
      console.log('dat', dat);
      for (let count = 0; count < 9; count++) {
        let obj = dat[count];
        console.log('obj', obj);
        this.datas[count] = ['ABC', obj[3], obj[1], obj[2], obj[4]];
        console.log('datas[count]', this.datas[count]);
      }
      if (this.datas) {
        this.hidden = true;
        console.log('datas', this.datas);
      }
    });
    this.d = new google.visualization.DataTable(this.datas, true);
  }
}
