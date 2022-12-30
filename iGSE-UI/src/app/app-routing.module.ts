import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AdminMeterReadingComponent } from './Admin/admin-meter-reading/admin-meter-reading.component';
import { AdminSetPriceComponent } from './Admin/admin-set-price/admin-set-price.component';
import { AdminStatisticsComponent } from './Admin/admin-statistics/admin-statistics.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './Authentication/login/login.component';
import { RegisterComponent } from './Authentication/register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserBillComponent } from './Users/user-bill/user-bill.component';
import { UserMeterReadingComponent } from './Users/user-meter-reading/user-meter-reading.component';
import { UserTopupComponent } from './Users/user-topup/user-topup.component';
import { UsersDashboardComponent } from './Users/users.component';
import { UsersComponent } from './Users/users/users.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'user', component: UsersDashboardComponent, children:[
      { path: 'user-dashboard', component: UsersComponent },
      { path: 'viewbill', component: UserBillComponent },
      { path: 'meterreading', component: UserMeterReadingComponent },
      { path: 'topup', component: UserTopupComponent }
  ]},
  { path: 'admin', component: AdminComponent, children:[
      { path: 'admin-dashboard', component: AdminDashboardComponent },
      { path: 'meterReading', component: AdminMeterReadingComponent },
      { path: 'setPrice', component: AdminSetPriceComponent },
      { path: 'statistics', component: AdminStatisticsComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
