import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { OrdersModule } from './orders/orders.module';
import { SiteFrameworkModule } from './site-framework/site-framework.module';
import { UserModule } from './user/user.module';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrdersModule,
    HttpClientModule,
    SiteFrameworkModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
