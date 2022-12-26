import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSetPriceComponent } from './admin-set-price.component';

describe('AdminSetPriceComponent', () => {
  let component: AdminSetPriceComponent;
  let fixture: ComponentFixture<AdminSetPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSetPriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSetPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
