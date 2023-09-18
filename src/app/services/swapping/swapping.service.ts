// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { SwappingInfo } from 'src/app/models/swapping-info';
// import { environment } from 'src/environments/environments';

// @Injectable({
//   providedIn: 'root'
// })
// export class SwappingService {

//   private path: string = '/user-album';

//   constructor(private httpClient: HttpClient) { }

//   getSwappingInfo(albumId: number): Observable<SwappingInfo[]> {
//     return this.httpClient.get<SwappingInfo[]>(environment.apiUrl + this.path + `/album/${albumId}`)
//   }

// }
