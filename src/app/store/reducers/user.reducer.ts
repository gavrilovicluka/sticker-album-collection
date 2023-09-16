import { createReducer, on } from "@ngrx/store";
import { User, UserData } from "src/app/models/user";
import * as UserActions from "../actions/user.actions";
import { logout } from "../actions/auth.actions";

export interface UserState {
    user: UserData | null;
    error: any
}

const initialState: UserState = {
    user: null,
    error: null
}

export const userReducer = createReducer(
    initialState,

    on(UserActions.getUserSuccess, (state, action) => ({
        ...state,
        user: action.user,
        error: null
    })),
    
    on(UserActions.editUserSuccess, (state, action) => ({
        ...state,
        user: action.user,
        error: null
    })),

    on(logout, (state, action) => ({
        ...state,
        user: null,
        error: null
    }))

)