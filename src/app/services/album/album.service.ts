import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, mergeMap, of, throwError } from 'rxjs';
import { Album, AlbumDto } from 'src/app/models/album';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private path: string = '/album';

  constructor(private httpClient: HttpClient) { }

  loadAlbums(publisherId: number): Observable<Album[]> {
    return this.httpClient.get<Album[]>(environment.apiUrl + this.path + `/publisher/${publisherId}`);
  }

  getAlbum(albumId: number): Observable<Album> {
    return this.httpClient.get<Album>(environment.apiUrl + this.path + `/${albumId}`);
  }

  addAlbum(publisherId: number, album: AlbumDto): Observable<Album> {
    return this.httpClient.post<Album>(environment.apiUrl + this.path + `/${publisherId}`, album).pipe(
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
