import { createAction, props } from "@ngrx/store";
import { SwappingInfo } from "src/app/models/swapping-info";

// Get Swapping Info Actions
export const getSwappingInfo = createAction(
    '[Swapping List Component] Get Swapping Info',
    props<{ albumId: number }>()
);

export const getSwappingInfoSuccess = createAction(
    '[Swapping Info Effect] Get Swapping Info Success',
    props<{ swappingInfos: SwappingInfo[] }>()
);

export const getSwappingInfoFailure = createAction(
    '[Swapping Info Effect] Get Swapping Info Failure',
    props<{ error: any }>()
);