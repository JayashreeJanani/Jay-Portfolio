import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SherlockHolmesComponent } from './sherlock-holmes.component';

describe('SherlockHolmesComponent', () => {
  let component: SherlockHolmesComponent;
  let fixture: ComponentFixture<SherlockHolmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SherlockHolmesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SherlockHolmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
