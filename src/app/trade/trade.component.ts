import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.scss'],
})
export class TradeComponent implements OnInit {
  hidden: boolean = false;
  brews = [];
  unitSymbol: string = 'USD';
  name: string;

  constructor(private _http: HttpService) {}

  ngOnInit() {
    this._http.getBeer().subscribe((data) => {
      let maxSymbol = 9;
      Object.values(data).forEach((obj) => {
        if (maxSymbol > 0 && obj[0].slice(4, 7) == this.unitSymbol) {
          obj[8] = ~~obj[8];
          this.brews.push(obj);
          maxSymbol--;
        }
      });
      if (this.brews) this.hidden = true;
    });
  }
  vol(br) {
    return (br[7] * br[8]) | 0;
  }
}
