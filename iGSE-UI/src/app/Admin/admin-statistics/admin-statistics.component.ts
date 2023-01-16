import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication.service';
import { MeterReading } from 'src/app/Models/meter-reading.model';

@Component({
  selector: 'app-admin-statistics',
  templateUrl: './admin-statistics.component.html',
  styleUrls: ['./admin-statistics.component.css']
})
export class AdminStatisticsComponent implements OnInit{

  customerReadingList: MeterReading[] = []
  customerReading: MeterReading[] = []
  reading: MeterReading[] = []
  view: any[] = [700,370]
  colorScheme = {
    domain: ['#2ef3e3', '#3de9ba', '#54ca3e']
  };
  showXAxis = true;
  showYAxis = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Customer';
  showYAxisLabel = true;
  yAxisLabel = 'MeterReading';
  timeline = true;


  constructor(private authService: AuthenticationService) { Object.assign({}, this.reading) }

  ngOnInit(): void {
    this.authService.getReadings()
      .subscribe((responseData)=> {
        console.log(responseData)
        this.customerReading = Array.from(Object.keys(responseData), k=> responseData[k])
        this.customerReading.forEach(element => {
          this.customerReadingList.push(element)
          this.reading.push(element)
        })
        console.log(this.customerReadingList)
      })
  }
}
