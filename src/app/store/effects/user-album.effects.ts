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
            this.userAlbumService.addAlbumToUser(action.userId, action.albumId).pipe(
                map((userAlbum) => UserAlbumActions.addAlbumToUserSuccess({ userAlbum })),
                catchError((error) => of(UserAlbumActions.addAlbumToUserFailure(error)))
            ))
    ))

    getUserAlbums$ = createEffect(() => this.actions$.pipe(
        ofType(UserAlbumActions.getUserAlbums),
        mergeMap((action) =>
            this.userAlbumService.getUserAlbums(action.userId).pipe(
                map((userAlbums) => UserAlbumActions.getUserAlbumsSuccess({ userAlbums })),
                catchError((error) => of(UserAlbumActions.getUserAlbumsFailure(error)))
            ))
    ))

    getUserAlbum$ = createEffect(() => this.actions$.pipe(
        ofType(UserAlbumActions.getUserAlbum),
        mergeMap((action) =>
            this.userAlbumService.getUserAlbum(action.userId, action.albumId).pipe(
                map((userAlbum) => UserAlbumActions.getUserAlbumSuccess({ userAlbum })),
                catchError((error) => of(UserAlbumActions.getUserAlbumFailure(error)))
            ))
    ))

    getUserAlbumsByAlbumId$ = createEffect(() => this.actions$.pipe(
        ofType(UserAlbumActions.getUserAlbumsByAlbumId),
        mergeMap((action) =>
            this.userAlbumService.getUserAlbumsByAlbumId(action.albumId).pipe(
                map((userAlbums) => UserAlbumActions.getUserAlbumsByAlbumIdSuccess({ userAlbums })),
                catchError((error) => of(UserAlbumActions.getUserAlbumsByAlbumIdFailure(error)))
            ))
    ))

    removeStickersFromList$ = createEffect(() => this.actions$.pipe(
        ofType(UserAlbumActions.updateStickersList),
        mergeMap((action) =>
            this.userAlbumService.removeStickersFromList(action.fromList, action.stickers, action.userAlbumId).pipe(
                map((userAlbum) => UserAlbumActions.updateStickersListSuccess({ userAlbum })),
                catchError((error) => of(UserAlbumActions.updateStickersListFailure(error)))
            ))
    ))

}