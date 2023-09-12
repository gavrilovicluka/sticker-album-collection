import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/models/user";
import * as UserActions from "../actions/user.actions";

export interface UserState {
    user: User | null;
    error: any
}

const initialState: UserState = {
    user: null,
    error: null
}

export const userReducer = createReducer(
    initialState,

    on(UserActions.editUserSuccess, (state, action) => ({
        ...state,
        user: action.user,
        error: null
    }))

)