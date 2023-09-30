import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import * as AuctionActions from 'src/app/store/actions/auction.actions';
import { selectCurrentAuction } from 'src/app/store/selectors/auction.selector';
import { Auction } from 'src/app/models/auction';
import { Observable, of } from 'rxjs';
import { selectIsLoggedIn } from 'src/app/store/selectors/auth.selectors';
import { MatDialog } from '@angular/material/dialog';
import { BidDialogComponent } from '../bid-dialog/bid-dialog.component';


interface Product {
  userName: string;
  userId: string;
  userAddress: string;
  userPhone: string;
  userCity: string;
  startDateTime: Date;
  endDateTime: Date;
  productName: string;
  productDescription: string;
  basePrice: number;
  image: string;
  bids: Bid[];

}

interface Bid {
  bidPrice: number;
  bidTime: string;
  userId: string;
  userName: string;
  productId: string;
}

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {

  product: Product = {
    userName: 'username1',
    userId: '1',
    userAddress: 'adresa 1',
    userPhone: '061234543',
    userCity: 'Nis',
    startDateTime: new Date('2023-09-28'),
    endDateTime: new Date('2023-10-01'),
    productName: 'Product name 1',
    productDescription: 'Some description for product 1... Some description for product 1... Some description for product 1...',
    basePrice: 1000,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpyQ_cUlRMTHpi6h4oL8sOrGRJA5tmLGE7DQ&usqp=CAU',
    bids: [],
  }

  currentTopBid?: Bid;
  top10Bids?: Bid[];

  auction$: Observable<Auction | null> = of();
  auctionId?: number;
  baseUrl: string = 'http://localhost:3000';
  currentPrice?: number;
  isLoggedIn?: boolean;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.auctionId = parseInt(this.route.snapshot.paramMap.get('auctionId')!);

    if (this.auctionId) {
      this.store.dispatch(AuctionActions.selectAuction({ selectedAuctionId: this.auctionId }));
      this.store.dispatch(AuctionActions.getAuctionById({ aucionId: this.auctionId }));

      this.auction$ = this.store.select(selectCurrentAuction) //.subscribe(x => console.log(x));
    }

    this.store.select(selectIsLoggedIn).subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn)

  }


  openDialog(minPrice: number): void {

    if (!this.isLoggedIn) {
      // alert("Morate biti prijavljeni da biste postavili ponudu.");
      this.store.dispatch(AuctionActions.makeBidFailure({ error: new Error("Morate biti prijavljeni da biste postavili ponudu") }))
      return;
    }

    this.currentPrice = minPrice;

    let dialogRef = this.dialog.open(BidDialogComponent, {
      width: '250px',
      data: { price: minPrice }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result && this.currentPrice && this.auctionId && result > this.currentPrice) {
        this.store.dispatch(AuctionActions.makeBid({ bidPrice: result, auctionId: this.auctionId }));
      } else if (result) {
        // alert('Vaša ponuda mora biti veća od trenutne ponude.');
        this.store.dispatch(AuctionActions.makeBidFailure({ error: new Error("Vaša ponuda mora biti veća od trenutne ponude") }))
      }
    });
  }

  isAuctionLive(start: Date, end: Date): boolean {
    var date3 = new Date();
    if (start > date3 || end < date3) return true;
    return false;
  }

  convertToViewAbleDate(date: Date | string) {
    const dateTime = new Date(date);
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    return dateTime.toLocaleDateString('sr-RS', options) + '  ' + dateTime.toLocaleTimeString('sr');
  }

  public IsAuctionEnd(end: Date): boolean {
    if (typeof end === 'string') {
      end = new Date(end);
    }
    let date1 = end.getTime();
    let date2 = new Date().getTime();
    if (date1 < date2) return true;
    return false;
  }


  public IsAuctionStart(start: Date): boolean {
    if (typeof start === 'string') {
      start = new Date(start);
    }

    let date1 = start.getTime();
    let date2 = new Date().getTime();
    if (date1 > date2) return true;
    return false;
  }


}
