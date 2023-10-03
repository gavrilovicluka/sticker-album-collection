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
import { Socket, io } from 'socket.io-client';
import { environment } from 'src/environments/environments';
import { Bid } from 'src/app/models/bid';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {

  auction$: Observable<Auction | null> = of();
  auctionId?: number;
  baseUrl: string = environment.apiUrl;
  currentPrice?: number;
  isLoggedIn?: boolean;
  socket: Socket = io(environment.apiUrl);

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

    this.listenForServerMessages();
  }

  listenForServerMessages() {
    this.socket.connect();

    this.socket.on('newBid', (bid: Bid) => {
      if (bid.auctionId != this.auctionId) return;

      this.store.dispatch(AuctionActions.updateBid({ bid }));
    });
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
