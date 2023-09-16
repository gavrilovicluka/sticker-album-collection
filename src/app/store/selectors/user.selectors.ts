import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "../reducers/user.reducer";
import { AuthState } from "../reducers/auth.reducer";
import { selectAuthFeature } from "./auth.selectors";
import { User, UserData } from "src/app/models/user";

export const selectUsersFeature = createFeatureSelector<UserState>('user');

// export const selectUserId = createSelector(
//   selectAuthFeature,                                        // !!!! iz auth.selectors
//   (userState: AuthState): number => userState.user ? userState.user.id : -1 
// );

export const selectUser = createSelector(
    selectUsersFeature,
  (state: UserState): UserData | null => state.user
);
