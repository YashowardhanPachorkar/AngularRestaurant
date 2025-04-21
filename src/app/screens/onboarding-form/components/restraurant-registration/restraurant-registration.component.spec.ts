import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestraurantRegistrationComponent } from './restraurant-registration.component';

describe('RestraurantRegistrationComponent', () => {
  let component: RestraurantRegistrationComponent;
  let fixture: ComponentFixture<RestraurantRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestraurantRegistrationComponent]
    });
    fixture = TestBed.createComponent(RestraurantRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
