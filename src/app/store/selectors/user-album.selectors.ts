import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { UserAlbumState } from "../reducers/user-album.reducer";
import { selectAlbumId } from "./album.selectors";
import { selectUserId } from "./auth.selectors";

export const selectAlbumUserFeature = createSelector(
    (state: AppState) => state.userAlbums,
    (userAlbums) => userAlbums
);

export const selectUserAlbums = createSelector(
    selectAlbumUserFeature,
    (userAlbumsState) => userAlbumsState.userAlbums
);

export const selectUserAlbum = createSelector(
    selectAlbumUserFeature,
    (userAlbumsState) => userAlbumsState.userAlbums[0]
);

export const selectUserAlbumByAlbumId = createSelector(
    selectAlbumUserFeature,
    selectAlbumId,
    // selectUserId,
    (userAlbums: UserAlbumState, albumId: number/*, userId: number*/) => {
        const foundUserAlbum = userAlbums.userAlbums.find(userAlbum => userAlbum.album.id === albumId);
        return foundUserAlbum ?? null;
    }
);