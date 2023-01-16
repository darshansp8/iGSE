import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-usersDashboard',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersDashboardComponent implements OnInit{
  customerId: string
  username: string
  balance: number
  faHamburger = faBars
  constructor(private authService: AuthenticationService){}

  ngOnInit(): void {
    this.customerId = this.authService.getUsername()
    this.username = this.customerId.split('@', 1)[0]
    console.log(this.username)

    this.authService.getUserDetails()
      .subscribe((responseData) => {
        console.log(responseData)
        this.balance = responseData.balance
      })
  }
}
