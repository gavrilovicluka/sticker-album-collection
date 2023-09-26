import { createAction, props } from '@ngrx/store';

export const forbiddenError = createAction(
    '[HTTP] Forbidden Error',
    props<{ error: any }>()
);

export const unauthorizedError = createAction(
    '[HTTP] Unauthorized Error',
    props<{ error: any }>()
);
