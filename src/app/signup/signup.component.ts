import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FbService } from './../services/fb.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  errorMessage;

  constructor(public fb: FbService, public router: Router) {}

  ngOnInit(): void {}

  signup(e) {
    this.fb
      .signup(e.target.email.value, e.target.password.value)
      .pipe(first())
      .subscribe(
        () => {
          this.router.navigateByUrl('');
        },
        (err) => {
          this.errorMessage = err;
          setTimeout(() => (this.errorMessage = ''), 2000);
        }
      );
  }
}
