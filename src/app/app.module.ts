import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CardsComponent } from './cards/cards.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BuyComponent } from './buy/buy.component';
import { HomeComponent } from './home/home.component';
import { BuyService } from './buy.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    CheckoutComponent,
    CardsComponent,
    PageNotFoundComponent,
    BuyComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [DataService,BuyService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
