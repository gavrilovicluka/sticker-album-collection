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
    numberOfBids: number;
}

export interface AuctionDto {
    productName: string;
    startDate: Date;
    endDate: Date;
    basePrice: number;
    productDescription: string;
}

export enum AuctionStatus {
    ACTIVE = 'active',
    ENDED = 'ended',
    WAITING = 'waiting'
}