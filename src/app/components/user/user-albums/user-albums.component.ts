import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Album } from 'src/app/models/album';
import * as UserAlbumsAction from 'src/app/store/actions/user-album.actions';
import { AppState } from 'src/app/store/app.state';
import { selectUserId } from 'src/app/store/selectors/user.selectors';


@Component({
  selector: 'app-user-albums',
  templateUrl: './user-albums.component.html',
  styleUrls: ['./user-albums.component.scss']
})
export class UserAlbumsComponent implements OnInit {

  userAlbums$: Observable<Album[]> = of([]);
  userId: number | null = null;

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.store.select(selectUserId).subscribe(userId => this.userId = userId);

    if (this.userId) {
      this.store.dispatch(UserAlbumsAction.getUserAlbums({ userId: this.userId }));
    }
  }

  onMyStickersClick(albumId: number) {
    this.router.navigate([`${this.userId}/my-albums/${albumId}`]);
  }


}
