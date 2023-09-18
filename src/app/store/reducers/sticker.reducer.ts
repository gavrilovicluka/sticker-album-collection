// import { createReducer, on } from '@ngrx/store';
// import * as StickersActions from '../actions/sticker.actions';

// export interface StickerState {
//   missingStickers: number[];
//   error: any
// }

// // export interface StickerState {
// //   stickersLists: StickersList[];
// //   error: any;
// // }

// // export interface StickersList {
// //   id: number;
// //   missingStickers: number[];
// // }

// export const initialState: StickerState = {
//   missingStickers: [],
//   error: null
// };

// export const stickerReducer = createReducer(
//   initialState,

//   on(StickersActions.addMissingStickers, (state, action) => ({
//     ...state,
//     missingStickers: [...state.missingStickers, ...action.stickers],
//   })),

//   on(StickersActions.removeMissingStickers, (state, action) => ({
//     ...state,
//     missingStickers: state.missingStickers.filter(sticker => !action.stickers.includes(sticker))    // !!!!! plus ne azurira lepo state
//   })),

//   on(StickersActions.addMissingStickers, StickersActions.removeMissingStickers, (state, action) => ({
//     // const missingStickers = [...state.missingStickers, ...action.stickers];
//     // return { ...state, missingStickers };
//     ...state,
//     missingStickers: [...state.missingStickers, ...action.stickers],
//   })),

//   on(StickersActions.getMissingStickersSuccess, (state, action) => ({
//     ...state,
//     missingStickers: action.stickers,
//     error: null
//   }))
// );



