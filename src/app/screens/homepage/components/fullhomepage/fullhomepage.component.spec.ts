import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullhomepageComponent } from './fullhomepage.component';

describe('FullhomepageComponent', () => {
  let component: FullhomepageComponent;
  let fixture: ComponentFixture<FullhomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullhomepageComponent]
    });
    fixture = TestBed.createComponent(FullhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
