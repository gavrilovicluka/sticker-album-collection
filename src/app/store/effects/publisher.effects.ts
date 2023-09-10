import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import * as PublisherActions from "../actions/publisher.actions";
import { PublisherService } from "src/app/services/publisher/publisher.service";

@Injectable()
export class PublisherEffect {

    constructor(private publisherService: PublisherService, private actions$: Actions) { }

    loadPublishers$ = createEffect(() => this.actions$.pipe(
        ofType(PublisherActions.loadPublishers),
        mergeMap((action) =>
            this.publisherService.loadPublishers().pipe(
                map((publishers) => PublisherActions.loadPublishersSuccess({ publishers })),
                catchError((error) => of(PublisherActions.loadPublishersFailure(error)))
            ))
    ))

    addPublisher$ = createEffect(() => this.actions$.pipe(
        ofType(PublisherActions.addPublisher),
        mergeMap((action) =>
            this.publisherService.addPublisher(action.publisher).pipe(
                map((publisher) => PublisherActions.addPublisherSuccess({ publisher })),
                catchError((error) => of(PublisherActions.addPublisherFailure(error)))
            ))
    ))

    editPublisher$ = createEffect(() => this.actions$.pipe(
        ofType(PublisherActions.editPublisher),
        mergeMap((action) =>
            this.publisherService.editPublisher(action.publisher).pipe(
                map((publisher) => PublisherActions.editPublisherSuccess({ publisher })),
                catchError((error) => of(PublisherActions.editPublisherFailure(error)))
            ))
    ))

    getPublisher$ = createEffect(() => this.actions$.pipe(
        ofType(PublisherActions.getPublisher),
        mergeMap((action) =>
            this.publisherService.getPublisher(action.selectedPublisherId).pipe(
                map((publisher) => PublisherActions.getPublisherSuccess({ publisher })),
                catchError((error) => of(PublisherActions.getPublisherFailure(error)))
            ))
    ))

    addAlbumToPublisher$ = createEffect(() => this.actions$.pipe(
        ofType(PublisherActions.addAlbumToPublisher),
        mergeMap((action) =>
            this.publisherService.addAlbumToPublisher(action.album, action.publisherId).pipe(
                map((publisher) => PublisherActions.addAlbumToPublisherSuccess({ publisher })),
                catchError((error) => of(PublisherActions.addAlbumToPublisherFailure(error)))
            ))
    ))

}