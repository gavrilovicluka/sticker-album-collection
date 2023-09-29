import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/store/app.state';

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
export class AuctionListComponent {


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


  openDialog(id: string, min_price: number): void {
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
    var date1 = end;
    var date2 = new Date();
    if (date1 < date2) return true;
    return false;
  }


  public IsAuctionStart(start: string) {
    var date1 = new Date(start);
    var date2 = new Date();
    if (date1 > date2) return true;
    return false;
  }
}
