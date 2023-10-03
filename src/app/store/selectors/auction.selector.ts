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

export const selectSoldAuctions = createSelector(
  selectAllAuctions,
  (auctions) => {
    const currentDate = new Date();
    const sortedAuctions = auctions.map(auction => ({ ...auction, bids: Array.isArray(auction.bids) ? [...auction.bids] : [] }));

    sortedAuctions.forEach(auction => {
      if (auction.bids) auction.bids.sort((a, b) => b.bidPrice - a.bidPrice);
    });

    return sortedAuctions.filter(auction => new Date(auction.endDate) < currentDate && auction.numberOfBids > 0);
  }
);

export const selectHotAuctions = createSelector(
  selectAllAuctions,
  (auctions) => {
    const currentDate = new Date();
    const hotAuctions = auctions.map(auction => ({ ...auction, bids: Array.isArray(auction.bids) ? [...auction.bids] : [] }));

    hotAuctions.sort((a, b) => b.bids.length - a.bids.length);

    hotAuctions.forEach(auction => {
      if (auction.bids) auction.bids.sort((a, b) => b.bidPrice - a.bidPrice);
    });

    return hotAuctions.filter(auction => new Date(auction.endDate) > currentDate);
  }
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
    if (!auction) return null;
    return {
      ...auction,
      endDate: new Date(auction.endDate),
      startDate: new Date(auction.startDate),
    }
  }
)