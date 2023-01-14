import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faCamera, faClose, faWallet } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // @ViewChild('UserData') registerFormData: NgForm
  faClose = faClose
  faCamera = faCamera
  faWallet = faWallet

  errorCode: number
  usernameExists = false
  voucherUsed = false
  voucherInvalid = false

  registerForm: FormGroup;

  constructor(private authenticate: AuthenticationService,
              private router: Router) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'customer_id': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(8)]),
      'address': new FormControl('', Validators.required),
      'propertyType':new FormControl('', Validators.required),
      'bedroomNum': new FormControl('', Validators.required),
      'termsAndConditions': new FormControl(false, Validators.requiredTrue),
      'evcCode': new FormControl('', Validators.required)
    });
  }

  // Use router to route to homepage after registration.

  onSubmit(){
    // console.log(this.registerForm.value);
    this.authenticate.register(this.registerForm.value)
      .subscribe((responseData) => {
        console.log("Success", responseData);
        if (responseData.data != ''){
          localStorage.setItem('token', responseData.data.access_token)
          localStorage.setItem('username', responseData.data.customerId)
          localStorage.setItem('userType', responseData.data.type)
          this.router.navigate(['/user'])
        }
        if (responseData.errorMsg != ''){
          console.log(responseData.errorMessage.message)
        }
      },
      (error)=> {
        console.log('Error!', error.error.errorMessage.errorCode)
        this.errorCode = error.error.errorMessage.errorCode
        if(this.errorCode === 0){
          this.usernameExists = true

        }
        if(this.errorCode === 1){
          this.voucherUsed = true
          this.voucherInvalid = false
        }
        if(this.errorCode === 2){
          this.voucherInvalid = true
          this.voucherUsed = false
        }
      })
  }

}
