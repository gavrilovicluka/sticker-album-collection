import { Publisher } from "./publisher";

export interface Album {
    id: number, 
    name: string,
    stickersNumber: number,
    year: number,
    image: string,
    publisherId: number
    //publisher: Publisher
}