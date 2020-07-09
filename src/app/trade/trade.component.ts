import { FxService } from '../home/services/fx.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.scss'],
})
export class TradeComponent implements OnInit {
  hidden = false;
  key = [];
  val = [];

  constructor(private _http: FxService) {}

  ngOnInit() {
    this._http.getBeer().subscribe((data) => {
      let temp = Object.values(data)[0];
      this.key = Object.keys(temp);
      Object.values(temp).forEach((obj) => {
        this.val.push(Object.values(obj)[0]);
      });
      if (data) this.hidden = true;
    });
  }
}
