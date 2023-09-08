import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { ModalService } from '../modal.service';
import { LoginModalComponent } from '../login-modal/login-modal.component';

@Component({
  selector: 'app-registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.scss']
})
export class RegistrationModalComponent {

  //user: User;
  // user$: Observable<User>;

  constructor(
    // public authService: AuthService,
    // private cartService: MockApiCartService,
    private modalService: ModalService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void { }


  onSubmit(f: NgForm) {
    // this.store.dispatch(
    //   fromAuthActions.loginModal({
    //     username: f.value.username,
    //     password: f.value.password,
    //   })
    // );
  }

  cancel(): void {
    this.modalService.closeModal(2);
  }

  openLoginModal() {
    this.modalService.openModalLogin();
    this.modalService.closeModal(2);
  }
}
