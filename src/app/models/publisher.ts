import { Album } from "./album";

export interface Publisher {
    id: number,
    name: string,
    description: string,
    image: string,
    albums: Album[]
}