import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from 'src/app/models/album';
import { UserAlbum } from 'src/app/models/user-album';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class UserAlbumService {

  path: string = "/user-album";

  constructor(private httpClient: HttpClient) { }

  addAlbumToUser(userId: number, albumId: number): Observable<UserAlbum> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.httpClient.post<UserAlbum>(
      environment.apiUrl + this.path + `/${userId}/${albumId}`,
      null,
      { headers: headers }
    );
  }

  getUserAlbums(userId: number): Observable<UserAlbum[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.httpClient.get<UserAlbum[]>(
      environment.apiUrl + this.path + `/${userId}`,
      { headers: headers }
    );
  }

  getUserAlbum(userId: number, albumId: number): Observable<UserAlbum> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.httpClient.get<UserAlbum>(
      environment.apiUrl + this.path + `/${userId}/${albumId}`,
      { headers: headers }
    );
  }

  getUserAlbumsByAlbumId(albumId: number): Observable<UserAlbum[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.httpClient.get<UserAlbum[]>(
      environment.apiUrl + this.path + `/album/${albumId}`,
      { headers: headers }
    )
  }

  removeStickersFromList(fromList: string, stickers: number[], userAlbumId: number): Observable<UserAlbum> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    let data;
    switch (fromList) {
      case 'missing':
        data = {
          missingStickers: stickers
        }
        break;
      case 'duplicates':
        data = {
          duplicatesStickers: stickers
        }
        break;
      default:
        break;
    }

    return this.httpClient.put<UserAlbum>(
      environment.apiUrl + this.path + `/${userAlbumId}`,
      data,
      { headers: headers }
    );
  }
}
