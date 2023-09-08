import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { Store, select } from '@ngrx/store';
import { ModalService } from '../modal.service';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { RegistrationModalComponent } from '../registration-modal/registration-modal.component';

@Component({
  selector: 'app-auth-links',
  templateUrl: './auth-links.component.html',
  styleUrls: ['./auth-links.component.scss']
})
export class AuthLinksComponent {

  //vm$: Observable<fromAuthSelectors.AuthLinksViewModal>;
  
  constructor(
    // public authService: AuthService,
    private modalService: ModalService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    // this.vm$ = this.store.pipe(
    //   select(fromAuthSelectors.selectAuthLinksViewModel)
    // );
  }

  logout() {
    // this.store.dispatch(logout());
  }

  openModal() {
    this.modalService.openModalLogin();
  }

  
}
