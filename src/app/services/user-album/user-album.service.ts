import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAlbum } from 'src/app/models/user-album';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class UserAlbumService {

  // path: string = "/???";

  constructor(private httpClient: HttpClient) { }

  addAlbumToUser(albumId: number, userId: number): Observable<UserAlbum> {
    const data = {
      albumId,
      userId
    }
    return this.httpClient.post<UserAlbum>(environment.apiUrl, data);
  }
}
