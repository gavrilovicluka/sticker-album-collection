import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { ModalService } from '../../../services/modal/modal.service';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { signup } from 'src/app/store/actions/auth.actions';
import { User, UserRegistrationDto } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.scss']
})
export class RegistrationModalComponent {
  
  constructor(
    public authService: AuthService,
    private modalService: ModalService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void { }


  onSubmit(f: NgForm) {
    let user: UserRegistrationDto = {
      name: f.value.forename!.toString(),
      surname: f.value.surname!.toString(),
      username: f.value.username!.toString(),
      email: f.value.email!.toString(),
      password: f.value.password!.toString(),
      address: f.value.address!.toString(),
      phoneNumber: f.value.phoneNumber!.toString()
    };
    
    this.store.dispatch(signup({ user }));
  }

  cancel(): void {
    this.modalService.closeModal(2);
  }

  openLoginModal() {
    this.modalService.openModalLogin();
    this.modalService.closeModal(2);
  }
}
