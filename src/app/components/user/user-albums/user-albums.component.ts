import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Album } from 'src/app/models/album';
import { UserAlbum } from 'src/app/models/user-album';
import * as UserAlbumsAction from 'src/app/store/actions/user-album.actions';
import { AppState } from 'src/app/store/app.state';
import { selectUserId } from 'src/app/store/selectors/auth.selectors';
import { selectUserAlbums } from 'src/app/store/selectors/user-album.selectors';


@Component({
  selector: 'app-user-albums',
  templateUrl: './user-albums.component.html',
  styleUrls: ['./user-albums.component.scss']
})
export class UserAlbumsComponent implements OnInit {

  // albums: Album[] = [];
  userAlbums$: Observable<UserAlbum[]> = of([]);
  userId: number | null = null;

  constructor(private store: Store<AppState>, private router: Router) { 
    this.userAlbums$ = this.store.select(selectUserAlbums)/*.subscribe((userAlbums: UserAlbum[]) => {
      userAlbums.forEach((userAlbum: UserAlbum) => {
        this.albums.push(userAlbum.album);
      })
    });*/

  }

  ngOnInit(): void {
    this.store.select(selectUserId).subscribe(userId => this.userId = userId);

    if (this.userId) {
      this.store.dispatch(UserAlbumsAction.getUserAlbums({ userId: this.userId }));
    }

    

  }

}
