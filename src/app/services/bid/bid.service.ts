import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, mergeMap, of, throwError } from 'rxjs';
import { Bid } from 'src/app/models/bid';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class BidService {

  private path: string = '/bid';

  constructor(private httpClient: HttpClient) { }

  getUserBids(startDate: string, endDate: string): Observable<Bid[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.httpClient
      .get<Bid[]>(`${environment.apiUrl}${this.path}/userBids?startDate=${startDate}&endDate=${endDate}`,
        {
          headers: headers
        })
      .pipe(
        mergeMap((bids) => {
          if (bids) {
            return of(bids);
          } else {
            return throwError(() => new Error('Unable to get bids'));
          }
        })
      )
  }
}
