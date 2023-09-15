import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { User, UserData, UserEdit } from 'src/app/models/user';
import * as UserActions from 'src/app/store/actions/user.actions';
import { AppState } from 'src/app/store/app.state';
// import { selectUserData } from 'src/app/store/selectors/auth.selectors';
// import { selectUser } from 'src/app/store/selectors/user.selectors';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  user$: Observable<UserData | null> = of();
  userEdit: UserEdit = {
    username: '',
    email: '',
    address: '',
    phoneNumber: ''
  };

  // getUser(userId) -> id se nalazi u tokenu
  constructor(private store: Store<AppState>) {
    // this.user$ = this.store.select(selectUserData);
  }

  onSubmit(f: NgForm) {
    
    this.userEdit.username = f.value.username;
    this.userEdit.email = f.value.email;
    this.userEdit.address = f.value.address; 
    this.userEdit.phoneNumber = f.value.phoneNumber; 
   
    this.store.dispatch(UserActions.editUser({user: this.userEdit}));

  }

}
