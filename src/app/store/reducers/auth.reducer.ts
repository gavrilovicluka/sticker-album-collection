import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/models/user";
import * as AuthActions from "../actions/auth.actions";

export interface AuthState {
    user: User | null;
    error: any;
}

const initialState: AuthState = {
    // user = null,
    user: {     
        id: -1,
        name: "",
        surname: "",
        username: "",
        email: "",
        password: "",
        address: "",
        phoneNumber: "",
        isAdmin: null
    },
    error: null
};

export const authReducer = createReducer(
    initialState,

    on(AuthActions.loginSuccess, AuthActions.signupSuccess, (state, action) => ({
        ...state,
        user: action.user,
        error: null
    })),

    on(AuthActions.loginFailure, AuthActions.signupFailure, (state, action) => ({
        ...state,
        user: {
            id: -1,
            name: "",
            surname: "",
            username: "",
            email: "",
            password: "",
            address: "",
            phoneNumber: "",
            isAdmin: null
        },
        error: action.error
    }))
)

