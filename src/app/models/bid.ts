import { User } from "./user";

export interface Bid {
    id: number,
    bidPrice: number,
    bidTime: Date
    bidUserId: number,
    bidUsername: string,
    bidUserAddress: string,
    bidUserPhoneNumber: string,
    bidUserEmail: string
}