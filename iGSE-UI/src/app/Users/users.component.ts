import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-usersDashboard',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersDashboardComponent implements OnInit{
  customerId: string
  username: string
  constructor(private authService: AuthenticationService){}

  ngOnInit(): void {
    this.customerId = this.authService.getUsername()
    this.username = this.customerId.split('@', 1)[0]
    console.log(this.username)
  }
}
