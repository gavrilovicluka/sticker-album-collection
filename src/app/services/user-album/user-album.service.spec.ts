import { TestBed } from '@angular/core/testing';

import { UserAlbumService } from './user-album.service';

describe('UserAlbumService', () => {
  let service: UserAlbumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAlbumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
