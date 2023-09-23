import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { AuthState } from "../reducers/auth.reducer";
import { DecodedToken } from "src/app/models/decoded-token";
import jwt_decode from 'jwt-decode';
import { UserRoles } from "src/app/models/user-roles.enum";

export const selectAuthFeature = createSelector(
    (state: AppState) => state.auth,
    (auth) => auth
);

export interface AuthLinksViewModal {
    userId: number;
    isAdmin: boolean;
    isLoggedin: boolean;
}

export const selectUserToken = createSelector(
    selectAuthFeature,
    (state: AuthState): string => state.token
);

export const selectIsLoggedIn = createSelector(
    selectAuthFeature,
    (state: AuthState): boolean => state.token ? true : false
);

export const selectUserRole = createSelector(
    selectAuthFeature,
    (state: AuthState) => {
        if (state.token) {
            const decodedToken: DecodedToken = jwt_decode(state.token);
            return decodedToken.role;
        }
        return null;
    }
)

export const selectUserId = createSelector(
    selectAuthFeature,
    selectUserToken,
    (state: AuthState) => {
        if (state.token) {
            const decodedToken: DecodedToken = jwt_decode(state.token);
            return decodedToken.sub;
        }
        return -1;
    }
)

export const selectIsAdmin = createSelector(
    selectUserRole,
    (userRole): boolean => userRole === UserRoles.ADMIN
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