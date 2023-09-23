import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "../reducers/user.reducer";
import { UserData } from "src/app/models/user";

export const selectUsersFeature = createFeatureSelector<UserState>('user');

export const selectUser = createSelector(
    selectUsersFeature,
  (state: UserState): UserData | null => state.user
);
