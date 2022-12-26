import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTopupComponent } from './user-topup.component';

describe('UserTopupComponent', () => {
  let component: UserTopupComponent;
  let fixture: ComponentFixture<UserTopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
