import { createAction, props } from "@ngrx/store";
import { User, UserData, UserEdit } from "src/app/models/user";

// Get User Actions
export const getUser = createAction(
    '[User Profile Component] Get User',
    props<{ userId: number }>()
);

export const getUserSuccess = createAction(
    '[User Effect] Get User Success',
    props<{ user: UserData }>()
);

export const getUserFailure = createAction(
    '[User Effect] Get User Failure',
    props<{ error: any }>()
);


// Edit User Actions
export const editUser = createAction(
    '[User Profile Component] Edit User',
    props<{ userId: number, user: UserEdit }>()
);

export const editUserSuccess = createAction(
    '[Auth Effect] Edit User Success',
    props<{ user: User }>()
);

export const editUserFailure = createAction(
    '[Auth Effect] Edit User Failure',
    props<{ error: any }>()
);