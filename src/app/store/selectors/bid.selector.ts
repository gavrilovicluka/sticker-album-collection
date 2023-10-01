import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { BidState } from "../reducers/bid.reducer";
import { Bid } from "src/app/models/bid";
import { selectUserId } from "./auth.selectors";

export const selectBidsFeature = createSelector(
    (state: AppState) => state.bids,
    (bids) => bids
);

export const selectAllBids = createSelector(
    selectBidsFeature,
    (state: BidState) => Object
        .values(state.entities)
        .filter(bid => bid != null)
        .map(bid => {
            if (typeof bid!.bidTime === 'string' && typeof bid!.endDate === 'string') {
                return {
                    ...bid,
                    endDate: new Date(bid!.endDate),
                    bidTime: new Date(bid!.bidTime),
                };
            }
            return bid;
        }) as Bid[]
);

export const selectUserBids = createSelector(
    selectAllBids,
    selectUserId,
    (bids: Bid[], userId) => {
        return bids.filter(bid => bid.bidUserId === userId);
    }
);

export const selectWonBids = createSelector(
    selectUserBids,
    (bids: Bid[]) => {
        return bids.filter(bid => bid.won === true);
    }
);