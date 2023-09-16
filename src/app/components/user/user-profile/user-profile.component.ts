import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { User, UserData, UserEdit } from 'src/app/models/user';
import * as UserActions from 'src/app/store/actions/user.actions';
import { AppState } from 'src/app/store/app.state';
import { userReducer } from 'src/app/store/reducers/user.reducer';
import { selectUser } from 'src/app/store/selectors/user.selectors';
// import { selectUserData } from 'src/app/store/selectors/auth.selectors';
// import { selectUser } from 'src/app/store/selectors/user.selectors';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  // user$: Observable<UserData | null> = of();
  user: UserData = {
    name: '',
    surname: '',
    username: '',
    email: '',
    address: '',
    phoneNumber: ''
  };

  userId?: number;

  // getUser(userId) -> id se nalazi u tokenu
  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    // this.user$ = this.store.select(selectUserData);
  }

  ngOnInit(): void {
    this.userId = parseInt(this.route.snapshot.paramMap.get('userId')!);

    this.store.dispatch(UserActions.getUser({ userId: this.userId }));

    this.store.select(selectUser).subscribe((user) => {
      if (user) {
        this.user.name = user.name,
          this.user.surname = user.surname,
          this.user.username = user.username,
          this.user.email = user.email,
          this.user.address = user.address,
          this.user.phoneNumber = user.phoneNumber
      }

    });
  }

  onSubmit(f: NgForm) {

    this.user.username = f.value.username;
    this.user.email = f.value.email;
    this.user.address = f.value.address;
    this.user.phoneNumber = f.value.phoneNumber;

    if (this.userId) {
      this.store.dispatch(UserActions.editUser({ userId: this.userId, user: this.user }));
    }

  }

}
