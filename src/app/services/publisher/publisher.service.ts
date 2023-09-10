import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, mergeMap, of, throwError } from 'rxjs';
import { Publisher } from 'src/app/models/publisher';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  private path: string = '/publishers';

  constructor(private httpClient: HttpClient) { }

  loadPublishers(): Observable<Publisher[]> {
    return this.httpClient.get<Publisher[]>(environment.apiUrl + this.path)
  }

  getPublisher(publisherId: number): Observable<Publisher> {
    return this.httpClient.get<Publisher>(environment.apiUrl + this.path + `/${publisherId}`);
  }

  addPublisher(publisher: Publisher): Observable<Publisher> {
    return this.httpClient.post<Publisher>(environment.apiUrl + this.path, publisher).pipe(
      mergeMap((publisher) => {
        if (publisher) {
          return of(publisher);
        } else {
          return throwError(() => new Error('Unable to login'));
        }
      })
    )
  }

  editPublisher(publisher: Publisher): Observable<Publisher> {
    return this.httpClient.put<Publisher>(environment.apiUrl + this.path + `/${publisher.id}`, publisher);
  }

}
