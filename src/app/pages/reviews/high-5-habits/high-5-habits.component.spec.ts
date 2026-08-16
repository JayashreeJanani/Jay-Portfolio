import { ComponentFixture, TestBed } from '@angular/core/testing';

import { High5HabitsComponent } from './high-5-habits.component';

describe('High5HabitsComponent', () => {
  let component: High5HabitsComponent;
  let fixture: ComponentFixture<High5HabitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [High5HabitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(High5HabitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
