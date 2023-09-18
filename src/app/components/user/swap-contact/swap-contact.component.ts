import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { UserData } from 'src/app/models/user';
import * as UserActions from 'src/app/store/actions/user.actions';
import { AppState } from 'src/app/store/app.state';
import { selectUser } from 'src/app/store/selectors/user.selectors';

@Component({
  selector: 'app-swap-contact',
  templateUrl: './swap-contact.component.html',
  styleUrls: ['./swap-contact.component.scss']
})
export class SwapContactComponent implements OnInit {

  @Input() userId?: number;
  user$: Observable<UserData | null> = of();

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    if (this.userId) {
      this.store.dispatch(UserActions.getUser({ userId: this.userId }))
    }

    this.user$ = this.store.select(selectUser);
  }

}
