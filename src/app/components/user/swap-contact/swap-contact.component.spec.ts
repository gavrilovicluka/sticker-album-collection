import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapContactComponent } from './swap-contact.component';

describe('SwapContactComponent', () => {
  let component: SwapContactComponent;
  let fixture: ComponentFixture<SwapContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwapContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwapContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
