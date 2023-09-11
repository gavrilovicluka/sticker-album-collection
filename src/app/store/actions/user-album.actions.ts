import { createAction, props } from "@ngrx/store";
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