import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSeatsComponent } from './view-seats.component';

describe('ViewSeats', () => {
  let component: ViewSeatsComponent;
  let fixture: ComponentFixture<ViewSeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewSeatsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewSeatsComponent );
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
