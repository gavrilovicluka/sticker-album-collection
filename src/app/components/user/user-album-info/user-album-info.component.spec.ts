import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAlbumInfoComponent } from './user-album-info.component';

describe('UserAlbumInfoComponent', () => {
  let component: UserAlbumInfoComponent;
  let fixture: ComponentFixture<UserAlbumInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAlbumInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAlbumInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
