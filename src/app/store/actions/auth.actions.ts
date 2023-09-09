import { createAction, props } from "@ngrx/store";
import { User, UserRegistration } from "src/app/models/user";

// Login User Actions
export const login = createAction(
    '[Login Modal Component] Login User',
    props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
    '[Auth Effect] Login User Success',
    props<{ user: User }>()
);

export const loginFailure = createAction(
    '[Auth Effect] Login User Failure',
    props<{ error: any }>()
);


// Sign Up User Actions
export const signup = createAction(
    '[Registration Modal Component] Register User',
    props<{ user: User }>()                                 // za sad je tip User umesto UserRegistration
);

export const signupSuccess = createAction(
    '[Auth Effect] Register User Success',
    props<{ user: User }>()
);

export const signupFailure = createAction(
    '[Auth Effect] Register User Failure',
    props<{ error: any }>()
);


// Logout Actions
export const logout = createAction('[Auth Links Component] Logout User');

// Browser Reload Actions
export const browserReload = createAction(
    '[App Component] Browser Reload',
    props<{ user: User }>()
);