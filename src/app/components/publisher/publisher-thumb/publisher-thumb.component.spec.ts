import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherThumbComponent } from './publisher-thumb.component';

describe('PublisherThumbComponent', () => {
  let component: PublisherThumbComponent;
  let fixture: ComponentFixture<PublisherThumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherThumbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublisherThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
