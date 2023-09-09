import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Publisher } from 'src/app/models/publisher';
import * as PublisherActions from 'src/app/store/actions/publisher.actions';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-publisher-add',
  templateUrl: './publisher-add.component.html',
  styleUrls: ['./publisher-add.component.scss']
})
export class PublisherAddComponent {

  publisherId: number = 17;      // obrisati posle!!!
  publisher: Publisher;

  constructor(private store: Store<AppState>, private router: Router) {
    this.publisher = this.makeEmptyPublisher();
  }

  onSubmit() {
    if (this.publisher) {
      this.publisher.id = this.publisherId;
      this.publisherId++;
      let publisher = this.publisher;
      this.store.dispatch(PublisherActions.addPublisher({ publisher }));

      this.publisher = this.makeEmptyPublisher();

    }
  }

  makeEmptyPublisher() : Publisher {
    return {
      id: this.publisherId,
        name: '',
        description: '',
        image: '',
        albums: []
    }
  }

  goBack() {
    this.router.navigate(['..']);
  }

}
