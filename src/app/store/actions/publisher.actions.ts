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


// Add Publisher Actions
export const addPublisher = createAction(
    '[Publisher Add Component] Add Publisher',
    props<{ publisher: Publisher }>()
);

export const addPublisherSuccess = createAction(
    '[Publisher Effect] Add Publisher Success',
    props<{ publisher: Publisher }>()
);

export const addPublisherFailure = createAction(
    '[Publisher Effect] Add Publishers Failure',
    props<{ error: any }>()
);


// 