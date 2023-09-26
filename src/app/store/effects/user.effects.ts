import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import * as UserActions from "../actions/user.actions";
import { UserService } from "src/app/services/user/user.service";
import * as HttpActions from "../actions/http.actions";

@Injectable()
export class UserEffect {

    constructor(private userService: UserService, private actions$: Actions) { }

    getUser$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.getUser),
        mergeMap((action) =>
            this.userService.getUser(action.userId).pipe(
                map((user) => UserActions.getUserSuccess({ user })),
                catchError((error) => {
                    if (error.status === 401) {
                        return of(HttpActions.unauthorizedError(error));
                    } else if (error.status === 403) {
                        return of(HttpActions.forbiddenError(error));
                    } else {
                        return of(UserActions.getUserFailure(error))
                    }
                })
            ))
    ))

    editUser$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.editUser),
        mergeMap((action) =>
            this.userService.editUser(action.userId, action.user).pipe(
                map((user) => UserActions.editUserSuccess({ user })),
                catchError((error) => {
                    if (error.status === 401) {
                        return of(HttpActions.unauthorizedError(error));
                    } else if (error.status === 403) {
                        return of(HttpActions.forbiddenError(error));
                    } else {
                        return of(UserActions.getUserFailure(error))
                    }
                })
            ))
    ))


}