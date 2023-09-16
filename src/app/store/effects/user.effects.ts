import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, map, mergeMap, of, switchMap } from "rxjs";
import * as UserActions from "../actions/user.actions";
import { AuthService } from "src/app/services/auth/auth.service";
import { UserService } from "src/app/services/user/user.service";

@Injectable()
export class UserEffect {

    constructor(private userService: UserService, private actions$: Actions) { }

    getUser$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.getUser),
        mergeMap((action) =>
            this.userService.getUser(action.userId).pipe(
                map((user) => UserActions.getUserSuccess({ user })),
                catchError((error) => of(UserActions.getUserFailure(error)))
            ))
    ))
    
    editUser$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.editUser),
        mergeMap((action) =>
            this.userService.editUser(action.userId, action.user).pipe(
                map((user) => UserActions.editUserSuccess({ user })),
                catchError((error) => of(UserActions.editUserFailure(error)))
            ))
    ))


}