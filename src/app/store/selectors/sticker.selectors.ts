// import { createFeatureSelector, createSelector } from '@ngrx/store';
// import { AppState } from '../app.state';
// import { StickerState } from '../reducers/sticker.reducer';

// export const selectStickersFeature = createSelector(
//     (state: AppState) => state.stickers,
//     (stickers) => stickers
// );

// export const selectMissingStickers = createSelector(
//     selectStickersFeature,
//     (state: StickerState): number[] => {
//         // state.missingStickers


//         // const sortedStickers = [...state.missingStickers];
//         // return sortedStickers.sort((a, b) => a - b);

//         const uniqueStickers = [...new Set(state.missingStickers)];
//         const sortedStickers = uniqueStickers.sort((a, b) => a - b);
//         return sortedStickers;
//     }
// );
