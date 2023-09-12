import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Publisher } from 'src/app/models/publisher';
import { PublisherService } from 'src/app/services/publisher/publisher.service';
import * as PublisherActions from 'src/app/store/actions/publisher.actions';
import { AppState } from 'src/app/store/app.state';
import { selectCurrentPublisher } from 'src/app/store/selectors/publisher.selectors';

@Component({
  selector: 'app-publisher-edit',
  templateUrl: './publisher-edit.component.html',
  styleUrls: ['./publisher-edit.component.scss']
})
export class PublisherEditComponent implements OnInit {

  model: any = {};
  publisher: Partial<Publisher> = {};
  publisher$: Observable<Publisher | null> = of();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>) {
  }

  ngOnInit(): void {
    let publisherId = parseInt(this.route.snapshot.paramMap.get('publisherId')!);

    if (publisherId) {
      //this.store.dispatch(PublisherActions.getPublisher({ selectedPublisherId: publisherId }));
      this.store.dispatch(PublisherActions.selectPublisher({ selectedPublisherId: publisherId }));

    }

    this.store.select(selectCurrentPublisher).subscribe(publisher => this.publisher = { ...publisher });



    //this.store.select()
    // this.publisherService
    //   .getPublisher(this.route.snapshot.paramMap.get('id'))
    //   .subscribe((publisher) => (this.model = publisher));
  }

  onSubmit() {
    if(this.publisher)  
      this.store.dispatch(PublisherActions.editPublisher({ publisher: this.publisher as Publisher}));
    // this.publisherService.editPublisher(this.model).subscribe(categoryObserver);
  }

}
