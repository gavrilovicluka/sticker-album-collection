import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { UserAlbumState } from "../reducers/user-album.reducer";
import { selectAlbumId } from "./album.selectors";
import { selectUserId } from "./auth.selectors";
import { UserAlbum } from "src/app/models/user-album";
import { SwappingInfo } from "src/app/models/swapping-info";

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
    (state: UserAlbumState, albumId: number) => {
        const foundUserAlbum = state.userAlbums.find(userAlbum => userAlbum.album.id === albumId);
        return foundUserAlbum ?? null;
    }
);

export const selectCurrentUserAlbum = createSelector(
    selectAlbumUserFeature,
    selectAlbumId,
    selectUserId,
    (state: UserAlbumState, albumId: number, userId: number) => {
        const foundUserAlbum = state.userAlbums.find(
            userAlbum => userAlbum &&
                userAlbum.album && userAlbum.album.id === albumId &&
                userAlbum.user && userAlbum.user.id === userId
        );
        return foundUserAlbum ?? null;
    }
);

export const selectSwappingInfoWithOffer = createSelector(
    selectUserAlbums,
    selectUserId,
    (userAlbums: UserAlbum[], userId: number) => {

        const loggedUserAlbum = userAlbums.find((userAlbum) => userAlbum && userAlbum?.user?.id === userId);

        if (!loggedUserAlbum) {
            return [];
        }

        return userAlbums
            .filter(userAlbum => userAlbum && userAlbum.user && userAlbum.user.id !== userId)
            .map(userAlbum => {

                const stickersForMe = loggedUserAlbum.missingStickers.filter(sticker => {
                    if (!userAlbum.duplicatesStickers || !userAlbum.user) {
                        return false;
                    }
                    return userAlbum.duplicatesStickers.includes(sticker);
                });

                const stickersToOffer = loggedUserAlbum.duplicatesStickers.filter(sticker => {
                    if (!userAlbum.missingStickers || !userAlbum.user) {
                        return false;
                    }
                    return userAlbum.missingStickers.includes(sticker);
                });

                const possibleSwap = Math.min(stickersForMe.length, stickersToOffer.length);

                const swappingInfo: SwappingInfo = {
                    userId: userAlbum.user.id,
                    username: userAlbum.user.username,
                    stickersForMe: stickersForMe, //?.length || 0,
                    stickersToOffer: stickersToOffer, //?.length || 0
                    possibleSwap: possibleSwap
                }
                return swappingInfo;

            });

    }
);

