import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authenticate: AuthenticationService,
    private router: Router) {}

  ngOnInit(){
    this.loginForm = new FormGroup({
      'customer_id': new FormControl('', Validators.required),
      'password': new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

  onSubmit(){
    this.authenticate.login(this.loginForm.value)
      .subscribe((responseData)=>{
        console.log(responseData)
        localStorage.setItem('token', responseData.access_token)
        localStorage.setItem('username', this.loginForm.value.customer_id)
        this.router.navigate(['/user'])
      })
  }
}
