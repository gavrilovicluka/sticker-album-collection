import { createAction, props } from "@ngrx/store";
import { Album } from "src/app/models/album";
import { Publisher, PublisherDto } from "src/app/models/publisher";

export const selectPublisher = createAction(
    '[Publisher Edit Component] Select Publisher',
    props<{ selectedPublisherId: number }>()
)

// Browser Reload Actions
export const browserReload = createAction(
    '[Album List Component] Browser Reload',
    props<{ publisher: Publisher }>()
);

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


// Get Publisher With Albums Actions
export const getPublisherWithAlbums = createAction(
    '[Albums List Component] Get Publisher With Albums',
    props<{ publisherId: number }>()
);

export const getPublisherWithAlbumsSuccess = createAction(
    '[Publisher Effect] Get Publisher With Albums Success',
    props<{ publisher: Publisher }>()
);

export const getPublisherWithAlbumsFailure = createAction(
    '[Publisher Effect] Get Publisher With Albums Failure',
    props<{ error: any }>()
);


// Add Publisher Actions
export const addPublisher = createAction(
    '[Publisher Add Component] Add Publisher',
    props<{ publisher: PublisherDto }>()
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
    '[Publisher Effect] Edit Publisher Failure',
    props<{ error: any }>()
);


// Add Album To Publisher
export const addAlbumToPublisher = createAction(
    '[Album Add Component] Add Album To Publisher',
    props<{ publisherId: number, album: Album }>()
);

export const addAlbumToPublisherSuccess = createAction(
    '[Publisher Effect] Add Album To Publisher Success',
    props<{ publisher: Publisher }>()
);

export const addAlbumToPublisherFailure = createAction(
    '[Publisher Effect] Add Album To Publisher Failure',
    props<{ error: any }>()
);


//