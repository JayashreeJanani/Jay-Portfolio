import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecomingComponent } from './homecoming.component';

describe('HomecomingComponent', () => {
  let component: HomecomingComponent;
  let fixture: ComponentFixture<HomecomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomecomingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomecomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
