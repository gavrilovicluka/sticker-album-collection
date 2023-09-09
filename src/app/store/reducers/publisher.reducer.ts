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
)