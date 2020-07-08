import { FxService } from './../fx.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.scss'],
})
export class TradeComponent implements OnInit {
  hidden: boolean = false;
  key = [];
  val = [];
  unitSymbol: string = 'USD';
  name: string;

  constructor(private _http: FxService) {}

  ngOnInit() {
    this._http.getBeer().subscribe((data) => {
      console.log(data);
      let temp = Object.values(data)[0];
      this.key = Object.keys(temp);
      Object.values(temp).forEach((obj) => {
        this.val.push(Object.values(obj)[0]);
      });
    });
    if (this.val) this.hidden = true;
  }
}
