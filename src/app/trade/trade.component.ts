import { FxService } from '../services/fx.service';
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

  private sub: any;

  constructor(private _http: FxService) {}

  ngOnInit() {
    this.sub = this._http.getBeer().subscribe(async (data) => {
      let temp = await Object.values(data)[0];
      this.key = Object.keys(temp);
      Object.values(temp).forEach((obj) => {
        this.val.push(Object.values(obj)[0]);
      });
      if (data) this.hidden = true;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
