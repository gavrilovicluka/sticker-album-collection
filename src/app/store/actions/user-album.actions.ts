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
    props<{ albums: Album[] }>() 
);

export const getUserAlbumsFailure = createAction(
    '[UserAlbum Effect] Get Users Albums Failure',
    props<{ error: any }>()
);


//