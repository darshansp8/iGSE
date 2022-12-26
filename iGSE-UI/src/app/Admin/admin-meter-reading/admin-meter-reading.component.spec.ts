import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMeterReadingComponent } from './admin-meter-reading.component';

describe('AdminMeterReadingComponent', () => {
  let component: AdminMeterReadingComponent;
  let fixture: ComponentFixture<AdminMeterReadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMeterReadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMeterReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
