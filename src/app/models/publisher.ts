import { Album } from "./album";

export interface Publisher {
    id: number,
    name: string,
    image: string,
    albums: Album[]
}

export interface PublisherDto {
    name: string,
    image: string
}