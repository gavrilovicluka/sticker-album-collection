import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Publisher } from 'src/app/models/publisher';
import { AppState } from 'src/app/store/app.state';
import * as PublisherActions from 'src/app/store/actions/publisher.actions';
import { selectCurrentPublisher } from 'src/app/store/selectors/publisher.selectors';
import { Album } from 'src/app/models/album';

@Component({
  selector: 'app-album-list-home',
  templateUrl: './album-list-home.component.html',
  styleUrls: ['./album-list-home.component.scss']
})
export class AlbumListHomeComponent {

  publisher$: Observable<Publisher | null> = of();
  albums$: Observable<Album[]> = of([]);

  constructor(private store: Store<AppState>, private route: ActivatedRoute) { }

  ngOnInit() {

    let publisherId = parseInt(this.route.snapshot.paramMap.get('publisherId')!);

    if (publisherId) {
      this.store.dispatch(PublisherActions.getPublisherWithAlbums({ publisherId: publisherId }));

    }

    this.store.dispatch(PublisherActions.selectPublisher({ selectedPublisherId: publisherId }));
    this.publisher$ = this.store.pipe(select(selectCurrentPublisher));

  }

}
