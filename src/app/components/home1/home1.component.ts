import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable, of } from 'rxjs';
import { Socket, io } from 'socket.io-client';
import { Auction } from 'src/app/models/auction';
import * as AuctionActions from 'src/app/store/actions/auction.actions';
import { AppState } from 'src/app/store/app.state';
import { selectHotAuctions } from 'src/app/store/selectors/auction.selector';
import { selectIsLoggedIn } from 'src/app/store/selectors/auth.selectors';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.scss']
})
export class Home1Component implements OnInit {

  customOptions: OwlOptions = {
    items: 3,
    nav: true,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    // navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
  }

  isLoggedIn?: boolean;
  hotAuctions$: Observable<Auction[]> = of([]);
  numberOfHotAuctions: number = 3;
  baseUrl: string = environment.apiUrl;
  socket: Socket = io("http://localhost:3000");


  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(AuctionActions.getHotAuctions({ numberOfAuctions: this.numberOfHotAuctions }));

    this.store.select(selectIsLoggedIn).subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
    this.hotAuctions$ = this.store.select(selectHotAuctions)  //.subscribe(x => console.log(x))

    // const socket = io("http://localhost:3000", {
    //   withCredentials: true,
    // });
  }


  onAddAuctionClick() {
    if (!this.isLoggedIn) {
      alert("Morate biti prijavljeni da biste postavili aukciju.");
      return;
    }
  }
}
