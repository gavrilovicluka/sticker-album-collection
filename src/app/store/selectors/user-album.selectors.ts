import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectAlbumUserFeature = createSelector(
    (state: AppState) => state.userAlbums,
    (userAlbums) => userAlbums
);

export const selectUserAlbums = createSelector(
    selectAlbumUserFeature,
    (userAlbumsState) => userAlbumsState.userAlbums
);