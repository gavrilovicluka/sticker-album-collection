import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/user';
import { AppState } from 'src/app/store/app.state';
import { ModalService } from '../../../services/modal/modal.service';
import { ActivatedRoute } from '@angular/router';
import { SwappingInfo } from 'src/app/models/swapping-info';
import { getUserAlbumsByAlbumId } from 'src/app/store/actions/user-album.actions';
import { selectCurrentUserAlbum, selectSwappingInfoWithOffer } from 'src/app/store/selectors/user-album.selectors';
import { selectAlbum } from 'src/app/store/actions/album.actions';
import { UserAlbum } from 'src/app/models/user-album';

@Component({
  selector: 'app-user-swapping-list',
  templateUrl: './user-swapping-list.component.html',
  styleUrls: ['./user-swapping-list.component.scss']
})
export class UserSwappingListComponent implements OnInit {

  otherUsers$: Observable<User[]> = of([]);
  albumId: number | null = null;
  swappingInfos$: Observable<SwappingInfo[] | null> = of([]);
  currentUserAlbum$: Observable<UserAlbum | null> = of();

  constructor(private store: Store<AppState>, private modalService: ModalService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.albumId = parseInt(this.route.snapshot.paramMap.get('albumId')!);

    this.store.dispatch(getUserAlbumsByAlbumId({ albumId: this.albumId }));
    this.swappingInfos$ = this.store.select(selectSwappingInfoWithOffer);

    // Za naslov albuma
    this.store.dispatch(selectAlbum({albumId: this.albumId}));
    this.currentUserAlbum$ = this.store.select(selectCurrentUserAlbum);

  }

  

}
