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
  showForm: boolean = false;
  showAddButton: boolean = true;
 
  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.store.dispatch(publisherActions.loadPublishers());
    this.publishers$ = this.store.select(selectAllPublishers);

  }

  onPublisherSelect(publisherId: number) {
    console.log('Selektovan je', publisherId);
    
    this.store.dispatch(publisherActions.selectPublisher({ selectedPublisherId: publisherId }));
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
