import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMeterReadingComponent } from './user-meter-reading.component';

describe('UserMeterReadingComponent', () => {
  let component: UserMeterReadingComponent;
  let fixture: ComponentFixture<UserMeterReadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMeterReadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMeterReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
