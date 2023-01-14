import { Component, OnInit } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Tariff } from 'src/app/Admin/admin-set-price/tariff.model';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  isShow = false;
  faClose = faClose
  rateList: Tariff[] = []
  public tariff: Tariff[] = []


  constructor(private authService: AuthenticationService){}

  ngOnInit(){
    this.authService.getTariff()
    .subscribe(
      responseData => {
        console.log(responseData)
        this.tariff = Array.from(Object.keys(responseData), k=>responseData[k])
        this.tariff.forEach(element => {
          this.rateList.push(element)
        });
        console.log(this.rateList)
      }
    )
  }

  toggleCamera(){
    this.isShow = !this.isShow;
  }

}
