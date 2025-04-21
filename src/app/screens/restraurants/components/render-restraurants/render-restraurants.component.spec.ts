import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderRestraurantsComponent } from './render-restraurants.component';

describe('RenderRestraurantsComponent', () => {
  let component: RenderRestraurantsComponent;
  let fixture: ComponentFixture<RenderRestraurantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RenderRestraurantsComponent]
    });
    fixture = TestBed.createComponent(RenderRestraurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
