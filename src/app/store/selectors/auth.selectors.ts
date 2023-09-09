import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { AuthState } from "../reducers/auth.reducer";

export const selectAuthFeature = createSelector(
    (state: AppState) => state.auth,
    (auth) => auth
);

export interface AuthLinksViewModal {
    isAdmin: boolean;
    isLoggedin: boolean;
}

export const selectIsLoggedIn = createSelector(
    selectAuthFeature,
    (state: AuthState): boolean => state.user?.id !== -1 ? true : false         // potrebno da se promeni
);

export const selectIsAdmin = createSelector(
    selectAuthFeature,
    (state: AuthState): boolean => state.user ? state.user.isAdmin! : false
);

export const selectAuthLinksViewModel = createSelector(
    selectIsAdmin,
    selectIsLoggedIn,
    (isAdmin: boolean, isLoggedIn: boolean): AuthLinksViewModal => {
        return {
            isAdmin: isAdmin,
            isLoggedin: isLoggedIn,
        };
    }
);