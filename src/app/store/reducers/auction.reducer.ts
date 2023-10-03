import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Auction } from 'src/app/models/auction';
import * as AuctionActions from "../actions/auction.actions";
import { updateLocale } from 'moment';
import { Bid } from 'src/app/models/bid';

export interface AuctionState extends EntityState<Auction> {
    selectedAuctionId: number;
    selectedDays: number;
    error: any;
}

const adapter = createEntityAdapter<Auction>();

const initialState: AuctionState = adapter.getInitialState({
    selectedAuctionId: -1,
    selectedDays: 0,
    error: null
});

export const auctionReducer = createReducer(
    initialState,

    on(AuctionActions.addAuctionSuccess, (state, action) => adapter.addOne(action.auction, state)),

    on(AuctionActions.setSelectedDays, (state, { selectedDays }) => {
        return { ...state, selectedDays };
    }),

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

    on(AuctionActions.updateBid, (state, { bid }) => {
        const auction = state.entities[bid.auctionId!];

        if (!auction) {
            return state;
        }

        if (auction.bids) {
            const updatedBids: Bid[] = auction.bids.map(_bid => {
                if (_bid.id === bid.id) {
                    return { ..._bid, ...bid };
                }
                return _bid;
            });
            updatedBids.sort((a, b) => b.bidPrice - a.bidPrice);

            const updatedAuction: Auction = {
                ...auction,
                bids: updatedBids
            };

            return adapter.updateOne({ id: auction.id, changes: updatedAuction }, state);
        } else {
            const newTopBid = auction.topBid.bidPrice > bid.bidPrice ? auction.topBid : bid;     // For Auctions List

            const updatedAuction: Auction = {
                ...auction,
                topBid: newTopBid
            };
            return adapter.updateOne({ id: auction.id, changes: updatedAuction }, state);
        }
    }),


)


