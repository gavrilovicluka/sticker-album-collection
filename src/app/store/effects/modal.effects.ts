import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as fromAuthActions from '../actions/auth.actions';
import { tap } from 'rxjs/operators';
import { ModalService } from 'src/app/components/auth/modal.service';

@Injectable()
export class ModalEffects {

    constructor(private actions$: Actions, private modalService: ModalService) { }

    hideLoginModal$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(fromAuthActions.loginSuccess),
                tap(() => this.modalService.closeModal(1))
            ),
        { dispatch: false }
    );

    hideRegistrationModal$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(fromAuthActions.signupSuccess),
                tap(() => this.modalService.closeModal(2))
            ),
        { dispatch: false }
    );

}
