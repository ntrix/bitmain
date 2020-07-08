import { CryptoService } from '../home/services/crypto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss'],
})
export class CryptoComponent implements OnInit {
  hidden: boolean = false;
  brews = [];
  unitSymbol: string = 'USD';
  constructor(private _http: CryptoService) {}

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
