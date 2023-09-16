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
}
