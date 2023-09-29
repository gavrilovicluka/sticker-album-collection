import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuctionService } from 'src/app/services/auction/auction.service';
import { catchError, map, mergeMap, of } from "rxjs";
import * as AuctionActions from "../actions/auction.actions";
import * as HttpActions from "../actions/http.actions";

@Injectable()
export class AuctionEffects {

  constructor(private auctionService: AuctionService, private actions$: Actions) { }

  addAuction$ = createEffect(() => this.actions$.pipe(
    ofType(AuctionActions.addAuction),
    mergeMap((action) =>
      this.auctionService.addAuction(action.fd).pipe(
        map((auction) => AuctionActions.addAuctionSuccess({ auction })),
        catchError((error) => {
          if (error.status === 401) {
            return of(HttpActions.unauthorizedError(error));
          } else if (error.status === 403) {
            return of(HttpActions.forbiddenError(error));
          } else {
            return of(AuctionActions.addAuctionFailure(error))
          }
        })
      ))
  ))

}
