import { createAction, props } from "@ngrx/store";
import { Bid } from "src/app/models/bid";

// Get User Bids Actions
export const getUserBids = createAction(
    '[User Bids Component] Get User Bids',
    props<{ startDate: string, endDate: string }>()
);

export const getUserBidsSuccess = createAction(
    '[Bid Effect] Get User Bids Success',
    props<{ bids: Bid[] }>()
);

export const getUserBidsFailure = createAction(
    '[Bid Effect] Get User Bids Failure',
    props<{ error: any }>()
);