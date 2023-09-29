import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, mergeMap, of, throwError } from 'rxjs';
import { Auction, AuctionDto } from 'src/app/models/auction';
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
      mergeMap((publisher) => {
        if (publisher) {
          return of(publisher);
        } else {
          return throwError(() => new Error('Unable to add publisher'));
        }
      })
    )
  }
}
