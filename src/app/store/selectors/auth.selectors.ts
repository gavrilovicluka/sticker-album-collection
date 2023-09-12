import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { AuthState } from "../reducers/auth.reducer";
import { User } from "src/app/models/user";

export const selectAuthFeature = createSelector(
    (state: AppState) => state.auth,
    (auth) => auth
);

export interface AuthLinksViewModal {
    userId: number;
    isAdmin: boolean;
    isLoggedin: boolean;
}

export const selectUserId = createSelector(
    selectAuthFeature,
    (state: AuthState): number => state.user ? state.user.id : -1         // potrebno da se promeni
);

export const selectIsLoggedIn = createSelector(
    selectAuthFeature,
    (state: AuthState): boolean => state.user?.id !== -1 ? true : false         // potrebno da se promeni
);

export const selectIsAdmin = createSelector(
    selectAuthFeature,
    (state: AuthState): boolean => state.user ? state.user.isAdmin! : false
);

export const selectAuthLinksViewModel = createSelector(
    selectUserId,
    selectIsAdmin,
    selectIsLoggedIn,
    (userId: number, isAdmin: boolean, isLoggedIn: boolean): AuthLinksViewModal => {
        return {
            userId: userId, 
            isAdmin: isAdmin,
            isLoggedin: isLoggedIn,
        };
    }
);