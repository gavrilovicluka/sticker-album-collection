import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import * as AlbumActions from "../actions/album.actions";
import { AlbumService } from "src/app/services/album/album.service";

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
                catchError((error) => of(AlbumActions.addAlbumFailure(error)))
            ))
    ))

}