import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './Users/user.model';
import { MeterReading } from './Models/meter-reading.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  loginUrl = 'http://127.0.0.1:5000/auth/login'
  registerUrl = "http://127.0.0.1:5000/auth/signup"
  getTariffUrl = "http://localhost:5000/tariff/"
  getMeterReadingUrl = "http://localhost:5000/readings/"
  getMeterReadingByIdUrl = "http://localhost:5000/readings/getReadingById"
  addMeterReadingUrl = "http://localhost:5000/readings/"
  userDetailsUrl = "http://127.0.0.1:5000/users/getUserById"

  constructor(private http: HttpClient) { }

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

  getUsername(){
    return localStorage.getItem('username')
  }

  getUserType(){
    return localStorage.getItem('type')
  }

  getToken(){
    return localStorage.getItem('token')
  }
}
