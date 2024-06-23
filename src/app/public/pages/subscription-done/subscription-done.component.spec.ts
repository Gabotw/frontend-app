import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionDoneComponent } from './subscription-done.component';

describe('SubscriptionDoneComponent', () => {
  let component: SubscriptionDoneComponent;
  let fixture: ComponentFixture<SubscriptionDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubscriptionDoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubscriptionDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
