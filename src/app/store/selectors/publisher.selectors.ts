import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { PublisherState } from "../reducers/publisher.reducer";
import { Publisher } from "src/app/models/publisher";

export const selectPublishersFeature = createSelector(
    (state: AppState) => state.publishers,
    (publishers) => publishers
);

export const selectAllPublishers = createSelector(
    selectPublishersFeature,
    (state: PublisherState) => Object
        .values(state.entities)
        .filter(publisher => publisher != null)
        .map(publisher => publisher as Publisher)
);

export const selectAllPublishersAsDict = createSelector(
    selectPublishersFeature,
    (state: PublisherState) => state.entities
);

export const selectCurrentPublisher = createSelector(
    selectPublishersFeature,
    (state: PublisherState) => state.entities[state.selectedPublisherId] ?? null
)
