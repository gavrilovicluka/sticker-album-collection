import { createAction, props } from '@ngrx/store';
import { Auction, AuctionDto } from 'src/app/models/auction';
import { Bid } from 'src/app/models/bid';


// Select Auction
export const selectAuction = createAction(
    '[Product View Component] Select Auction',
    props<{ selectedAuctionId: number }>()
)


// Browser Reload Actions
export const browserReload = createAction(
    '[Auction View Component] Browser Reload',
    props<{ auction: Auction }>()
);


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
    '[Auction List Component] Get Auctions',
    props<{ auctionType: string }>()
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


// Make New Bid Actions
export const makeBid = createAction(
    '[Auction List Component] Make Bid',
    props<{ bidPrice: number, auctionId: number }>()
);

export const makeBidSuccess = createAction(
    '[Auction Effect] Make Bid Success',
    props<{ bid: Bid }>()
);

export const makeBidFailure = createAction(
    '[Auction Effect] Make Bid Failure',
    props<{ error: any }>()
);


// Get Auctions With Filter
export const getAuctionsWithFilter = createAction(
    '[User Auctions Component] Get Auctions With Filter',
    props<{ startDate: string, endDate: string }>()
);

export const getAuctionsWithFilterSuccess = createAction(
    '[Auction Effect] Get Auctions With Filter Success',
    props<{ auctions: Auction[] }>()
);

export const getAuctionsWithFilterFailure = createAction(
    '[Auction Effect] Get Auctions With Filter Failure',
    props<{ error: any }>()
);


// Get Auctions With Filter
export const getHotAuctions = createAction(
    '[Home1 Component] Get Hot Auctions',
    props<{ numberOfAuctions: number }>()
);

export const getHotAuctionsSuccess = createAction(
    '[Auction Effect] Get Hot Auctions Success',
    props<{ auctions: Auction[] }>()
);

export const getHotAuctionsFailure = createAction(
    '[Auction Effect] Get Hot Auctions Failure',
    props<{ error: any }>()
);

