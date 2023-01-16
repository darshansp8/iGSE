import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { MeterReading } from 'src/app/Models/meter-reading.model';

@Component({
  selector: 'app-user-bill',
  templateUrl: './user-bill.component.html',
  styleUrls: ['./user-bill.component.css']
})
export class UserBillComponent implements OnInit{

  customerReading: MeterReading[] = []
  customerReadingList: MeterReading[] = []
  constructor(private authService: AuthenticationService){}

  ngOnInit(): void {
    this.authService.getAllReadingById()
      .subscribe((responseData) => {
        console.log(responseData)
        this.customerReading = Array.from(Object.keys(responseData), k=>responseData[k])
        console.log("Hello", this.customerReading)
        this.customerReading.forEach(element => {
          this.customerReadingList.push(element)
        });
      })
  }
}
