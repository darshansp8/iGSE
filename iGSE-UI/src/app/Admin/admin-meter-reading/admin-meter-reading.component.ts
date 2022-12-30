import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-meter-reading',
  templateUrl: './admin-meter-reading.component.html',
  styleUrls: ['./admin-meter-reading.component.css']
})
export class AdminMeterReadingComponent {
  customerBillList = [
    {
      index: 1,
      customerId: 'text@xyz.com',
      electricityDayReading: 123,
      electricityNightReading: 245,
      gasReading: 560,
      amount: 180
    },
    {
      index: 2,
      customerId: 'text-1@abc.com',
      electricityDayReading: 150,
      electricityNightReading: 267,
      gasReading: 616,
      amount: 200
    },
    {
      index: 3,
      customerId: 'text-2@lmn.com',
      electricityDayReading: 110,
      electricityNightReading: 216,
      gasReading: 527,
      amount: 154
    }
  ]
}
