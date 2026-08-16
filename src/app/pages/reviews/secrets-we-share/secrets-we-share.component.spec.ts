import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretsWeShareComponent } from './secrets-we-share.component';

describe('SecretsWeShareComponent', () => {
  let component: SecretsWeShareComponent;
  let fixture: ComponentFixture<SecretsWeShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecretsWeShareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretsWeShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
