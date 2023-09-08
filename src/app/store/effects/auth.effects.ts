import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, map, mergeMap, of, switchMap } from "rxjs";
import * as AuthActions from "../actions/auth.actions";
import { AuthService } from "src/app/services/auth/auth.service";

@Injectable()
export class AuthEffect {

    constructor(private authService: AuthService, private actions$: Actions) { }



    // login$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(login),
    //         concatMap((action) =>
    //             this.authService.login(action.username, action.password).pipe(
    //                 map((user) => loginSuccess({ user: user })),
    //                 catchError((error) => of(loginFailure({ error })))
    //             )
    //         )
    //     )
    // );

    loginUser$ = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.login),
        mergeMap((action) => 
            this.authService.loginUser(action.username, action.password).pipe(
                map((user) => AuthActions.loginSuccess({user})),
                catchError((error) => of(AuthActions.loginFailure(error)))
            ))
    ))

    signupUser$ = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.signup),
        mergeMap((action) => 
            this.authService.signupUser(action.user).pipe(
                map((user) => AuthActions.signupSuccess({user})),
                catchError((error) => of(AuthActions.signupFailure(error)))
            ))
    ))

}