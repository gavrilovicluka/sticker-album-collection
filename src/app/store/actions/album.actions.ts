import { createAction, props } from "@ngrx/store";
import { Album } from "src/app/models/album";

// Add Album Actions
export const addAlbum = createAction(
    '[Album Add Component] Add Album',
    props<{ album: Album }>()
);

export const addAlbumSuccess = createAction(
    '[Album Effect] Add Album Success',
    props<{ album: Album }>()
);

export const addAlbumFailure = createAction(
    '[Album Effect] Add Album Failure',
    props<{ error: any }>()
);