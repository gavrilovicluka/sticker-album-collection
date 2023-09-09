import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mergeMap } from 'rxjs';
import { Publisher } from 'src/app/models/publisher';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  private path: string = '/publishers';

  constructor(private httpClient: HttpClient) { }

  loadPublishers() {
    return this.httpClient.get<Publisher[]>(environment.apiUrl + this.path)
  }

}
