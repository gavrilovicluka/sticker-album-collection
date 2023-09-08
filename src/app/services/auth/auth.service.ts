import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, mergeMap, of, switchMap, throwError } from 'rxjs';
import { environment } from 'src/environments/environments';
import { User, UserRegistration } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private path: string = '/users';
  public userCount = 3;    //simulacija apija

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

  loginUser(username: string, password: string) {
    return this.httpClient
      .get<User[]>(environment.apiUrl + this.path + `?username=${username}`)
      .pipe(
        mergeMap((users) => {
          let user = users[0];
          if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            return of(user);
          }
          else {
            return throwError(() => new Error('Unable to login'));
          }
        }),
        // catchError(errorHandler)
      )
  }

  signupUser(user: User) {      // za sad User sa ID jer ga rucno unosim
    this.userCount++;
    return this.httpClient.post<User>(environment.apiUrl + this.path, user).pipe(
      mergeMap((user) => {
        if (user) {
          //localStorage.setItem('user', JSON.stringify(user));
          return of(user);
        }
        else {
          return throwError(() => new Error('Unable to login'));
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