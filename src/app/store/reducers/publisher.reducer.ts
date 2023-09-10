import { createReducer, on } from "@ngrx/store";
import * as PublisherActions from "../actions/publisher.actions";
import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { Publisher } from "src/app/models/publisher";

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

    on(PublisherActions.loadPublishersSuccess, (state, { publishers }) => adapter.setAll(publishers, state)),

    on(PublisherActions.addPublisherSuccess, (state, action) => adapter.addOne(action.publisher, state)),

    on(PublisherActions.getPublisherSuccess, (state, action) => adapter.addOne(action.publisher, state)),

    on(PublisherActions.editPublisherSuccess, (state, action) => {
        const update = {
            id: action.publisher.id,
            changes: action.publisher
        }
        return adapter.updateOne(update, state);
    }),

    on(PublisherActions.selectPublisher, (state, { selectedPublisherId }) => {
        return { ...state, selectedPublisherId: selectedPublisherId };
    })
)