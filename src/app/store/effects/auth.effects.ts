import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, map, mergeMap, of, switchMap, tap } from "rxjs";
import * as AuthActions from "../actions/auth.actions";
import { AuthService } from "src/app/services/auth/auth.service";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffect {

    constructor(private authService: AuthService, private actions$: Actions, private router: Router) { }

    loginUser$ = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.login),
        mergeMap((action) =>
            this.authService.loginUser(action.userLoginDto).pipe(
                // map((token) => AuthActions.loginSuccess({token})),
                tap((token) => localStorage.setItem('token', token)),
                // map((token) => AuthActions.setToken({ token })),
                map((token) => AuthActions.loginSuccess({ token })),
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