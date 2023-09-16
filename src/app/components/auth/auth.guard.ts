import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { map, mergeMap, withLatestFrom } from "rxjs";
import { AppState } from "src/app/store/app.state";
import { selectIsAdmin, selectIsLoggedIn } from "src/app/store/selectors/auth.selectors";

export const authGuard = (): CanActivateFn => {

  const guard: CanActivateFn = () => {

    const store: Store<AppState> = inject(Store<AppState>);
    const router: Router = inject(Router);

    // const user: User = JSON.parse(localStorage.getItem('user')!);

    // if (!user) {
    //   router.navigate(['/']);
    //   return false;
    // }
    // return true;

    return store.select(selectIsLoggedIn).pipe(
      withLatestFrom(store.select(selectIsAdmin)),
      map((([isLoggedIn, isAdmin]) => {
        if (isLoggedIn && !isAdmin) {
          return true;
        } else if (isLoggedIn && isAdmin) {
          router.navigate(['/admin/publishers']);
          return false;
        } else {
          router.navigate(['/']);
          return false;
        }
      }))
    )

  };

  return guard;
};