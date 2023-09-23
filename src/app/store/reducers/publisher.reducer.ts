import { createReducer, on } from "@ngrx/store";
import * as PublisherActions from "../actions/publisher.actions";
import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { Publisher } from "src/app/models/publisher";
import * as AlbumActions from "../actions/album.actions";

export interface PublisherState extends EntityState<Publisher> {
    selectedPublisherId: number;
    error: any;
}

const adapter = createEntityAdapter<Publisher>();

const initialState: PublisherState = adapter.getInitialState({
    selectedPublisherId: -1,
    error: null
});


export const publisherReducer = createReducer(
    initialState,

    on(PublisherActions.loadPublishersSuccess, (state, props) => {
        const { publishers } = props;
        return adapter.setAll(publishers, state)
    }),


    on(PublisherActions.addPublisherSuccess, (state, action) => adapter.addOne(action.publisher, state)),

    on(PublisherActions.getPublisherSuccess, (state, action) => adapter.addOne(action.publisher, state)),

    on(PublisherActions.getPublisherWithAlbumsSuccess, (state, { publisher }) => adapter.upsertOne(publisher, state)),

    on(PublisherActions.editPublisherSuccess, (state, action) => {
        const update = {
            id: action.publisher.id,
            changes: action.publisher
        }
        return adapter.updateOne(update, state);
    }),

    on(PublisherActions.selectPublisher, (state, { selectedPublisherId }) => {
        return { ...state, selectedPublisherId: selectedPublisherId };
    }),

    on(PublisherActions.browserReload, (state, action) => ({
        ...state,
        entities: { [action.publisher.id]: action.publisher },
        error: null
    })),

    on(AlbumActions.addAlbumSuccess, (state, { album }) => {

        const publisherId = album.publisher.id;
        console.log(album)
        console.log(publisherId)
        const publisher = state.entities[publisherId];
        console.log(publisher)
        

        if (publisher) {
            const updatedPublisher = {
                ...publisher,
                albums: [...publisher.albums, album]
            };
            return adapter.upsertOne(updatedPublisher, state);
        }
        return state;
    }),


    // on(PublisherActions.addAlbumToPublisher, (state, action) => {
    //     const update = {
    //         id: action.publisherId,
    //         changes: action.album
    //     }
    //    return adapter.updateOne(update, state);
    // })
)