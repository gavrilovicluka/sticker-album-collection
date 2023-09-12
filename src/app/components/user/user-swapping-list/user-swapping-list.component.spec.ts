import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSwappingListComponent } from './user-swapping-list.component';

describe('UserSwappingListComponent', () => {
  let component: UserSwappingListComponent;
  let fixture: ComponentFixture<UserSwappingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSwappingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSwappingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
