import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/authentication.service';
import { MeterReading } from 'src/app/Models/meter-reading.model';

@Component({
  selector: 'app-user-meter-reading',
  templateUrl: './user-meter-reading.component.html',
  styleUrls: ['./user-meter-reading.component.css']
})
export class UserMeterReadingComponent implements OnInit{

  previousMeterReading: MeterReading = {} as any;

  readingForm: FormGroup;

  constructor(private authService: AuthenticationService){}

  ngOnInit(): void {
    this.authService.getReadingById()
      .subscribe((responseData)=> {
        if (responseData.readingId != null){
          this.previousMeterReading = responseData
          console.log(this.previousMeterReading)
        }
        else{
          this.previousMeterReading.elecReadingDay = 0;
          this.previousMeterReading.elecReadingNight = 0;
          this.previousMeterReading.gasReading = 0;
        } 
      },
      (error)=>{
        console.log('Error!', error)
      });

    this.readingForm = new FormGroup({
      'submissionDate': new FormControl('', Validators.required),
      'elecReadingDay': new FormControl('', Validators.required),
      'elecReadingNight': new FormControl('', Validators.required),
      'gasReading': new FormControl('', Validators.required)
    });  
  }

  onSubmit(){
    this.authService.addReading(this.readingForm.value)
      .subscribe((responseData) => {
        console.log(responseData)
      })
  }

}
