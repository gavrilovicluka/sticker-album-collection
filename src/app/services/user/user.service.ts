import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserData, UserEdit } from 'src/app/models/user';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private path: string = '/user';

  constructor(private httpClient: HttpClient) { }

  getUser(userId: number): Observable<UserData> {
    return this.httpClient.get<UserData>(environment.apiUrl + this.path + `/${userId}`);
  }
  
  editUser(userId: number, user: UserEdit): Observable<User> {
    return this.httpClient.put<User>(environment.apiUrl + this.path + `/${userId}`, user);
  }


}
