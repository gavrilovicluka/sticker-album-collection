import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Album } from 'src/app/models/album';
import * as UserAlbumActions from 'src/app/store/actions/user-album.actions';
import { AppState } from 'src/app/store/app.state';
import { selectIsLoggedIn } from 'src/app/store/selectors/auth.selectors';

@Component({
  selector: 'app-album-info',
  templateUrl: './album-info.component.html',
  styleUrls: ['./album-info.component.scss']
})
export class AlbumInfoComponent {

  @Input() album: Album | null = null;
  isLoggedIn: boolean | null = null;        // Selektovace se ceo User da se proveri da li je prijavljen i da se preuzme ID zbog dodavanja albuma

  constructor(private store: Store<AppState>, private router: Router) {
    this.store.pipe(select(selectIsLoggedIn)).subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  onAddToCollectionClick() {

    if (this.isLoggedIn) {
      // this.router.navigate(['/kolekcije']);
      if(this.album?.id) {
        // this.store.dispatch(UserAlbumActions.addAlbumToUser({ albumId: this.album.id, userId: 1 }));       // !!!!!!!!!!!!!!!!!!111
      }

    } else {
      alert('Morate se prijaviti da biste dodali u kolekciju.');
    }


  }
}
