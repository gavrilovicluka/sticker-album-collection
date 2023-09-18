import { AlbumState } from "./reducers/album.reducer";
import { AuthState } from "./reducers/auth.reducer";
import { PublisherState } from "./reducers/publisher.reducer";
import { StickerState } from "./reducers/sticker.reducer";
import { SwappingInfoState } from "./reducers/swapping-info.reducer";
import { UserAlbumState } from "./reducers/user-album.reducer";
import { UserState } from "./reducers/user.reducer";

export interface AppState {
    auth: AuthState,
    publishers: PublisherState,
    albums: AlbumState,
    userAlbums: UserAlbumState,
    user: UserState,
    stickers: StickerState,
    swappingInfos: SwappingInfoState
}