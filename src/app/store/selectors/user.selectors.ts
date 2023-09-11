import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "../reducers/user.reducer";
import { AuthState } from "../reducers/auth.reducer";
import { selectAuthFeature } from "./auth.selectors";

export const selectUsers = createFeatureSelector<AuthState>('user');

export const selectUserId = createSelector(
  selectAuthFeature,                                        // !!!! iz auth.selectors
  (userState: AuthState): number => userState.user ? userState.user.id : -1 
);

