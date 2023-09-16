import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, map, mergeMap, of, switchMap, tap, withLatestFrom } from "rxjs";
import * as AuthActions from "../actions/auth.actions";
import { AuthService } from "src/app/services/auth/auth.service";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "../app.state";
import { selectIsAdmin } from "../selectors/auth.selectors";

@Injectable()
export class AuthEffect {

    constructor(private authService: AuthService, private actions$: Actions, private router: Router, private store: Store<AppState>) { }

    loginUser$ = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.login),
        withLatestFrom(this.store.select(selectIsAdmin)),
        mergeMap(([action, isAdmin]) =>
            this.authService.loginUser(action.userLoginDto).pipe(
                // map((token) => AuthActions.loginSuccess({token})),
                tap((token) => localStorage.setItem('token', token)),
                // map((token) => AuthActions.setToken({ token })),
                map((token) => AuthActions.loginSuccess({ token })),
                tap((isAdmin) => {
                    if(isAdmin) {
                        this.router.navigate(['/admin/publishers']);
                    }
                }),
                catchError((error) => of(AuthActions.loginFailure(error)))
            ))
    ))

    logout$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(AuthActions.logout),
                tap(() => {
                    localStorage.removeItem('token');
                    // this.router.navigateByUrl("/login");
                }),

            ),
        { dispatch: false }
    );

    signupUser$ = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.signup),
        mergeMap((action) =>
            this.authService.signupUser(action.user).pipe(
                map((user) => AuthActions.signupSuccess({ user })),
                catchError((error) => of(AuthActions.signupFailure(error)))
            ))
    ))

}