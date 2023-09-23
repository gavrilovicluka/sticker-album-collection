import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, distinct, filter, map, of } from 'rxjs';
import { UserAlbum } from 'src/app/models/user-album';
import * as UserAlbumActions from 'src/app/store/actions/user-album.actions';
import { AppState } from 'src/app/store/app.state';
import { selectUserAlbum, selectUserAlbumByAlbumId, selectUserAlbums } from 'src/app/store/selectors/user-album.selectors';

@Component({
  selector: 'app-user-stickers',
  templateUrl: './user-stickers.component.html',
  styleUrls: ['./user-stickers.component.scss']
})
export class UserStickersComponent implements OnInit {

  selectedStickersToRemoveFromMissing: { [stickerNumber: number]: boolean } = {};
  selectedStickersToRemoveFromDuplicates: { [stickerNumber: number]: boolean } = {};
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

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.userId = parseInt(this.route.snapshot.paramMap.get('userId')!);
    this.albumId = parseInt(this.route.snapshot.paramMap.get('albumId')!);
    this.store.dispatch(UserAlbumActions.getUserAlbum({ userId: this.userId, albumId: this.albumId }));

    this.userAlbum$ = this.store.select(selectUserAlbum);

  }


  removeSelectedStickers(fromList: string, userAlbumId: number, currentStickers: number[]) {

    let selectedStickers: number[] = [];

    switch (fromList) {
      case 'missing':
        selectedStickers = this.getStickerNumbers(this.selectedStickersToRemoveFromMissing);
        this.selectedStickersToRemoveFromMissing = {};
        break;
      case 'duplicates':
        selectedStickers = this.getStickerNumbers(this.selectedStickersToRemoveFromDuplicates);
        this.selectedStickersToRemoveFromDuplicates = {};
        break;
      default:
        break;
    }

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

    
  }

  getStickerNumbers(selectedStickers: { [stickerNumber: number]: boolean }) {
    return Object.keys(selectedStickers)
      .filter((stickerNumber) => selectedStickers[parseInt(stickerNumber)])
      .map((stickerNumber) => parseInt(stickerNumber));
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

    const uniqueArray = [...new Set(combinedArray)].sort((a, b) => a - b);

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
