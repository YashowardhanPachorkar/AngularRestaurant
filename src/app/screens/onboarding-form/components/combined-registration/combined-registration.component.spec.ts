import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinedRegistrationComponent } from './combined-registration.component';

describe('CombinedRegistrationComponent', () => {
  let component: CombinedRegistrationComponent;
  let fixture: ComponentFixture<CombinedRegistrationComponent>;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CombinedRegistrationComponent]
    });
    fixture = TestBed.createComponent(CombinedRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
