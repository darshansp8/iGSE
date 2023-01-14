import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './Users/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  loginUrl = 'http://127.0.0.1:5000/auth/login'
  registerUrl = "http://127.0.0.1:5000/auth/signup"
  getTariffUrl = "http://127.0.0.1:5000/tariff"
  getMeterReadingUrl = "http://127.0.0.1:5000/readings"

  constructor(private http: HttpClient) { }

  register(user: User){
    return this.http.post<any>(this.registerUrl, user)
  }

  login(user: User){
    return this.http.post<any>(this.loginUrl, user)
  }

  getTariff(){
    return this.http.get<any>(this.getTariffUrl)
  }

  getReadings(){
    return this.http.get<any>(this.getMeterReadingUrl)
  }

  getUsername(){
    return localStorage.getItem('username')
  }

  getUserType(){
    return localStorage.getItem('type')
  }
}
