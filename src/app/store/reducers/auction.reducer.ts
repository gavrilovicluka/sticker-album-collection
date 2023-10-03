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

    on(AuctionActions.getAuctionsSuccess,
        AuctionActions.getAuctionsWithFilterSuccess,
        AuctionActions.getHotAuctionsSuccess,
        (state, props) => {
            const { auctions } = props;
            return adapter.setAll(auctions, state)
        }),

    on(AuctionActions.getAuctionByIdSuccess, (state, action) => adapter.addOne(action.auction, state)),

    on(AuctionActions.selectAuction, (state, { selectedAuctionId }) => {
        return { ...state, selectedAuctionId: selectedAuctionId };
    }),

    on(AuctionActions.getAuctionByIdSuccess, (state, { auction }) => {

        const auction1 = state.entities[auction.id];

        if (auction1) {
            const updatedAuction: Auction = {
                ...auction1,
                bids: [...auction.bids],
                user: auction.user
            };
            return adapter.upsertOne(updatedAuction, state);
        }
        return state;
    }),

    on(AuctionActions.browserReload, (state, action) => ({
        ...state,
        entities: { [action.auction.id]: action.auction },
        error: null
    })),

)


