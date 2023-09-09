import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import * as publisherActions from 'src/app/store/actions/publisher.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sticker-album-collection';

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }
}
