import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, distinct, filter, map, of } from 'rxjs';
import { UserAlbum } from 'src/app/models/user-album';
import * as StickerActions from 'src/app/store/actions/sticker.actions';
import * as UserAlbumActions from 'src/app/store/actions/user-album.actions';
import { AppState } from 'src/app/store/app.state';
import { selectAlbumId } from 'src/app/store/selectors/album.selectors';
import { selectUserId } from 'src/app/store/selectors/auth.selectors';
import { selectMissingStickers } from 'src/app/store/selectors/sticker.selectors';
import { selectUserAlbum, selectUserAlbumByAlbumId, selectUserAlbums } from 'src/app/store/selectors/user-album.selectors';

@Component({
  selector: 'app-user-stickers',
  templateUrl: './user-stickers.component.html',
  styleUrls: ['./user-stickers.component.scss']
})
export class UserStickersComponent implements OnInit {

  // allAlbumStickers$: Observable<number[]> = of([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
  // missingStickers$: Observable<number[]> = of([]);
  // duplicatesStickers$: Observable<number[]> = of([12, 65, 32, 56, 21, 78, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
  selectedStickersToRemove: { [stickerNumber: number]: boolean } = {};
  selectedStickersToAddToList: { [stickerNumber: number]: boolean } = {};
  currentStickersList: number[] = [];

  isAddNewStickersSelected: boolean = false;
  isMissingSelected: boolean = true;
  isDuplicatesSelected: boolean = true;

  userAlbum$: Observable<UserAlbum | null> = of();
  userId: number | null = null;
  albumId: number | null = null;
  allAlbumStickers: number[] = [];
  stickersNumber: number | null = null;

  constructor(private store: Store<AppState>, private router: Router, private route: ActivatedRoute) {
    // this.missingStickers$ = this.store.select(selectMissingStickers);
    // this.missingStickers$ = this.store.select(selectDuplicatesStickers);
  }

  ngOnInit(): void {

    this.userId = parseInt(this.route.snapshot.paramMap.get('userId')!);
    this.albumId = parseInt(this.route.snapshot.paramMap.get('albumId')!);
    this.store.dispatch(UserAlbumActions.getUserAlbum({ userId: this.userId, albumId: this.albumId }));

    this.userAlbum$ = this.store.select(selectUserAlbum);

    // Problem sa reload
    // this.userAlbum$ = this.store.select(selectUserAlbumByAlbumId)

  }


  removeSelectedStickers(fromList: string, userAlbumId: number, currentStickers: number[]) {

    const selectedStickers = Object.keys(this.selectedStickersToRemove)
      .filter((stickerNumber) => this.selectedStickersToRemove[parseInt(stickerNumber)])
      .map((stickerNumber) => parseInt(stickerNumber));

    if (selectedStickers.length <= 0) {
      alert('Niste izabrali nijednu sličicu.');
      return;
    }

    const newList = Array.from(currentStickers);
    selectedStickers.forEach((sticker) => {
      const index = newList.indexOf(sticker);
      if (index !== -1) {
        newList.splice(index, 1);
      }
    });

    this.store.dispatch(UserAlbumActions.updateStickersList({ fromList, stickers: newList, userAlbumId }));

    this.selectedStickersToRemove = {};
  }


  openAddNewStickersToList(albumStickersNumber: number, flag: string, currentStickers: number[]) {

    if (flag === 'missing') {
      this.isDuplicatesSelected = false;
    } else if (flag === 'duplicates') {
      this.isMissingSelected = false;
    }
    this.currentStickersList = currentStickers;

    this.isAddNewStickersSelected = true;

    this.allAlbumStickers = Array.from({ length: albumStickersNumber }, (_, i) => i + 1);

  }

  confirmAdding(userAlbumId: number) {
    this.isAddNewStickersSelected = false;

    let fromList: string = '';
    if (this.isMissingSelected) {
      fromList = 'missing';
    } else if (this.isDuplicatesSelected) {
      fromList = 'duplicates';
    }

    const selectedStickers = Object.keys(this.selectedStickersToAddToList)
      .filter((stickerNumber) => this.selectedStickersToAddToList[parseInt(stickerNumber)])
      .map((stickerNumber) => parseInt(stickerNumber));

    if (selectedStickers.length <= 0) {
      alert('Niste izabrali nijednu sličicu.');
    }

    const combinedArray = [...this.currentStickersList, ...selectedStickers];

    const uniqueArray = [...new Set(combinedArray)];

    this.store.dispatch(UserAlbumActions.updateStickersList({ fromList, stickers: uniqueArray, userAlbumId }));

    this.selectedStickersToAddToList = {};
    this.isDuplicatesSelected = true;
    this.isMissingSelected = true;
  }

  cancelAddingToList() {
    this.isAddNewStickersSelected = false;
    this.isDuplicatesSelected = true;
    this.isMissingSelected = true;
  }

}
