import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { map } from "rxjs";
import { AppState } from "src/app/store/app.state";
import { selectIsAdmin } from "src/app/store/selectors/auth.selectors";

export const adminGuard = (): CanActivateFn => {

  const guard: CanActivateFn = () => {

    const router: Router = inject(Router);
    const store: Store<AppState> = inject(Store<AppState>);

    return store.select(selectIsAdmin).pipe(
      map((isAdmin: boolean) => {
        if (isAdmin) {
          return true;
        } else {
          router.navigate(['/']);
          return false;
        }
      })
    )

  };

  return guard;
};