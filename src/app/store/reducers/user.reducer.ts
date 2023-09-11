import { createReducer } from "@ngrx/store";
import { User } from "src/app/models/user";

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

   

)