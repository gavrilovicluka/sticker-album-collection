import { Injectable } from "@angular/core";
import { AlertService } from "@full-fledged/alerts";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";
import * as AuthActions from "../actions/auth.actions";
import * as UserActions from "../actions/user.actions";
import * as AlbumActions from "../actions/album.actions";
import * as PublisherActions from "../actions/publisher.actions";
import * as UserAlbumActions from "../actions/user-album.actions";
import * as HttpActions from "../actions/http.actions";

@Injectable()
export class AlertEffects {

    constructor(private actions$: Actions, private alertService: AlertService) { }

    actionFailure$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(
                    AuthActions.loginFailure,
                    AuthActions.signupFailure,
                    UserActions.getUserFailure,
                    UserActions.editUserFailure,
                    AlbumActions.addAlbumFailure,
                    AlbumActions.loadAlbumsFailure,
                    PublisherActions.loadPublishersFailure,
                    PublisherActions.getPublisherFailure,
                    PublisherActions.getPublisherWithAlbumsFailure,
                    PublisherActions.addPublisherFailure,
                    PublisherActions.editPublisherFailure,
                    PublisherActions.addAlbumToPublisherFailure,
                    UserAlbumActions.addAlbumToUserFailure,
                    UserAlbumActions.getUserAlbumsFailure,
                    UserAlbumActions.getUserAlbumFailure,
                    UserAlbumActions.getUserAlbumsByAlbumIdFailure,
                    UserAlbumActions.updateStickersListFailure,
                    HttpActions.forbiddenError,
                    HttpActions.unauthorizedError
                ),
                tap((error) => this.alertService.danger(error.error.message))
            ),
        { dispatch: false }
    );

    loginSuccess$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(AuthActions.loginSuccess),
                tap(() => this.alertService.success("Uspešno ste se prijavili."))
            ),
        { dispatch: false }
    );

    signupSuccess$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(AuthActions.signupSuccess),
                tap(() => this.alertService.success("Uspešno ste se registrovali! Možete se prijaviti na svoj nalog."))
            ),
        { dispatch: false }
    );

    logout$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(AuthActions.logout),
                tap(() => this.alertService.info("Uspešno ste se odjavili."))
            ),
        { dispatch: false }
    );

    editUser$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(UserActions.editUserSuccess, PublisherActions.editPublisherFailure),
                tap(() => this.alertService.success("Uspešno ste izmenili podatke."))
            ),
        { dispatch: false }
    );
    
    addAlbum$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(AlbumActions.addAlbumSuccess,),
                tap(() => this.alertService.success("Uspešno ste dodali album."))
            ),
        { dispatch: false }
    );
    
    addPublisher$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(PublisherActions.addPublisherSuccess),
                tap(() => this.alertService.success("Uspešno ste dodali izdavača."))
            ),
        { dispatch: false }
    );
    
    addAlbumToCollection$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(UserAlbumActions.addAlbumToUserSuccess),
                tap(() => this.alertService.success("Uspešno ste dodali album u kolekciju."))
            ),
        { dispatch: false }
    );
    
    updateStickers$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(UserAlbumActions.updateStickersListSuccess),
                tap(() => this.alertService.success("Uspešno ste izmenili listu sličica."))
            ),
        { dispatch: false }
    );
}