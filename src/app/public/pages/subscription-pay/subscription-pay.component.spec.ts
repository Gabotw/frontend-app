import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionPayComponent } from './subscription-pay.component';

describe('SubscriptionPayComponent', () => {
  let component: SubscriptionPayComponent;
  let fixture: ComponentFixture<SubscriptionPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubscriptionPayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubscriptionPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
