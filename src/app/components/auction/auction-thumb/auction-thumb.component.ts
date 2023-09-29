import { Component, Input } from '@angular/core';
import { Auction } from 'src/app/models/auction';

@Component({
  selector: 'app-auction-thumb',
  templateUrl: './auction-thumb.component.html',
  styleUrls: ['./auction-thumb.component.scss']
})
export class AuctionThumbComponent {

  @Input() auction: Auction | null = null;
  baseUrl: string = 'http://localhost:3000';

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
