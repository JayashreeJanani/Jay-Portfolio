import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomicHabitsComponent } from './atomic-habits.component';

describe('AtomicHabitsComponent', () => {
  let component: AtomicHabitsComponent;
  let fixture: ComponentFixture<AtomicHabitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomicHabitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomicHabitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
