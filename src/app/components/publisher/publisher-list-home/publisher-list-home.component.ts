import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Publisher } from 'src/app/models/publisher';
import { AppState } from 'src/app/store/app.state';
import * as publisherActions from 'src/app/store/actions/publisher.actions';
import { selectAllPublishers } from 'src/app/store/selectors/publisher.selectors';
import { AuthLinksViewModal, selectAuthLinksViewModel } from 'src/app/store/selectors/auth.selectors';

@Component({
  selector: 'app-publisher-list-home',
  templateUrl: './publisher-list-home.component.html',
  styleUrls: ['./publisher-list-home.component.scss']
})
export class PublisherListHomeComponent {

  publishers$: Observable<readonly Publisher[]> = of([]);
  authViewModel$: Observable<AuthLinksViewModal> = of();
 
  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.store.dispatch(publisherActions.loadPublishers());
    this.publishers$ = this.store.select(selectAllPublishers);
    this.authViewModel$ = this.store.select(selectAuthLinksViewModel);

  }

}
