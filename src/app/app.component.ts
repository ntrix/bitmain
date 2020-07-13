import { Router } from '@angular/router';
import { FbService } from './services/fb.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Bitmain';

  darkModeActive: boolean = false;
  showMenu: boolean = false;

  userEmail = '';

  constructor(public fb: FbService, public router: Router) {}

  loggedIn = this.fb.isAuth();

  ngOnInit() {
    this.fb.auth.userData().subscribe((user) => {
      this.userEmail = user.email;
    });
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  modeToggleSwitch() {
    this.darkModeActive = !this.darkModeActive;
  }

  logout() {
    this.toggleMenu();
    this.router.navigateByUrl('/login');
    this.fb.auth.signout();
  }
}
