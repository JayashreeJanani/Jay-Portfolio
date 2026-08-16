import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheOtherSideOfMidnightComponent } from './the-other-side-of-midnight.component';

describe('TheOtherSideOfMidnightComponent', () => {
  let component: TheOtherSideOfMidnightComponent;
  let fixture: ComponentFixture<TheOtherSideOfMidnightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheOtherSideOfMidnightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheOtherSideOfMidnightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
