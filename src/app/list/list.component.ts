import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  brews = [];
  item: string = 'USD';
  constructor(private _http: HttpService) {}

  ngOnInit() {
    this._http.getBeer().subscribe((data) => {
      let maxSymbol = 9;
      Object.values(data).forEach((obj) => {
        if (maxSymbol > 0 && obj[0].slice(4, 7) == this.item) {
          obj[8] = ~~obj[8];
          this.brews.push(obj);
          maxSymbol--;
        }
      });
      // console.log(this.brews);
    });
  }
  vol(br) {
    return (br[7] * br[8]) | 0;
  }
}
