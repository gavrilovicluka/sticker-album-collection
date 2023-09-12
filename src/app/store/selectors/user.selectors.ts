import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "../reducers/user.reducer";
import { AuthState } from "../reducers/auth.reducer";
import { selectAuthFeature } from "./auth.selectors";
import { User } from "src/app/models/user";

export const selectUsers = createFeatureSelector<AuthState>('user');

export const selectUserId = createSelector(
  selectAuthFeature,                                        // !!!! iz auth.selectors
  (userState: AuthState): number => userState.user ? userState.user.id : -1 
);

export const selectUser = createSelector(
  selectAuthFeature,
  (state: AuthState): User | null => state.user 
);
