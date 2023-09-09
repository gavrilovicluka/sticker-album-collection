import { createAction, props } from "@ngrx/store";
import { Publisher } from "src/app/models/publisher";

// Load Publishers Actions
export const loadPublishers = createAction(
    '[Publisher List Component] Load Publishers'
);

export const loadPublishersSuccess = createAction(
    '[Publisher Effect] Load Publishers Success',
    props<{ publishers: Publisher[] }>()
);

export const loadPublishersFailure = createAction(
    '[Publisher Effect] Load Publishers Failure',
    props<{ error: any }>()
);


// 