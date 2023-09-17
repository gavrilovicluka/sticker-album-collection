import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { Album } from "src/app/models/album";
import * as AlbumActions from "../actions/album.actions";

export interface AlbumState extends EntityState<Album> {
    selectedAlbumId: number;
    error: any;
}

const adapter = createEntityAdapter<Album>();

const initialState: AlbumState = adapter.getInitialState({
    selectedAlbumId: -1,
    error: null
});


export const albumReducer = createReducer(
    initialState,

    on(AlbumActions.loadAlbumsSuccess, (state, { albums }) => adapter.setAll(albums, state)),

    on(AlbumActions.addAlbumSuccess, (state, action) => adapter.addOne(action.album, state)),

    // on(AlbumActions.getAlbumSuccess, (state, action) => adapter.addOne(action.album, state)),

    // on(AlbumActions.editAlbumSuccess, (state, action) => {
    //     const update = {
    //         id: action.album.id,
    //         changes: action.album
    //     }
    //     return adapter.updateOne(update, state);
    // }),

    on(AlbumActions.selectAlbum, (state, { albumId }) => {
        return { ...state, selectedAlbumId: albumId };
    })
)