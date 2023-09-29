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
    this.auctions$ = this.store.select(selectAllAuctions) //.subscribe(x => console.log(typeof x[0].endDate));
  }


  openDialog(id: number, min_price: number): void {
    // this.selectedId = id;
    // this.currentPrice = min_price;
    // let dialogRef = this.dialog.open(BidDialogComponent, {
    //   width: '250px',
    //   data: { price: min_price }
    // });

    // dialogRef.afterClosed().subscribe(result => {

    //   if (result && result > this.currentPrice) {
    //     this.IsRequesting = true;
    //     if (this._commonService.isAuthenticated()) {
    //       console.log(this._commonService.getUserId());
    //       this.TryBid(result, this.selectedId, this._commonService.getUserId());
    //       this.IsRequesting = false;
    //     } else {
    //       this.IsRequesting = false;
    //       this.router.navigate(['/signin']);
    //     }
    //   }else if(result){
    //     this.toastr.warning('Your bid must be grater than current bid.');
    //   }
    // });
  }

  public IsAuctionEnd(end: Date): boolean {
    let date1 = end;
    let date2 = new Date();
    if (date1 < date2) return true;
    return false;
  }


  public IsAuctionStart(start: Date) {
    // var date1 = new Date(start);
    let date1 = start;
    let date2 = new Date();
    if (date1 > date2) return true;
    return false;
  }
}
