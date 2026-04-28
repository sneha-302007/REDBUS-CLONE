import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDrawerComponent } from './form-drawer.component';

describe('FormDrawer', () => {
  let component: FormDrawerComponent;
  let fixture: ComponentFixture<FormDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormDrawerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormDrawerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
