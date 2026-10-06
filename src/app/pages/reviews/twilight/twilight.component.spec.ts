import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwilightComponent } from './twilight.component';

describe('TwilightComponent', () => {
  let component: TwilightComponent;
  let fixture: ComponentFixture<TwilightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwilightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwilightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
