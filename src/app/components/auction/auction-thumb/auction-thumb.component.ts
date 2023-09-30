import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { BidDialogComponent } from 'src/app/components/auction/bid-dialog/bid-dialog.component';
import { Auction } from 'src/app/models/auction';
import * as AuctionActions from 'src/app/store/actions/auction.actions';
import { AppState } from 'src/app/store/app.state';
import { selectIsLoggedIn } from 'src/app/store/selectors/auth.selectors';

@Component({
  selector: 'app-auction-thumb',
  templateUrl: './auction-thumb.component.html',
  styleUrls: ['./auction-thumb.component.scss']
})
export class AuctionThumbComponent {

  @Input() auction: Auction | null = null;
  baseUrl: string = 'http://localhost:3000';
  currentPrice?: number;
  isLoggedIn?: boolean;
  selectedId?: number;

  constructor(private dialog: MatDialog, private store: Store<AppState>) {
    this.store.select(selectIsLoggedIn).subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn)
  }

  openDialog(id: number, minPrice: number): void {

    this.selectedId = id;

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

      if (result && this.currentPrice && this.selectedId && result > this.currentPrice) {
        this.store.dispatch(AuctionActions.makeBid({ bidPrice: result, auctionId: this.selectedId }));
      } else if (result) {
        // alert('Vaša ponuda mora biti veća od trenutne ponude.');
        this.store.dispatch(AuctionActions.makeBidFailure({ error: new Error("Vaša ponuda mora biti veća od trenutne ponude") }))
      }
    });
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
