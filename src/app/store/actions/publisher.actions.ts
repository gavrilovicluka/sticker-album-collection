import { createAction, props } from "@ngrx/store";
import { Publisher } from "src/app/models/publisher";

export const selectPublisher = createAction(
    '[Publisher Edit Component] Select Publisher',
    props<{ selectedPublisherId: number }>()
)

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


// Get Publisher Actions
export const getPublisher = createAction(
    '[Publisher Edit Component] Get Publisher',
    props<{ selectedPublisherId: number }>()
);

export const getPublisherSuccess = createAction(
    '[Publisher Effect] Get Publisher Success',
    props<{ publisher: Publisher }>()
);

export const getPublisherFailure = createAction(
    '[Publisher Effect] Get Publisher Failure',
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


// Edit Publisher Actions
export const editPublisher = createAction(
    '[Publisher Edit Component] Edit Publisher',
    props<{ publisher: Publisher }>()
);

export const editPublisherSuccess = createAction(
    '[Publisher Effect] Edit Publisher Success',
    props<{ publisher: Publisher }>()
);

export const editPublisherFailure = createAction(
    '[Publisher Effect] Edit Publishers Failure',
    props<{ error: any }>()
);


//