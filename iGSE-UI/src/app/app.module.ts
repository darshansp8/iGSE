import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './Users/users/users.component';
import { UserMeterReadingComponent } from './Users/user-meter-reading/user-meter-reading.component';
import { UserBillComponent } from './Users/user-bill/user-bill.component';
import { UserTopupComponent } from './Users/user-topup/user-topup.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { AdminMeterReadingComponent } from './Admin/admin-meter-reading/admin-meter-reading.component';
import { AdminStatisticsComponent } from './Admin/admin-statistics/admin-statistics.component';
import { AdminSetPriceComponent } from './Admin/admin-set-price/admin-set-price.component';
import { LoginComponent } from './Authentication/login/login.component';
import { RegisterComponent } from './Authentication/register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersDashboardComponent } from './Users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersDashboardComponent,
    UserMeterReadingComponent,
    UserBillComponent,
    UserTopupComponent,
    AdminComponent,
    AdminMeterReadingComponent,
    AdminStatisticsComponent,
    AdminSetPriceComponent,
    LoginComponent,
    RegisterComponent,
    LandingPageComponent,
    SidebarComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxScannerQrcodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
