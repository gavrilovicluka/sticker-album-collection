import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import * as UserAlbumActions from "../actions/user-album.actions";
import { UserAlbumService } from "src/app/services/user-album/user-album.service";

@Injectable()
export class UserAlbumEffect {

    constructor(private userAlbumService: UserAlbumService, private actions$: Actions) { }

    addAlbumToUser$ = createEffect(() => this.actions$.pipe(
        ofType(UserAlbumActions.addAlbumToUser),
        mergeMap((action) =>
            this.userAlbumService.addAlbumToUser(action.albumId, action.userId).pipe(
                map((userAlbum) => UserAlbumActions.addAlbumToUserSuccess({ userAlbum })),
                catchError((error) => of(UserAlbumActions.addAlbumToUserFailure(error)))
            ))
    ))

}