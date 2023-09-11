import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherListHomeComponent } from './publisher-list-home.component';

describe('PublisherListHomeComponent', () => {
  let component: PublisherListHomeComponent;
  let fixture: ComponentFixture<PublisherListHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherListHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublisherListHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
