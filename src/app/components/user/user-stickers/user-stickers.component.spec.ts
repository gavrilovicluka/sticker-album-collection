import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStickersComponent } from './user-stickers.component';

describe('UserStickersComponent', () => {
  let component: UserStickersComponent;
  let fixture: ComponentFixture<UserStickersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStickersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserStickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
