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

  // login(username: string, password: string): Observable<any> {
  //   return this.httpClient.get<User[]>(`${environment.apiUrl}/users/?username=${username}`).pipe(
  //     mergeMap((users) => {
  //       let user = users[0];
  //       console.log(users);
  //       if (user) {
  //         localStorage.setItem('user', JSON.stringify(user));
  //         return of(users);
  //       } else {
  //         console.log(1);
  //         return throwError(() => new Error('Unable to login'));
  //       }
  //     })
  //   );
  // }

  loginUser(userLoginDto: UserLoginDto) {
    return this.httpClient
      .post<any>(environment.apiUrl + this.path + '/login', userLoginDto )
      .pipe(
        mergeMap((response) => {
          if (response) {
            // const user : UserData = response.user;
            const token : string = response.token;
            // localStorage.setItem('token', JSON.stringify(userToken));
            return of(token);       // return of({ user, token });
          }
          else {
            return throwError(() => new Error('Unable to login'));
          }
        }),
        // catchError(errorHandler)
      )
  }

  signupUser(user: UserRegistrationDto) {
    return this.httpClient.post<User>(environment.apiUrl + '/user/register', user).pipe(
      mergeMap((user) => {
        if (user) {
          //localStorage.setItem('user', JSON.stringify(user));
          return of(user);
        }
        else {
          return throwError(() => new Error('Unable to signup'));
        }
      }),
      // catchError(errorHandler)
    );
  }

}

const errorHandler = (error: HttpErrorResponse) => {
  const errorMessage =
    error.status === 0
      ? `Can't connect to API ${error.error}`
      : `Backend returned code ${error.status}`;

  return throwError(() => errorMessage);
};