import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { SwappingInfoState } from "../reducers/swapping-info.reducer";
import { SwappingInfo } from "src/app/models/swapping-info";
import { selectUserId } from "./auth.selectors";

export const selectSwappingInfoFeature = createSelector(
    (state: AppState) => state.swappingInfos,
    (swappingInfos) => swappingInfos
);

export const selectAllSwappingInfo = createSelector(
    selectSwappingInfoFeature,
    (state: SwappingInfoState) => Object
        .values(state.entities)
        .filter(swappingInfo => swappingInfo != null)
        .map(swappingInfo => swappingInfo as SwappingInfo)
);

// export const selectSwappingInfoWithOffer = createSelector(
//     selectAllSwappingInfo,
//     selectUserId,
//     (swappingInfos: SwappingInfo[], userId: number) => {
        
//       return swappingInfos.map(info => {
//         const commonMissingStickers = info.numOfStickersForHim.filter(sticker =>
//           info.duplicatesStickers.includes(sticker) && info.user.id !== props.userId
//         );
  
//         return {
//           ...info,
//           commonMissingStickersCount: commonMissingStickers.length
//         };
//       });
//     }
//   );