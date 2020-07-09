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
    [' ', 9451, 9447, 9399, 9374],
    [' ', 9497, 9267, 9447, 9256],
    [' ', 9389, 9361, 9267, 9211],
    [' ', 9389, 9089, 9361, 9075],
    [' ', 9152, 9146, 9084, 8918],
    [' ', 9204, 9073, 9147, 9060],
    [' ', 9135, 9100, 9073, 9056],
    [' ', 9266, 9239, 9100, 8950],
    [' ', 9298, 9150, 9239, 9109],
    [' ', 9206, 9194, 9150, 9077],
    [' ', 9244, 9125, 9194, 9018],
    [' ', 9193, 9014, 9125, 8946],
    [' ', 9202, 9173, 9015, 8855],
    [' ', 9299, 9257, 9173, 9054],
    [' ', 9349, 9305, 9257, 9011],
    [' ', 9684, 9635, 9312, 9212],
    [' ', 9724, 9697, 9635, 9589],
    [' ', 9795, 9299, 9697, 9285],
    [' ', 9431, 9374, 9301, 9292],
    [' ', 9406, 9313, 9371, 9178],
    [' ', 9444, 9400, 9315, 9237],
    [' ', 9496, 9473, 9400, 9285],
    [' ', 9566, 9534, 9473, 9260],
    [' ', 9590, 9434, 9534, 9388],
    [' ', 9530, 9343, 9435, 8914],
    [' ', 9486, 9480, 9344, 9262],
    [' ', 9498, 9468, 9480, 9363],
    [' ', 9544, 9277, 9468, 9246],
  ];

  constructor(private _http: CryptoService) {}

  ngOnInit() {
    this.datas = [...this.dummy];
    this._http.getBTCHist().subscribe((dat) => {
      for (let count = 0; count < 28; count++) {
        let obj = dat[count];
        this.datas[count] = [' ', obj[3], obj[1], obj[2], obj[4]];
      }
      if (this.datas) {
        this.hidden = true;
      }
    });
    new google.visualization.DataTable(this.datas, true);
  }
}
