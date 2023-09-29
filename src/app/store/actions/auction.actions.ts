import { createAction, props } from '@ngrx/store';
import { Auction, AuctionDto } from 'src/app/models/auction';

// Add Auction Actions
export const addAuction = createAction(
    '[Auction Add Component] Add Auction',
    props<{ fd: FormData }>()
);

export const addAuctionSuccess = createAction(
    '[Auction Effect] Add Auction Success',
    props<{ auction: Auction }>()
);

export const addAuctionFailure = createAction(
    '[Auction Effect] Add Auctions Failure',
    props<{ error: any }>()
);
