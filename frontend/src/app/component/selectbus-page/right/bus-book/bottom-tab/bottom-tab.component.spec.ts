import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomTabComponent } from './bottom-tab.component';

describe('BottomTabComponent', () => {
  let component: BottomTabComponent;
  let fixture: ComponentFixture<BottomTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BottomTabComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BottomTabComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
