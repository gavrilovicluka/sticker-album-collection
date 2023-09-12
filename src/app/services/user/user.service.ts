import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserEdit } from 'src/app/models/user';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private path: string = '/users';

  constructor(private httpClient: HttpClient) { }

  editUser(user: UserEdit): Observable<User> {
    return this.httpClient.put<User>(environment.apiUrl + this.path, user);
  }


}
