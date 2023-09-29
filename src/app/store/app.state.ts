import { AlbumState } from "./reducers/album.reducer";
import { AuctionState } from "./reducers/auction.reducer";
import { AuthState } from "./reducers/auth.reducer";
import { PublisherState } from "./reducers/publisher.reducer";
import { UserAlbumState } from "./reducers/user-album.reducer";
import { UserState } from "./reducers/user.reducer";

export interface AppState {
    auth: AuthState,
    publishers: PublisherState,
    albums: AlbumState,
    userAlbums: UserAlbumState,
    user: UserState,
    auctions: AuctionState
}