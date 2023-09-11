import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumListHomeComponent } from './album-list-home.component';

describe('AlbumListHomeComponent', () => {
  let component: AlbumListHomeComponent;
  let fixture: ComponentFixture<AlbumListHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumListHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumListHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
