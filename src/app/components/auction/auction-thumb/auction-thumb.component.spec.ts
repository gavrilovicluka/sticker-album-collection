import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionThumbComponent } from './auction-thumb.component';

describe('AuctionThumbComponent', () => {
  let component: AuctionThumbComponent;
  let fixture: ComponentFixture<AuctionThumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionThumbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuctionThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
