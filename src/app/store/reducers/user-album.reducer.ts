import { createReducer, on } from "@ngrx/store";
import * as UserAlbumActions from "../actions/user-album.actions";
import { UserAlbum } from "src/app/models/user-album";
import { User } from "src/app/models/user";
import { Album } from "src/app/models/album";
import * as AuthActions from "../actions/auth.actions";

export interface UserAlbumState {
    userAlbums: UserAlbum[];
    error: any
}

const initialState: UserAlbumState = {
    userAlbums: [],
    error: null
};


export const userAlbumReducer = createReducer(
    initialState,

    on(UserAlbumActions.getUserAlbumsSuccess, (state, action) => ({
        ...state,
        userAlbums: action.userAlbums,
        error: null
    })),

    on(UserAlbumActions.getUserAlbumsByAlbumIdSuccess, (state, action) => ({
        ...state,
        userAlbums: action.userAlbums,
        error: null
    })),

    on(AuthActions.logout, (state, action) => ({
        ...state,
        userAlbums: [],
        error: null
    })),

    on(UserAlbumActions.getUserAlbumSuccess, (state, action) => ({
        ...state,
        userAlbums: [action.userAlbum],
        error: null
    })),

    on(UserAlbumActions.updateStickersListSuccess, (state, action) => {
        const updatedUserAlbums = state.userAlbums.map(userAlbum => {
            if (userAlbum.id === action.userAlbum.id) {
                return { ...userAlbum, ...action.userAlbum };
            }
            return userAlbum;
        });

        return {
            ...state,
            userAlbums: updatedUserAlbums,
            error: null
        };
    }),

)