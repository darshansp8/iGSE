import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // @ViewChild('UserData') registerFormData: NgForm
  registerForm: FormGroup;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(8)]),
      'confirmPassword': new FormControl('', [Validators.required, Validators.minLength(8)]),
      'propertyType':new FormControl('', Validators.required),
      'numberOfBedrooms': new FormControl('', Validators.required),
      'termsAndConditions': new FormControl(false, Validators.requiredTrue)
    });
  }

  // Use router to route to homepage after registration.

  onSubmit(){
    console.log(this.registerForm);
    // this.registerForm.reset();
  }

  passwordMatcher(controlName: FormControl, compareControlName: FormControl): {[s:string]: boolean}{
    if(controlName.value === compareControlName){
      return {'mustMatch': true};
    }
    return null;
  }
}
