import { Component } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  isShow = false;
  faClose = faClose

  toggleCamera(){
    this.isShow = !this.isShow;
  }

}
