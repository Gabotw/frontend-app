import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerFilterComponent } from './lawyer-filter.component';

describe('LawyerFilterComponent', () => {
  let component: LawyerFilterComponent;
  let fixture: ComponentFixture<LawyerFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LawyerFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LawyerFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
