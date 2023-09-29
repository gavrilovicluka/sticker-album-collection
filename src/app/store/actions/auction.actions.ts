import { createAction, props } from '@ngrx/store';
import { Auction, AuctionDto } from 'src/app/models/auction';


// Select Auction
export const selectAuction = createAction(
    '[Product View Component] Select Auction',
    props<{ selectedAuctionId: number }>()
)


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

// Get Auctions Actions
export const getAuctions = createAction(
    '[Auction List Component] Get Auctions'
);

export const getAuctionsSuccess = createAction(
    '[Auction Effect] Get Auctions Success',
    props<{ auctions: Auction[] }>()
);

export const getAuctionsFailure = createAction(
    '[Auction Effect] Get Auctions Failure',
    props<{ error: any }>()
);


// Get Auction By ID Actions
export const getAuctionById = createAction(
    '[Product View Component] Get Auction By ID',
    props<{ aucionId: number }>()
);

export const getAuctionByIdSuccess = createAction(
    '[Auction Effect] Get Auction By ID Success',
    props<{ auction: Auction }>()
);

export const getAuctionByIdFailure = createAction(
    '[Auction Effect] Get Auction By ID Failure',
    props<{ error: any }>()
);
