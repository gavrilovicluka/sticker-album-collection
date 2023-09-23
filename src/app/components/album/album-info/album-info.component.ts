import { Component, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Album } from 'src/app/models/album';
import * as UserAlbumActions from 'src/app/store/actions/user-album.actions';
import { AppState } from 'src/app/store/app.state';
import { selectIsAdmin, selectIsLoggedIn, selectUserId } from 'src/app/store/selectors/auth.selectors';

@Component({
  selector: 'app-album-info',
  templateUrl: './album-info.component.html',
  styleUrls: ['./album-info.component.scss']
})
export class AlbumInfoComponent {

  @Input() album?: Album;
  isLoggedIn: boolean | null = null;
  isAdmin: boolean | null = null;
  userId?: number;

  constructor(private store: Store<AppState>) {
    this.store.select(selectIsLoggedIn).subscribe((isLoggedIn) => this.isLoggedIn = isLoggedIn);

    this.store.select(selectIsAdmin).subscribe(isAdmin => this.isAdmin = isAdmin);
  }

  onAddToCollectionClick() {

    if (this.isLoggedIn && !this.isAdmin) {
      this.store.select(selectUserId).subscribe(id => this.userId = id);

      if (this.album?.id && this.userId) {
        this.store.dispatch(UserAlbumActions.addAlbumToUser({ albumId: this.album.id, userId: this.userId }));
      }

    } else if (this.isAdmin) {
      alert('Ne mozete dodati album u kolekciju kao admin.');
    } else {
      alert('Morate se prijaviti da biste dodali u kolekciju.');
    }
  }

}
