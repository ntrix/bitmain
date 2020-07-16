import { FxService } from '../services/fx.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.scss'],
})
export class TradeComponent implements OnInit {
  hidden = false;
  key = ["GBP", "USD", "PLN", "CZK", "CHF", "AUD", "NZD", "CHF", "JPY", "CAD", "SGD", "VND"];
  val = [];
  reversedVal = [];

  private sub: any;

  constructor(private _http: FxService) {}

  ngOnInit() {
    this.sub = this._http.getInfos().subscribe(async (data) => {
      const {rates} = await Object.values(data)[0];
      this.key.forEach((currency) => {
        this.val.push(rates[currency]);
        this.reversedVal.push((1/rates[currency]).toFixed(4));
      });
      if (data) this.hidden = true;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
