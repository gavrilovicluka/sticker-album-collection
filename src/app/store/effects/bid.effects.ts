import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import * as BidActions from "../actions/bid.actions";
import * as HttpActions from "../actions/http.actions";
import { BidService } from "src/app/services/bid/bid.service";

@Injectable()
export class BidEffects {

    constructor(private bidService: BidService, private actions$: Actions) { }

    getUserBids$ = createEffect(() => this.actions$.pipe(
        ofType(BidActions.getUserBids),
        mergeMap((action) =>
            this.bidService.getUserBids(action.startDate, action.endDate).pipe(
                map((bids) => BidActions.getUserBidsSuccess({ bids })),
                catchError((error) => {
                    if (error.status === 401) {
                        return of(HttpActions.unauthorizedError(error));
                    } else if (error.status === 403) {
                        return of(HttpActions.forbiddenError(error));
                    } else {
                        return of(BidActions.getUserBidsFailure(error))
                    }
                })
            ))
    ))

}