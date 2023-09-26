import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import * as AlbumActions from "../actions/album.actions";
import { AlbumService } from "src/app/services/album/album.service";
import * as HttpActions from "../actions/http.actions";

@Injectable()
export class AlbumEffect {

    constructor(private albumService: AlbumService, private actions$: Actions) { }

    loadAlbums$ = createEffect(() => this.actions$.pipe(
        ofType(AlbumActions.loadAlbums),
        mergeMap((action) =>
            this.albumService.loadAlbums(action.publisherId).pipe(
                map((albums) => AlbumActions.loadAlbumsSuccess({ albums })),
                catchError((error) => of(AlbumActions.loadAlbumsFailure(error)))
            ))
    ))

    addAlbum$ = createEffect(() => this.actions$.pipe(
        ofType(AlbumActions.addAlbum),
        mergeMap((action) =>
            this.albumService.addAlbum(action.publisherId, action.album).pipe(
                map((album) => AlbumActions.addAlbumSuccess({ album })),
                catchError((error) => {
                    if (error.status === 401) {
                        return of(HttpActions.unauthorizedError(error));
                    } else if (error.status === 403) {
                        return of(HttpActions.forbiddenError(error));
                    } else {
                        return of(AlbumActions.addAlbumFailure(error))
                    }
                })
            ))
    ))

}