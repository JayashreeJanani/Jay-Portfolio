import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeyondTheCaseFilesComponent } from './beyond-the-case-files.component';

describe('BeyondTheCaseFilesComponent', () => {
  let component: BeyondTheCaseFilesComponent;
  let fixture: ComponentFixture<BeyondTheCaseFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeyondTheCaseFilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeyondTheCaseFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
