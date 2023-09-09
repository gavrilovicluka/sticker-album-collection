import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import * as publisherActions from 'src/app/store/actions/publisher.actions';
import { User } from './models/user';
import { browserReload } from './store/actions/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sticker-album-collection';

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    const user: User = JSON.parse(localStorage.getItem('user')!);

    if (user) {
      this.store.dispatch(browserReload({ user: user }));
    }
  }
}
