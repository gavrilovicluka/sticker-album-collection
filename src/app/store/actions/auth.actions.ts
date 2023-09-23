import { createAction, props } from "@ngrx/store";
import { User, UserData, UserRegistrationDto } from "src/app/models/user";
import { UserLoginDto } from "src/app/models/user-login.dto";

// Login User Actions
export const login = createAction(
    '[Login Modal Component] Login User',
    props<{ userLoginDto: UserLoginDto }>()
);

export const loginSuccess = createAction(
    '[Auth Effect] Login User Success',
    props<{ token: string }>()
);

export const loginFailure = createAction(
    '[Auth Effect] Login User Failure',
    props<{ error: any }>()
);


// Logout Actions
export const logout = createAction('[Auth Links Component] Logout User');


// Set Token
export const setToken = createAction(
    '[Auth] Set Token',
    props<{ token: string }>()
);

// Remove Token
export const removeToken = createAction(
    '[Auth] Remove Token'
);

// Set User
export const setUser = createAction(
    '[Auth] Set User',
    props<{ user: User }>()
);


// Sign Up User Actions
export const signup = createAction(
    '[Registration Modal Component] Register User',
    props<{ user: UserRegistrationDto }>()
);

export const signupSuccess = createAction(
    '[Auth Effect] Register User Success',
    props<{ user: User }>()
);

export const signupFailure = createAction(
    '[Auth Effect] Register User Failure',
    props<{ error: any }>()
);


// Browser Reload Actions
export const browserReload = createAction(
    '[App Component] Browser Reload',
    props<{ token: string }>()
);