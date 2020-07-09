import { CryptoService } from './../../home/services/crypto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss'],
})
export class BarchartComponent implements OnInit {
  hidden = false;
  datas = [];
  unitSymbol: string = 'USD';

  constructor(private _http: CryptoService) {}

  ngOnInit() {
    this._http.getBTCHist().subscribe((data) => {
      let maxSymbol = 90;
      Object.values(data).forEach((obj) => {
        this.datas.push([obj[1], obj[2], obj[3], obj[4]]);
        maxSymbol--;
      });
      if (this.datas) this.hidden = true;
    });
    console.log(this.datas);
  }
}
