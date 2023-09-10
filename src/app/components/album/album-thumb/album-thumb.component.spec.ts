import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumThumbComponent } from './album-thumb.component';

describe('AlbumThumbComponent', () => {
  let component: AlbumThumbComponent;
  let fixture: ComponentFixture<AlbumThumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumThumbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
