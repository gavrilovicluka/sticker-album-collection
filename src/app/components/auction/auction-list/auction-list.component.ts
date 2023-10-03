import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of, take } from 'rxjs';
import { Socket, io } from 'socket.io-client';
import { Auction, AuctionStatus } from 'src/app/models/auction';
import { Bid } from 'src/app/models/bid';
import * as AuctionActions from 'src/app/store/actions/auction.actions';
import { AppState } from 'src/app/store/app.state';
import { selectAllAuctions, selectAuctionFromPastDays, selectAuctionInNextDays, selectSelectedDays } from 'src/app/store/selectors/auction.selector';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-auction-list',
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.scss']
})
export class AuctionListComponent implements OnInit {

  baseUrl: string = 'http://localhost:3000';
  auctions$: Observable<Auction[]> = of([]);
  days: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  selectedDays: number = 5;
  selectedDays$: Observable<number> = of();
  type?: string;
  socket: Socket = io(environment.apiUrl);

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.selectedDays$ = this.store.select(selectSelectedDays);
  }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.type = params['type'];

      this.store.dispatch(AuctionActions.getAuctions({ auctionType: this.type!, pastDays: this.selectedDays }));

    });
    this.auctions$ = this.store.select(selectAllAuctions) //.subscribe(x => console.log(x));

    this.store.dispatch(AuctionActions.setSelectedDays({ selectedDays: this.selectedDays }));

    this.listenForServerMessages();
  }

  listenForServerMessages() {
    this.socket.connect();

    this.socket.on('newBid', (bid: Bid) => {
      this.store.dispatch(AuctionActions.updateBid({ bid }));
    });
  }

  changeSelectedDays() {

    this.selectedDays$.pipe(take(1)).subscribe((currentSelectedDays) => {

      if (currentSelectedDays !== 0 && this.selectedDays <= currentSelectedDays) {

        this.store.dispatch(AuctionActions.setSelectedDays({ selectedDays: +this.selectedDays }));

        if (this.type === AuctionStatus.ENDED) {
          this.auctions$ = this.store.select(selectAuctionFromPastDays);

        } else if (this.type === AuctionStatus.WAITING) {
          this.auctions$ = this.store.select(selectAuctionInNextDays);
        }

      } else {
        this.store.dispatch(AuctionActions.setSelectedDays({ selectedDays: +this.selectedDays }));
        this.store.dispatch(AuctionActions.getAuctions({ auctionType: this.type!, pastDays: +this.selectedDays }));
      }
    });
  }
}
