import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { Bid } from "src/app/models/bid";
import * as BidActions from "../actions/bid.actions";

export interface BidState extends EntityState<Bid> {
    selectedBidId: number;
    error: any;
}

const adapter = createEntityAdapter<Bid>();

const initialState: BidState = adapter.getInitialState({
    selectedBidId: -1,
    error: null
});

export const bidReducer = createReducer(
    initialState,

    on(BidActions.getUserBidsSuccess, (state, props) => {
        const { bids } = props;
        return adapter.setAll(bids, state)
    }),
)