import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { User } from "src/app/models/user";
import { AuthService } from "src/app/services/auth/auth.service";

export const adminGuard = (): CanActivateFn => {

    const guard: CanActivateFn = () => {

      const router: Router = inject(Router);

      const user: User = JSON.parse(localStorage.getItem('user')!);
  
      if (user == null || !user.isAdmin) {
        router.navigate(['/']);
        return false;
      }
      return true;
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