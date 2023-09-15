import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { map } from "rxjs";
import { User } from "src/app/models/user";
import { AuthService } from "src/app/services/auth/auth.service";
import { AppState } from "src/app/store/app.state";
import { selectIsAdmin } from "src/app/store/selectors/auth.selectors";

export const adminGuard = (): CanActivateFn => {

    const guard: CanActivateFn = () => {

      const router: Router = inject(Router);
      const store: Store<AppState> = inject(Store<AppState>);

      // const user: User = JSON.parse(localStorage.getItem('user')!);
  
      // if (user == null || !user.isAdmin) {
      //   router.navigate(['/']);
      //   return false;
      // }
      // return true;

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

  
// export const roleGuard = (role: 'MANAGER' | 'ADMIN'): CanActivateFn => {

//     const guard: CanActivateFn = () => {
//       const authService: AuthService = inject(AuthService);
//       const router: Router = inject(Router);
  
//       const hasAccess = authService.hasRole(role);
//       return hasAccess ? true : router.createUrlTree(['/unauthorized']);
//     };
  
//     return guard;
//   };