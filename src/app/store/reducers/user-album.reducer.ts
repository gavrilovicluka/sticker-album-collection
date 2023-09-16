import { createReducer, on } from "@ngrx/store";
import * as UserAlbumActions from "../actions/user-album.actions";
import { UserAlbum } from "src/app/models/user-album";
import { User } from "src/app/models/user";
import { Album } from "src/app/models/album";
import * as AuthActions from "../actions/auth.actions";

export interface UserAlbumState {
    // user: User | null;
    // // albums: Album[] | null,
    // album: Album[],
    // missingStickers: number,
    // duplicatesStickers: number,
    userAlbums: UserAlbum[];
    error: any
}

const initialState: UserAlbumState = {
    // user: null,
    // album: [],
    // missingStickers: -1,
    // duplicatesStickers: -1,
    userAlbums: [],
    error: null
};


export const userAlbumReducer = createReducer(
    initialState,

    on(UserAlbumActions.getUserAlbumsSuccess, (state, action) => ({
        ...state,
        // albums: action.albums,
        userAlbums: action.userAlbums,
        error: null
    })),

    on(AuthActions.logout, (state, action) => ({
        ...state,
        // albums: action.albums,
        userAlbums: [],
        error: null
    }))





)