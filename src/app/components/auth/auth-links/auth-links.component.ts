import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { Store, select } from '@ngrx/store';
import { ModalService } from '../modal.service';
import { AuthLinksViewModal, selectAuthLinksViewModel } from 'src/app/store/selectors/auth.selectors';
import { logout } from 'src/app/store/actions/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-links',
  templateUrl: './auth-links.component.html',
  styleUrls: ['./auth-links.component.scss']
})
export class AuthLinksComponent {

  authViewModel$: Observable<AuthLinksViewModal> = of();
  
  constructor(
    private modalService: ModalService,
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authViewModel$ = this.store.pipe(select(selectAuthLinksViewModel));
  }

  logout() {
    // this.router.navigate(['/']);
    // localStorage.removeItem('user');
    this.store.dispatch(logout());
  }

  openModal() {
    this.modalService.openModalLogin();
  }

  
}
