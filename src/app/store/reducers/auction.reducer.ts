import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Auction } from 'src/app/models/auction';
import * as AuctionActions from "../actions/auction.actions";

export interface AuctionState extends EntityState<Auction> {
    selectedAuctionId: number;
    error: any;
}

const adapter = createEntityAdapter<Auction>();

const initialState: AuctionState = adapter.getInitialState({
    selectedAuctionId: -1,
    error: null
});

export const auctionReducer = createReducer(
    initialState,

    on(AuctionActions.addAuctionSuccess, (state, action) => adapter.addOne(action.auction, state)),

)


