import { Component } from '@angular/core';


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
export class ViewProductComponent {

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


  openDialog(min_price: number): void {
    // this.currentPrice = min_price;
    // let dialogRef = this.dialog.open(BidDialogComponent, {
    //   width: '250px',
    //   data: { price: min_price }
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result && result > this.currentPrice) {
    //     if (this._commonService.isAuthenticated()) {
    //       //console.log(this._commonService.getUserId());
    //       this.TryBid(result, this.productId, this._commonService.getUserId());
    //     } else {
    //       this.router.navigate(['/signin']);
    //     }
    //   } else if (result) {
    //     this.toastr.warning('Your bid must be grater than current bid.');
    //   }
    // });
  }

  isAuctionLive(start: Date, end: Date): boolean {
    var date3 = new Date();
    if (start > date3 || end < date3) return true;
    return false;
  }

  convertToViewAbleDate(dateTime: Date) {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return dateTime.toLocaleDateString('sr-RS', options) + '  ' + dateTime.toLocaleTimeString('sr');
  }

}
