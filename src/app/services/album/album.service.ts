import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, mergeMap, of, throwError } from 'rxjs';
import { Album } from 'src/app/models/album';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private path: string = '/albums';

  constructor(private httpClient: HttpClient) { }

  loadAlbums(): Observable<Album[]> {
    return this.httpClient.get<Album[]>(environment.apiUrl + this.path)
  }

  getAlbum(albumId: number): Observable<Album> {
    return this.httpClient.get<Album>(environment.apiUrl + this.path + `/${albumId}`);
  }

  addAlbum(album: Album): Observable<Album> {
    return this.httpClient.post<Album>(environment.apiUrl + this.path, album).pipe(
      mergeMap((album) => {
        if (album) {
          return of(album);
        } else {
          return throwError(() => new Error('Unable to add album'));
        }
      })
    )
  }

  editAlbum(album: Album): Observable<Album> {
    return this.httpClient.put<Album>(environment.apiUrl + this.path + `/${album.id}`, album);
  }
}
