import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerToolbarComponent } from './lawyer-toolbar.component';

describe('LawyerToolbarComponent', () => {
  let component: LawyerToolbarComponent;
  let fixture: ComponentFixture<LawyerToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LawyerToolbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LawyerToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
