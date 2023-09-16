import { Publisher } from "./publisher";

export interface Album {
    id: number, 
    name: string,
    stickersNumber: number,
    year: number,
    imageUrl: string
    publisher: Publisher
}

export interface AlbumDto {
    name: string,
    stickersNumber: number,
    year: number,
    imageUrl: string
}