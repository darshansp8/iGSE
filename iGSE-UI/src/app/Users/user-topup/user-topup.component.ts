import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faCamera, faClose, faWallet } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-user-topup',
  templateUrl: './user-topup.component.html',
  styleUrls: ['./user-topup.component.css']
})
export class UserTopupComponent implements OnInit{
  isShow = false;
  faClose = faClose
  faCamera = faCamera
  faWallet = faWallet

  topupForm: FormGroup

  constructor(private authService: AuthenticationService){}

  ngOnInit(): void {
    this.topupForm = new FormGroup({
      'evcCode': new FormControl('', Validators.required)
    })
  }

  onSubmit(){
    this.authService.updateUserBalance(this.topupForm.value)
      .subscribe((responseData)=> {
        console.log(responseData)
      })
  }

  showCamera(){
    this.isShow = true;
  }

  hideCamera(){
    this.isShow = false;
  }
}
