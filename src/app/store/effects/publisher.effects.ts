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
                map((publishers) => PublisherActions.loadPublishersSuccess({publishers})),            
                catchError((error) => of(PublisherActions.loadPublishersFailure(error)))
            ))
    ))
}