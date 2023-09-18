import { HttpClient } from '@angular/common/http';
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
    return this.httpClient.post<UserAlbum>(environment.apiUrl + this.path + `/${userId}/${albumId}`, null);
  }

  getUserAlbums(userId: number): Observable<UserAlbum[]> {
    return this.httpClient.get<UserAlbum[]>(environment.apiUrl + this.path + `/${userId}`);
  }

  getUserAlbum(userId: number, albumId: number): Observable<UserAlbum> {
    return this.httpClient.get<UserAlbum>(environment.apiUrl + this.path + `/${userId}/${albumId}`);
  }

  getUserAlbumsByAlbumId(albumId: number): Observable<UserAlbum[]> {
    return this.httpClient.get<UserAlbum[]>(environment.apiUrl + this.path + `/album/${albumId}`)
  }

  removeStickersFromList(fromList: string, stickers: number[], userAlbumId: number): Observable<UserAlbum> {

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

    return this.httpClient.put<UserAlbum>(environment.apiUrl + this.path + `/${userAlbumId}`, data);
  }
}
