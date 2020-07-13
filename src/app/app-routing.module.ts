import { SignupComponent } from './signup/signup.component';
import { TradeComponent } from './trade/trade.component';
import { CryptoComponent } from './crypto/crypto.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Add this
  { path: 'crypto', component: CryptoComponent }, // Add this
  { path: 'trade', component: TradeComponent }, // Add this
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
