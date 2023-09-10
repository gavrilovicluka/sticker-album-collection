import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Album } from 'src/app/models/album';
import * as AlbumActions from 'src/app/store/actions/album.actions';
import * as PublisherActions from 'src/app/store/actions/publisher.actions';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-album-add',
  templateUrl: './album-add.component.html',
  styleUrls: ['./album-add.component.scss']
})
export class AlbumAddComponent {

  @Input() showForm: boolean = false;

  @Output() cancelClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  albumId: number = 2;      // obrisati posle!!!
  album: Album;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.album = this.makeEmptyAlbum();
  }

  onSubmit() {

    let publisherId = parseInt(this.route.snapshot.paramMap.get('id')!);

    if (this.album) {
      this.album.id = this.albumId;         // za brisanje
      this.albumId++;                       // za brisanje
      this.album.publisherId = publisherId;

      this.store.dispatch(AlbumActions.addAlbum({ album: this.album }));
      this.store.dispatch(PublisherActions.addAlbumToPublisher({ publisherId, album: this.album }));

      this.album = this.makeEmptyAlbum();

    }
  }

  cancel() {
    this.cancelClicked.emit(this.showForm);
  }

  makeEmptyAlbum(): Album {
    return {
      id: this.albumId,
      name: '',
      image: '',
      stickersNumber: 0,
      year: 0,
      publisherId: -1
    }
  }
}
