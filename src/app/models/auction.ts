import { Bid } from "./bid";
import { User } from "./user";

export interface Auction {
    id: number;
    productName: string;
    startDate: Date;
    endDate: Date;
    basePrice: number;
    productDescription: string;
    productImage: string;
    user: User;
    bids: Bid[];
    topBid: Bid;
}

export interface AuctionDto {
    productName: string;
    startDate: Date;
    endDate: Date;
    basePrice: number;
    productDescription: string;
}