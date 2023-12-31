import { Auction } from "./auction";
import { User } from "./user";

export interface Bid {
    id: number,
    bidPrice: number,
    bidTime: Date
    bidUserId: number,
    bidUsername: string,
    bidUserAddress: string,
    bidUserPhoneNumber: string,
    bidUserEmail: string,
    auctionId?: number,
    productName?: string,
    productDescription?: string,
    endDate?: Date,
    won?: boolean,
    auction: Auction
}