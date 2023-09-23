import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Album, AlbumDto } from 'src/app/models/album';
import * as AlbumActions from 'src/app/store/actions/album.actions';
import { AppState } from 'src/app/store/app.state';
import { selectCurrentPublisher } from 'src/app/store/selectors/publisher.selectors';

@Component({
  selector: 'app-album-add',
  templateUrl: './album-add.component.html',
  styleUrls: ['./album-add.component.scss']
})
export class AlbumAddComponent {

  @Input() showForm: boolean = false;

  @Output() closeForm: EventEmitter<null> = new EventEmitter<null>();

  album: AlbumDto;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.album = this.makeEmptyAlbum();
  }

  onSubmit() {

    let publisherId = parseInt(this.route.snapshot.paramMap.get('publisherId')!);

    if (this.album) {

      this.store.dispatch(AlbumActions.addAlbum({ publisherId: publisherId, album: this.album }));
      this.store.pipe(select(selectCurrentPublisher));
      this.album = this.makeEmptyAlbum();
      this.closeForm.emit();
    }
  }

  cancel() {
    this.closeForm.emit();
  }

  makeEmptyAlbum(): AlbumDto {
    return {
      name: '',
      imageUrl: '',
      stickersNumber: 0,
      year: 0
    }
  }
}
