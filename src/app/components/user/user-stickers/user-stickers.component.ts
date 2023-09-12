import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, distinct, filter, map, of } from 'rxjs';
import * as StickerActions from 'src/app/store/actions/sticker.actions';
import { AppState } from 'src/app/store/app.state';
import { selectMissingStickers } from 'src/app/store/selectors/sticker.selectors';

@Component({
  selector: 'app-user-stickers',
  templateUrl: './user-stickers.component.html',
  styleUrls: ['./user-stickers.component.scss']
})
export class UserStickersComponent implements OnInit {

  allAlbumStickers$: Observable<number[]> = of([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
  missingStickers$: Observable<number[]> = of([]);
  duplicatesStickers$: Observable<number[]> = of([12, 65, 32, 56, 21, 78, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
  selectedStickersToRemove: { [stickerNumber: number]: boolean } = {};
  selectedStickersToAddToList: { [stickerNumber: number]: boolean } = {};
  isAddNewStickersSelected: boolean = false;


  constructor(private store: Store<AppState>, private router: Router, private route: ActivatedRoute) {
    this.missingStickers$ = this.store.select(selectMissingStickers);
    // this.missingStickers$ = this.store.select(selectDuplicatesStickers);
  }

  ngOnInit(): void {
    const fakeId: number = 1;
    this.store.dispatch(StickerActions.getMissingStickers({ id: fakeId }));     // !!!!!! id
    // this.store.dispatch(StickerActions.getDuplicatesStickers({ id: fakeId }));  // !!!!!! id
  }

  // Fali logika za brisanje duplikata sa liste
  removeSelectedStickers() {

    const selectedStickers = Object.keys(this.selectedStickersToRemove)
      .filter((stickerNumber) => this.selectedStickersToRemove[parseInt(stickerNumber)])
      .map((stickerNumber) => parseInt(stickerNumber));

    if (selectedStickers.length > 0) {
      this.store.dispatch(StickerActions.removeMissingStickers({ stickers: selectedStickers }));
    } else {
      alert('Niste izabrali nijednu sličicu.');
    }

    this.selectedStickersToRemove = {};
  }

  addNewStickersToList() {
    this.isAddNewStickersSelected = true;
  }

  confirmAdding() {
    this.isAddNewStickersSelected = false;

    console.log(this.selectedStickersToAddToList);
    // for (const stickerNumber of Object.keys(this.selectedStickersToAddToList)) {
    //   if (this.selectedStickersToAddToList[parseInt(stickerNumber)]) {

    //     console.log(this.selectedStickersToAddToList[+stickerNumber]);
    //     console.log(parseInt(stickerNumber));
    //     // this.store.dispatch(addMissingSticker({ stickerNumber: +stickerNumber }));
    //   }
    // }



    const selectedStickers = Object.keys(this.selectedStickersToAddToList)
      .filter((stickerNumber) => this.selectedStickersToAddToList[parseInt(stickerNumber)])
      .map((stickerNumber) => parseInt(stickerNumber));

    if (selectedStickers.length > 0) {
      this.store.dispatch(StickerActions.addMissingStickers({ stickers: selectedStickers }));
    } else {
      alert('Niste izabrali nijednu sličicu.');
    }




    this.selectedStickersToAddToList = {};
  }

  cancelRemovingFromList() {
    this.selectedStickersToRemove = {};
    // this.router.navigate(['..'], { relativeTo: this.route });
  }

  cancelAddingToList() {
    this.isAddNewStickersSelected = false;
  }

}
