import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherThumbHomeComponent } from './publisher-thumb-home.component';

describe('PublisherThumbHomeComponent', () => {
  let component: PublisherThumbHomeComponent;
  let fixture: ComponentFixture<PublisherThumbHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherThumbHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublisherThumbHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
