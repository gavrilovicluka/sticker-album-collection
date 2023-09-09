import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Publisher } from 'src/app/models/publisher';
import * as publisherActions from 'src/app/store/actions/publisher.actions';
import { AppState } from 'src/app/store/app.state';
import { selectAllPublishers, selectAllPublishersAsDict } from 'src/app/store/selectors/publisher.selectors';

@Component({
  selector: 'app-publisher-list',
  templateUrl: './publisher-list.component.html',
  styleUrls: ['./publisher-list.component.scss']
})
export class PublisherListComponent {

  publishers$: Observable<readonly Publisher[]> = of([]);

  constructor(private store: Store<AppState> /*public router: Router */) { }

  ngOnInit() {
    
    this.store.dispatch(publisherActions.loadPublishers());
    this.publishers$ = this.store.pipe(select(selectAllPublishers));

  }

}
