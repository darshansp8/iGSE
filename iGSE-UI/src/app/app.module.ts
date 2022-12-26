import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './Users/users/users.component';
import { UserAuthenticationComponent } from './Users/user-authentication/user-authentication.component';
import { UserMeterReadingComponent } from './Users/user-meter-reading/user-meter-reading.component';
import { UserBillComponent } from './Users/user-bill/user-bill.component';
import { UserTopupComponent } from './Users/user-topup/user-topup.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { AdminMeterReadingComponent } from './Admin/admin-meter-reading/admin-meter-reading.component';
import { AdminStatisticsComponent } from './Admin/admin-statistics/admin-statistics.component';
import { AdminSetPriceComponent } from './Admin/admin-set-price/admin-set-price.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserAuthenticationComponent,
    UserMeterReadingComponent,
    UserBillComponent,
    UserTopupComponent,
    AdminComponent,
    AdminMeterReadingComponent,
    AdminStatisticsComponent,
    AdminSetPriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
