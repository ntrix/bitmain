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
      Object.values(data).forEach((obj) => {
        obj[8] = ~~obj[8];
        if (obj[0].slice(4, 7) == this.item) this.brews.push(obj);
      });
      console.log(this.brews);
    });
  }
}
