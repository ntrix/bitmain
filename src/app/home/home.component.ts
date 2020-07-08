import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  clickCounter: number = 0;
  name: string = '';

  constructor() {}

  ngOnInit() {}

  // countClick() {
  //   this.clickCounter += 1;
  // }

  // setClasses = () =>
  //   this.clickCounter <= 4
  //     ? { active: false, notactive: true }
  //     : { active: true, notactive: false };
}
