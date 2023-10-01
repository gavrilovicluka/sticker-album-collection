import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, mergeMap, of, throwError } from 'rxjs';
import { Auction, AuctionDto } from 'src/app/models/auction';
import { Bid } from 'src/app/models/bid';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  private path: string = '/auction';

  constructor(private httpClient: HttpClient) { }

  addAuction(fd: FormData): Observable<Auction> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.httpClient.post<Auction>(
      environment.apiUrl + this.path + '/create',
      fd,
      { headers: headers }
    ).pipe(
      mergeMap((auction) => {
        if (auction) {
          return of(auction);
        } else {
          return throwError(() => new Error('Unable to add auction'));
        }
      })
    )
  }

  getAuctions(auctionType: string): Observable<Auction[]> {
    return this.httpClient.get<Auction[]>(`${environment.apiUrl}${this.path}?type=${auctionType}`)
  }

  //  ******************** promenjen url na getWithData
  getAuctionById(auctionId: number): Observable<Auction> {
    return this.httpClient.get<Auction>(environment.apiUrl + this.path + `/getWithData/${auctionId}`);
  }

  makeBid(bidPrice: number, auctionId: number): Observable<Bid> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.httpClient.post<Bid>(
      `${environment.apiUrl}/bid/create/${auctionId}/${bidPrice}`,
      null,
      { headers: headers }
    ).pipe(
      mergeMap((bid) => {
        if (bid) {
          return of(bid);
        } else {
          return throwError(() => new Error('Unable to add bid'));
        }
      })
    )
  }

  getAuctionsWithFilter(auctionType: string, startDate: string, endDate: string): Observable<Auction[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.httpClient
      .get<Auction[]>(`${environment.apiUrl}${this.path}/userAuctions?type=${auctionType}&startDate=${startDate}&endDate=${endDate}`,
      {
        headers: headers
      })
      .pipe(
        mergeMap((auctions) => {
          if (auctions) {
            return of(auctions);
          } else {
            return throwError(() => new Error('Unable to get auctions'));
          }
        })
      )
  }
}
