import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Auction } from 'src/app/models/auction';
import { getAuctionsWithFilter } from 'src/app/store/actions/auction.actions';
import { AppState } from 'src/app/store/app.state';
import { selectAllAuctions, selectSoldAuctions } from 'src/app/store/selectors/auction.selector';

@Component({
  selector: 'app-user-auctions',
  templateUrl: './user-auctions.component.html',
  styleUrls: ['./user-auctions.component.scss']
})
export class UserAuctionsComponent implements OnInit {

  selectedTabIndex:number = 0;
  startDate: Date;
  endDate: Date;
  userAuctions$: Observable<Auction[]> = of([]);
  soldAuctions$: Observable<Auction[]> = of([]);

  constructor(private store: Store<AppState>) {
    const today = new Date();

    this.startDate = new Date();
    this.startDate.setDate(today.getDate() - 3);

    this.endDate = new Date();
    this.endDate.setDate(today.getDate() + 4);
  }

  ngOnInit(): void {
    this.store.dispatch(getAuctionsWithFilter({
      auctionType: 'active',
      startDate: this.startDate.toISOString(),
      endDate: this.endDate.toISOString()
    }))

    this.userAuctions$ = this.store.select(selectAllAuctions) //.subscribe(x => console.log(x))
    this.soldAuctions$ = this.store.select(selectSoldAuctions)  //.subscribe(x => console.log(x))
  }

  filterData() {
    this.store.dispatch(getAuctionsWithFilter({
      auctionType: 'active',
      startDate: this.startDate.toISOString(),
      endDate: this.endDate.toISOString()
    }))
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
