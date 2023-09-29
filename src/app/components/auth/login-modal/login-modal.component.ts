import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalService } from '../../../services/modal/modal.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { RegistrationModalComponent } from '../registration-modal/registration-modal.component';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { User } from 'src/app/models/user';
import { login } from 'src/app/store/actions/auth.actions';
import { UserLoginDto } from 'src/app/models/user-login.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent {

  constructor(
    private modalService: ModalService,
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit(): void { }


  onSubmit(f: NgForm) {
    const currentUrl = this.router.url;
    localStorage.setItem('previousUrl', currentUrl);

    const loginDto: UserLoginDto = {
      username: f.value.username,
      password: f.value.password
    }
    
    this.store.dispatch(login({ userLoginDto: loginDto }));

  }

  cancel(): void {
    this.modalService.closeModal(1);
  }

  openRegistrationModal() {
    this.modalService.openModalRegister();
    this.modalService.closeModal(1);
  }

}

