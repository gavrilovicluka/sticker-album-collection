import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Publisher, PublisherDto } from 'src/app/models/publisher';
import * as PublisherActions from 'src/app/store/actions/publisher.actions';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-publisher-add',
  templateUrl: './publisher-add.component.html',
  styleUrls: ['./publisher-add.component.scss']
})
export class PublisherAddComponent {

  publisher: PublisherDto;
  @Input() showForm: boolean = false;
  @Output() closeForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private store: Store<AppState>) {
    this.publisher = this.makeEmptyPublisher();
  }

  onSubmit() {
    if (this.publisher) {

      this.store.dispatch(PublisherActions.addPublisher({ publisher: this.publisher }));


      this.publisher = this.makeEmptyPublisher();
      this.closeForm.emit(this.showForm);
    }
  }

  makeEmptyPublisher(): PublisherDto {
    return {
      name: '',
      image: '',
    }
  }

  cancel() {
    this.closeForm.emit(this.showForm);
  }

}
