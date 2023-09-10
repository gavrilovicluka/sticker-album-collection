import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import * as fromAuthActions from '../actions/auth.actions';
import * as fromPublisherActions from '../actions/publisher.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class RouteEffects {

  constructor(private actions$: Actions, private route: Router) { }

  //   goShopping$ = createEffect(
  //     () =>
  //       this.actions$.pipe(
  //         ofType(fromAuthActions.loginSuccess),
  //         tap(() => this.route.navigate(['/shopping/products']))
  //       ),
  //     { dispatch: false }
  //   );

  goHome$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.logout),
        tap(() => this.route.navigate(['/']))
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

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.logout),
        tap(() => localStorage.removeItem('user'))
      ),
    { dispatch: false }
  );


}