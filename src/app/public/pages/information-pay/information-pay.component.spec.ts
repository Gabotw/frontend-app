import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationPayComponent } from './information-pay.component';

describe('InformationPayComponent', () => {
  let component: InformationPayComponent;
  let fixture: ComponentFixture<InformationPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformationPayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformationPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
