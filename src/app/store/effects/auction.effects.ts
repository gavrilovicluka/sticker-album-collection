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

  getAuctions$ = createEffect(() => this.actions$.pipe(
    ofType(AuctionActions.getAuctions),
    mergeMap((action) =>
      this.auctionService.getAuctions().pipe(
        map((auctions) => AuctionActions.getAuctionsSuccess({ auctions })),
        catchError((error) => of(AuctionActions.getAuctionsFailure(error)))
      ))
  ))
  
  getAuctionById$ = createEffect(() => this.actions$.pipe(
    ofType(AuctionActions.getAuctionById),
    mergeMap((action) =>
      this.auctionService.getAuctionById(action.aucionId).pipe(
        map((auction) => AuctionActions.getAuctionByIdSuccess({ auction })),
        catchError((error) => of(AuctionActions.getAuctionByIdFailure(error)))
      ))
  ))

}