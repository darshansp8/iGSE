import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './Users/user.model';
import { MeterReading } from './Models/meter-reading.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  loginUrl = 'http://localhost:5000/auth/login'
  registerUrl = "http://localhost:5000/auth/signup"
  getTariffUrl = "http://localhost:5000/tariff/"
  getMeterReadingUrl = "http://localhost:5000/readings/"
  getMeterReadingByIdUrl = "http://localhost:5000/readings/getReadingById"
  getAllMeterReadingByIdUrl = "http://localhost:5000/readings/getAllReadingById"
  addMeterReadingUrl = "http://localhost:5000/readings/"
  userDetailsUrl = "http://localhost:5000/users/getUserById"
  updateBalanceUrl = "http://localhost:5000/users/updatebalance"

  constructor(private http: HttpClient,
              private router: Router) { }

  register(user: User){
    return this.http.post<any>(this.registerUrl, user)
  }

  login(user: User){
    return this.http.post<any>(this.loginUrl, user)
  }

  getUserDetails(){
    return this.http.get<any>(this.userDetailsUrl)
  }

  getTariff(){
    return this.http.get<any>(this.getTariffUrl)
  }


  addReading(reading: MeterReading){
    return this.http.post<any>(this.addMeterReadingUrl, reading)
  }

  getReadings(){
    return this.http.get<any>(this.getMeterReadingUrl)
  }

  getReadingById(){
    return this.http.get<any>(this.getMeterReadingByIdUrl)
  }

  getAllReadingById(){
    return this.http.get<any>(this.getAllMeterReadingByIdUrl)
  }


  updateUserBalance(currentBalance: number){
    return this.http.put<any>(this.updateBalanceUrl, currentBalance)
  }

  getUsername(){
    return localStorage.getItem('username')
  }

  getUserType(){
    return localStorage.getItem('type')
  }

  getToken(){
    return localStorage.getItem('token')
  }

  logoutUser(){
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    console.log("Token Deleted")
    this.router.navigate(['/'])

  }
}
