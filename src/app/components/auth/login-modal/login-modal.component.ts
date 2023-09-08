import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalService } from '../modal.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { RegistrationModalComponent } from '../registration-modal/registration-modal.component';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent {
  
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
    this.modalService.closeModal(1);
  }

  openRegistrationModal() {
    this.modalService.openModalRegister();
    this.modalService.closeModal(1);
  }

}
