import { createAction, props } from "@ngrx/store";
import { Album, AlbumDto } from "src/app/models/album";

// Set Album ID
export const selectAlbum = createAction(
    'Select Album',
    props<{ albumId: number }>()
)


// Add Album Actions
export const addAlbum = createAction(
    '[Album Add Component] Add Album',
    props<{ publisherId: number, album: AlbumDto }>()
);

export const addAlbumSuccess = createAction(
    '[Album Effect] Add Album Success',
    props<{ album: Album }>()
);

export const addAlbumFailure = createAction(
    '[Album Effect] Add Album Failure',
    props<{ error: any }>()
);


// Load Albums
export const loadAlbums = createAction(
    '[Album List Home Component] Load Albums',
    props<{ publisherId: number }>()
);

export const loadAlbumsSuccess = createAction(
    '[Album Effect] Load Albums Success',
    props<{ albums: Album[] }>()
);

export const loadAlbumsFailure = createAction(
    '[Album Effect] Load Albums Failure',
    props<{ error: any }>()
);
