import { createReducer, on } from "@ngrx/store";
import { User, UserData } from "src/app/models/user";
import * as AuthActions from "../actions/auth.actions";

export interface AuthState {
    // user: UserData | null;
    token: string;
    error: any;
}

const initialState: AuthState = {
    // user: {     
    //     id: -1,
    //     name: "",
    //     surname: "",
    //     username: "",
    //     email: "",
    //     password: "",
    //     address: "",
    //     phoneNumber: "",
    //     isAdmin: null
    // },
    // user: null,
    token: "",
    error: null
};

export const authReducer = createReducer(
    initialState,

    on(AuthActions.setToken, (state, { token }): AuthState => ({ ...state, token })),

    on(AuthActions.removeToken, (state): AuthState => ({ ...state, token: "" })),

    // on(AuthActions.setUser, (state, { user }): AuthState => ({ ...state, user })),

    on(AuthActions.loginSuccess, (state, action) => ({
        ...state,
        // user: action.user,
        token: action.token,
        error: null
    })),

    on(AuthActions.browserReload, (state, action) => ({
        ...state,
        token: action.token,
        error: null
    })),

    // on(AuthActions.signupSuccess, AuthActions.browserReload, (state, action) => ({
    //     ...state,
    //     // user: action.user,
    //     error: null
    // })),

    on(AuthActions.loginFailure, AuthActions.signupFailure, (state, action) => ({
        ...state,
        // user: {
        //     id: -1,
        //     name: "",
        //     surname: "",
        //     username: "",
        //     email: "",
        //     password: "",
        //     address: "",
        //     phoneNumber: "",
        //     isAdmin: null
        // },
        token: '',
        error: action.error
    })),

    on(AuthActions.logout, (state, action) => {
        return {
            ...state,
            // user: {
            //     id: -1,
            //     name: "",
            //     surname: "",
            //     username: "",
            //     email: "",
            //     password: "",
            //     address: "",
            //     phoneNumber: "",
            //     isAdmin: null,
            // },
            // user: null,
            token: "",
            error: null,
        };
    })
)

