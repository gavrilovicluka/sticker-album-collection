import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { State, select } from '@ngrx/store';
import { Album } from 'src/app/models/album';
import { AppState } from 'src/app/store/app.state';
import { selectUserId } from 'src/app/store/selectors/auth.selectors';


@Component({
  selector: 'app-user-album-info',
  templateUrl: './user-album-info.component.html',
  styleUrls: ['./user-album-info.component.scss']
})
export class UserAlbumInfoComponent /*implements OnInit*/ {

  @Input() album: Album | null = null;
  userId: number | null = null;

  constructor(private store: State<AppState>, private router: Router) { }

  // ngOnInit(): void {
  //   this.store.pipe(select(selectUserId)).subscribe(userId => this.userId = userId);
  //   console.log("user album info")
  // }

  onMyStickersClick(albumId: number) {
    this.router.navigate([`${this.userId}/my-albums/${albumId}`]);
  }

  onPossibleSwapsClick(albumId: number) {
    this.router.navigate([`${this.userId}/my-albums/${albumId}/swapping`]);
  }

}
