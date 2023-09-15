import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { map } from "rxjs";
import { User } from "src/app/models/user";
import { AppState } from "src/app/store/app.state";
import { selectIsLoggedIn } from "src/app/store/selectors/auth.selectors";

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
      map((isLoggedIn: boolean) => {
        if (isLoggedIn) {
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