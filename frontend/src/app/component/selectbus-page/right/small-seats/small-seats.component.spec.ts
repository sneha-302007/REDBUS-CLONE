import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallSeatsComponent } from './small-seats.component';

describe('SmallSeatsComponent', () => {
  let component: SmallSeatsComponent;
  let fixture: ComponentFixture<SmallSeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmallSeatsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SmallSeatsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
