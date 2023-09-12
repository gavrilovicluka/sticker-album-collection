import { createAction, props } from "@ngrx/store";
import { User, UserEdit } from "src/app/models/user";

// Edit User Actions
export const editUser = createAction(
    '[User Profile Component] Edit User',
    props<{ user: UserEdit }>()
);

export const editUserSuccess = createAction(
    '[Auth Effect] Edit User Success',
    props<{ user: User }>()
);

export const editUserFailure = createAction(
    '[Auth Effect] Edit User Failure',
    props<{ error: any }>()
);