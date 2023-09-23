import { createReducer, on } from "@ngrx/store";
import { User, UserData } from "src/app/models/user";
import * as AuthActions from "../actions/auth.actions";

export interface AuthState {
    token: string;
    error: any;
}

const initialState: AuthState = {
    token: "",
    error: null
};

export const authReducer = createReducer(
    initialState,

    on(AuthActions.setToken, (state, { token }): AuthState => ({ ...state, token })),

    on(AuthActions.removeToken, (state): AuthState => ({ ...state, token: "" })),

    on(AuthActions.loginSuccess, (state, action) => ({
        ...state,
        token: action.token,
        error: null
    })),

    on(AuthActions.browserReload, (state, action) => ({
        ...state,
        token: action.token,
        error: null
    })),

    on(AuthActions.loginFailure, AuthActions.signupFailure, (state, action) => ({
        ...state,
        token: '',
        error: action.error
    })),

    on(AuthActions.logout, (state, action) => {
        return {
            ...state,
            token: "",
            error: null,
        };
    })
)

