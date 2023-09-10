import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Album } from 'src/app/models/album';
import { Publisher } from 'src/app/models/publisher';
import { AppState } from 'src/app/store/app.state';
import * as PublisherActions from 'src/app/store/actions/publisher.actions';
import { selectCurrentPublisher } from 'src/app/store/selectors/publisher.selectors';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss']
})
export class AlbumsListComponent {

  // albums$: Observable<readonly Album[]> = of([]);
  publisher$: Observable<Publisher | null> = of();
  showForm: boolean = false;
  showAddButton: boolean = true;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) { }

  ngOnInit() {

    let publisherId = parseInt(this.route.snapshot.paramMap.get('id')!);

    if (publisherId) {
      // this.store.dispatch(albumActions.loadAlbums({ publisherId: publisherId }));
      this.store.dispatch(PublisherActions.selectPublisher({ selectedPublisherId: publisherId }));
    }
    
    
    // this.albums$ = this.store.pipe(select(selectAllAlbumsOfPublisher));
    this.publisher$ = this.store.pipe(select(selectCurrentPublisher));

  }

  showAddForm() {
    this.showForm = true;
    this.showAddButton = false;
  }
  cancelForm() {
    this.showForm = false;
    this.showAddButton = true;
  }

}
