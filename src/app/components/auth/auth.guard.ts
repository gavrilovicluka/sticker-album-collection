import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { User } from "src/app/models/user";

export const authGuard = (): CanActivateFn => {

    const guard: CanActivateFn = () => {

      const router: Router = inject(Router);

      const user: User = JSON.parse(localStorage.getItem('user')!);
  
      if (!user) {
        router.navigate(['/']);
        return false;
      }
      return true;
    };

    return guard;
};