import { Album } from "./album";
import { User } from "./user";

export interface UserAlbum {
    user: User,
    album: Album,
    missingStickers: number,
    duplicatesStickers: number
}