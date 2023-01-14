import { Component, OnInit } from '@angular/core';
import { faCheck, faPen, faPenAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from 'src/app/authentication.service';
import { Tariff } from './tariff.model';

@Component({
  selector: 'app-admin-set-price',
  templateUrl: './admin-set-price.component.html',
  styleUrls: ['./admin-set-price.component.css']
})
export class AdminSetPriceComponent implements OnInit{
  faPen = faPen;
  faPenAlt = faPenAlt;
  faCheck = faCheck

  rateList: Tariff[] = []

  // rateList = [
  //   {
  //     name: 'Electricity(Day)',
  //     amount: 0.34
  //   },
  //   {
  //     name: 'Electricity(Night)',
  //     amount: 0.20
  //   },
  //   {
  //     name: 'Gas',
  //     amount: 0.10
  //   },
  //   {
  //     name: 'Standing Day Charge',
  //     amount: 0.74
  //   }
  // ]

  public tariff: Tariff[] = []

  disabled = true;

  constructor(private authenticate: AuthenticationService){}

  ngOnInit(){
    this.authenticate.getTariff()
      .subscribe(
        responseData => {
          console.log(responseData)
          this.tariff = Array.from(Object.keys(responseData), k=>responseData[k])
          this.tariff.forEach(element => {
            this.rateList.push(element)
          });
          // console.log(this.rateList)
        }
      )
  }

  toggleInput(){
    this.disabled = !this.disabled;
  }
}
