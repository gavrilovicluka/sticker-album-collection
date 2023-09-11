import { createReducer, on } from "@ngrx/store";
import * as UserAlbumActions from "../actions/album.actions";
import { UserAlbum } from "src/app/models/user-album";

export interface UserAlbumState {
    userId: number,
    albumId: number,
    missingStickers: number,
    error: any
}

const initialState: UserAlbumState = {
    userId: -1,
    albumId: -1,
    missingStickers: -1,
    error: null
};


export const userAlbumReducer = createReducer(
    initialState,

   

)