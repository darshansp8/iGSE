import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDashboardComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersDashboardComponent;
  let fixture: ComponentFixture<UsersDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
