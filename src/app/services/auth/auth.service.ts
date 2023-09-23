import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, mergeMap, of, switchMap, throwError } from 'rxjs';
import { environment } from 'src/environments/environments';
import { User, UserData, UserRegistrationDto } from 'src/app/models/user';
import { UserLoginDto } from 'src/app/models/user-login.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private path: string = '/auth';

  constructor(private httpClient: HttpClient) { }

  loginUser(userLoginDto: UserLoginDto) {
    return this.httpClient
      .post<any>(environment.apiUrl + this.path + '/login', userLoginDto )
      .pipe(
        mergeMap((response) => {
          if (response) {
            const token : string = response.token;
            return of(token);
          }
          else {
            return throwError(() => new Error('Unable to login'));
          }
        })
      )
  }

  signupUser(user: UserRegistrationDto) {
    return this.httpClient.post<User>(environment.apiUrl + '/user/register', user).pipe(
      mergeMap((user) => {
        if (user) {
          return of(user);
        }
        else {
          return throwError(() => new Error('Unable to signup'));
        }
      })
    );
  }

}