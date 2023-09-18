import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapInfoComponent } from './swap-info.component';

describe('SwapInfoComponent', () => {
  let component: SwapInfoComponent;
  let fixture: ComponentFixture<SwapInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwapInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwapInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
