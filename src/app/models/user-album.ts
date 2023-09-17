import { Album } from "./album";
import { User } from "./user";

export interface UserAlbum {
    id: number,
    user: User,
    album: Album,
    missingStickers: number[],
    duplicatesStickers: number[]
}