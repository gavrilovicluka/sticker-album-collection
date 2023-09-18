import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { State, Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Album } from 'src/app/models/album';
import { UserAlbum } from 'src/app/models/user-album';
import { selectAlbum } from 'src/app/store/actions/album.actions';
import { AppState } from 'src/app/store/app.state';
import { selectUserId } from 'src/app/store/selectors/auth.selectors';
import { selectUserAlbums } from 'src/app/store/selectors/user-album.selectors';


@Component({
  selector: 'app-user-album-info',
  templateUrl: './user-album-info.component.html',
  styleUrls: ['./user-album-info.component.scss']
})
export class UserAlbumInfoComponent implements OnInit {

  @Input() album: Album | null = null;
  @Input() missingStickers: number | null = null;
  @Input() duplicatesStickers: number | null = null;
  userId: number | null = null;

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.store.select(selectUserId).subscribe(userId => this.userId = userId);
  }

  onMyStickersClick(albumId: number) {
    this.store.dispatch(selectAlbum({albumId}));
    this.router.navigate([`${this.userId}/my-albums/${albumId}`]);
  }

  onPossibleSwapsClick(albumId: number) {
    this.store.dispatch(selectAlbum({albumId}));
    this.router.navigate([`${this.userId}/my-albums/${albumId}/swapping`]);
  }

}
