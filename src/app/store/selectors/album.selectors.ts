import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { AlbumState } from "../reducers/album.reducer";
import { Album } from "src/app/models/album";

export const selectAlbumsFeature = createSelector(
    (state: AppState) => state.albums,
    (albums) => albums
);

export const selectAllAlbums = createSelector(
    selectAlbumsFeature,
    (state: AlbumState) => Object
        .values(state.entities)
        .filter(album => album != null)
        .map(album => <Album>album)
);

export const selectAllAlbumsAsDict = createSelector(
    selectAlbumsFeature,
    (state: AlbumState) => state.entities
);

export const selectAlbumId = createSelector(
    selectAlbumsFeature,
    (state: AlbumState) => state.selectedAlbumId
);

export const selectCurrentAlbum = createSelector(
    selectAlbumsFeature,
    selectAlbumId,
    (state: AlbumState, albumId: number) => state.entities[albumId] ?? null
)
