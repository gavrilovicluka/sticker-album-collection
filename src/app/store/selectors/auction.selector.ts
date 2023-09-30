import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { AuctionState } from "../reducers/auction.reducer";
import { Auction } from "src/app/models/auction";

export const selectAuctionsFeature = createSelector(
    (state: AppState) => state.auctions,
    (auctions) => auctions
);

export const selectAllAuctions = createSelector(
    selectAuctionsFeature,
    (state: AuctionState) => Object
        .values(state.entities)
        .filter(auction => auction != null)
        // .map(auction => auction as Auction)
        .map(auction => {
            if (typeof auction!.endDate === 'string') {
              return {
                ...auction,
                endDate: new Date(auction!.endDate),
              };
            }
            return auction;
          }) as Auction[] 
);

export const selectAllAuctionsAsDict = createSelector(
    selectAuctionsFeature,
    (state: AuctionState) => state.entities
);

export const selectCurrentAuction = createSelector(
    selectAuctionsFeature,
    (state: AuctionState) => {
      // state.entities[state.selectedAuctionId] ?? null
      const auction = state.entities[state.selectedAuctionId];
      if(!auction) return null;
      return {
        ...auction,
        endDate: new Date(auction.endDate),
        startDate: new Date(auction.startDate),
      }
    }
)