import { createReducer, on } from "@ngrx/store";
import * as UserAlbumActions from "../actions/user-album.actions";
import { UserAlbum } from "src/app/models/user-album";
import { User } from "src/app/models/user";
import { Album } from "src/app/models/album";

export interface UserAlbumState {
    // user: User | null;
    // albums: Album[] | null,
    albums: Album[],
    missingStickers: number,
    error: any
}

const initialState: UserAlbumState = {
    // user: null,
    albums: [],

    missingStickers: -1,
    error: null
};


export const userAlbumReducer = createReducer(
    initialState,

    on(UserAlbumActions.getUserAlbumsSuccess, (state, action) => ({
        ...state,
        albums: action.albums,
        error: null
    }))
    
    



)