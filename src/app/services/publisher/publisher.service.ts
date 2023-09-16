import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, mergeMap, of, throwError } from 'rxjs';
import { Album } from 'src/app/models/album';
import { Publisher, PublisherDto } from 'src/app/models/publisher';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  private path: string = '/publisher';

  constructor(private httpClient: HttpClient) { }

  loadPublishers(): Observable<Publisher[]> {
    return this.httpClient.get<Publisher[]>(environment.apiUrl + this.path)
  }

  getPublisher(publisherId: number): Observable<Publisher> {
    return this.httpClient.get<Publisher>(environment.apiUrl + this.path + `/${publisherId}`);
  }
  
  getPublisherWithAlbums(publisherId: number): Observable<Publisher> {
    return this.httpClient.get<Publisher>(environment.apiUrl + this.path + `/${publisherId}/albums`);
  }

  addPublisher(publisher: PublisherDto): Observable<Publisher> {
    return this.httpClient.post<Publisher>(environment.apiUrl + this.path, publisher).pipe(
      mergeMap((publisher) => {
        if (publisher) {
          return of(publisher);
        } else {
          return throwError(() => new Error('Unable to add publisher'));
        }
      })
    )
  }

  editPublisher(publisher: Publisher): Observable<Publisher> {
    return this.httpClient.put<Publisher>(environment.apiUrl + this.path + `/${publisher.id}`, publisher);
  }

  addAlbumToPublisher(album: Album, publisherId: number): Observable<Publisher> {
    const albumData = {
      id: album.id,
      name: album.name,
      imageUrl: album.imageUrl,
      stickersNumber: album.stickersNumber,
      year: album.year
    }
    return this.httpClient.patch<Publisher>(environment.apiUrl + this.path + `/${publisherId}`, {
      albums: albumData
    })
  }

}
