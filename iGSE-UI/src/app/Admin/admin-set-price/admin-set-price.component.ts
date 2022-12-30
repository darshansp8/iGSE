import { Component } from '@angular/core';
import { faCheck, faPen, faPenAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-set-price',
  templateUrl: './admin-set-price.component.html',
  styleUrls: ['./admin-set-price.component.css']
})
export class AdminSetPriceComponent {
  faPen = faPen;
  faPenAlt = faPenAlt;
  faCheck = faCheck

  rateList = [
    {
      name: 'Electricity(Day)',
      amount: 0.34
    },
    {
      name: 'Electricity(Night)',
      amount: 0.20
    },
    {
      name: 'Gas',
      amount: 0.10
    },
    {
      name: 'Standing Day Charge',
      amount: 0.74
    }
  ]

  disabled = true;

  toggleInput(){
    this.disabled = !this.disabled;
  }
}
