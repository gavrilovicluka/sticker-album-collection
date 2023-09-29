import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Auction } from 'src/app/models/auction';
import * as AuctionActions from 'src/app/store/actions/auction.actions';
import { AppState } from 'src/app/store/app.state';
import { selectAllAuctions } from 'src/app/store/selectors/auction.selector';

interface ProductHome {
  productId: string;
  productName: string;
  basePrice: number;
  bidderId: string;
  bidderName: string;
  bidPrice: number;
  image: string;
  endDate: Date;
  startDate: string;
}

@Component({
  selector: 'app-auction-list',
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.scss']
})
export class AuctionListComponent implements OnInit {

  baseUrl: string = 'http://localhost:3000';
  auctions$: Observable<Auction[]> = of([]);

  public PageProducts: ProductHome[] = [
    {
      productId: '1',
      productName: "Product 1",
      basePrice: 1000,
      bidderId: '2',
      bidderName: 'Bidder 2',
      bidPrice: 1100,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpyQ_cUlRMTHpi6h4oL8sOrGRJA5tmLGE7DQ&usqp=CAU',
      endDate: new Date('2023-09-28T21:00:00'),
      startDate: '2023-09-27'
    }
  ];

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {

    this.store.dispatch(AuctionActions.getAuctions());
    this.auctions$ = this.store.select(selectAllAuctions);
  }

}
