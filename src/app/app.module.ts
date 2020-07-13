import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CryptoComponent } from './crypto/crypto.component';
import { FormsModule } from '@angular/forms';
import { TradeComponent } from './trade/trade.component';
import { LoginComponent } from './login/login.component';
import { BarchartComponent } from './chart/barchart/barchart.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { LoadingComponent } from './shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CryptoComponent,
    TradeComponent,
    LoginComponent,
    BarchartComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GoogleChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
