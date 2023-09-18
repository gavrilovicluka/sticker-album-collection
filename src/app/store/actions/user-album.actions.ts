import { createAction, props } from "@ngrx/store";
import { Album } from "src/app/models/album";
import { UserAlbum } from "src/app/models/user-album";

// Add Album To User
export const addAlbumToUser = createAction(
    '[Album Thumb Home Component] Add Album To User',
    props<{ albumId: number, userId: number }>()
);

export const addAlbumToUserSuccess = createAction(
    '[UserAlbum Effect] Add Album To User Success',
    props<{ userAlbum: UserAlbum }>()
);

export const addAlbumToUserFailure = createAction(
    '[UserAlbum Effect] Add Album To User Failure',
    props<{ error: any }>()
);


// Get User's Albums
export const getUserAlbums = createAction(
    '[User Albums Component] Get Users Albums',
    props<{ userId: number }>()
);

export const getUserAlbumsSuccess = createAction(
    '[UserAlbum Effect] Get Users Albums Success',
    props<{ userAlbums: UserAlbum[] }>()
);

export const getUserAlbumsFailure = createAction(
    '[UserAlbum Effect] Get Users Albums Failure',
    props<{ error: any }>()
);


// Get User Album
export const getUserAlbum = createAction(
    '[User Album Component] Get User Album',
    props<{ userId: number, albumId: number }>()
);

export const getUserAlbumSuccess = createAction(
    '[UserAlbum Effect] Get User Album Success',
    props<{ userAlbum: UserAlbum }>()
);

export const getUserAlbumFailure = createAction(
    '[UserAlbum Effect] Get User Album Failure',
    props<{ error: any }>()
);


// Get Swapping Info Actions
export const getUserAlbumsByAlbumId = createAction(
    '[User Swapping List Component] Get User Albums By Album ID',
    props<{ albumId: number }>()
);

export const getUserAlbumsByAlbumIdSuccess = createAction(
    '[User Album Effect] Get User Albums By Album ID Success',
    props<{ userAlbums: UserAlbum[] }>()
);

export const getUserAlbumsByAlbumIdFailure = createAction(
    '[User Album Effect] Get User Albums By Album ID Failure',
    props<{ error: any }>()
);


// Update Stickers List
export const updateStickersList = createAction(
    '[User Stickers Component] Update Stickers List',
    props<{ fromList: string, stickers: number[], userAlbumId: number }>()
);

export const updateStickersListSuccess = createAction(
    '[User Album Effects] Update Stickers List Success',
    props<{ userAlbum: UserAlbum }>()
);

export const updateStickersListFailure = createAction(
    '[User Album Effects] Update Stickers List Failure',
    props<{ error: any }>()
);