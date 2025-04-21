import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerRegistrationComponent } from './owner-registration.component';

describe('OwnerRegistrationComponent', () => {
  let component: OwnerRegistrationComponent;
  let fixture: ComponentFixture<OwnerRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerRegistrationComponent]
    });
    fixture = TestBed.createComponent(OwnerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
