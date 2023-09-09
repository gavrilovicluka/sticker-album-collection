import { AuthState } from "./reducers/auth.reducer";
import { PublisherState } from "./reducers/publisher.reducer";

export interface AppState {
    //movies: MoviesState
    auth: AuthState,
    publishers: PublisherState,
}