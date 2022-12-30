import { Component } from '@angular/core';
import { faCamera, faClose, faWallet } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-topup',
  templateUrl: './user-topup.component.html',
  styleUrls: ['./user-topup.component.css']
})
export class UserTopupComponent {
  isShow = false;
  faClose = faClose
  faCamera = faCamera
  faWallet = faWallet

  showCamera(){
    this.isShow = true;
  }

  hideCamera(){
    this.isShow = false;
  }
}
