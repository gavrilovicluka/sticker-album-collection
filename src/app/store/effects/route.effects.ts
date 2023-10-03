import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import * as fromAuthActions from '../actions/auth.actions';
import * as fromPublisherActions from '../actions/publisher.actions';
import { tap } from 'rxjs/operators';
import * as HttpActions from '../actions/http.actions';

@Injectable()
export class RouteEffects {

  constructor(private actions$: Actions, private route: Router) { }

  goHome$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.logout, HttpActions.forbiddenError, HttpActions.unauthorizedError),
        tap(() => this.route.navigate(['/']))
      ),
    { dispatch: false }
  );

  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.loginSuccess),
        tap(() => {
          const previousUrl = localStorage.getItem('previousUrl');
          if (previousUrl) {
            this.route.navigateByUrl(previousUrl);
          } else {
            this.route.navigate(['/']);
          }
        })
      ),
    { dispatch: false }
  );

  goPublishersList$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromPublisherActions.addPublisherSuccess, fromPublisherActions.editPublisherSuccess),
        tap(() => this.route.navigate(['admin/publishers']))
      ),
    { dispatch: false }
  );

}