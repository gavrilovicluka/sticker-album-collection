import { createSelector } from "@ngrx/store";
import { selectIsAdmin, selectIsLoggedIn } from "./auth.selectors";

export interface HeaderViewModel {
  isAdmin: boolean;
  isLoggedin: boolean;
}

export const selectHeaderViewModel = createSelector(
  selectIsAdmin,
  selectIsLoggedIn,
  (isAdmin: boolean, isLoggedIn: boolean): HeaderViewModel => {
    return {
      isAdmin: isAdmin,
      isLoggedin: isLoggedIn,
    };
  }
);