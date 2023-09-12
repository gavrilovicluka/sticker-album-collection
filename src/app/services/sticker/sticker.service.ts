import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, catchError, delay, map, of, switchMap } from 'rxjs';
import { addMissingStickersFailure, addMissingStickersSuccess } from 'src/app/store/actions/sticker.actions';
import { AppState } from 'src/app/store/app.state';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class StickerService {

  path: string = "/stickersLists"

  constructor(private httpClient: HttpClient, private store: Store<AppState>) { }

  addMissingStickers(/*stickerListId: number, */stickers: number[]): Observable<number[]> {
    // const url = `${environment.apiUrl}${this.path}/1`;              // !!!!!!!!!!!!!!
    // return this.httpClient.put<number[]>(url, { missingStickers: stickers });

    const url = `${environment.apiUrl}${this.path}/1`;
    // return this.httpClient.get< {missingStickers: number[]}>(url).pipe(
    //   map((response) => response.missingStickers),
    //   switchMap((currentStickers) => {
    //     const updatedStickers = [...currentStickers, ...stickers];
    //     return this.httpClient.put<number[]>(url, { missingStickers: updatedStickers });
    //   })
    // );
    return this.httpClient.get<{ missingStickers: number[] }>(url).pipe(
      map((response) => response.missingStickers),
      switchMap((currentStickers) => {
        const stickersToAdd = stickers.filter((sticker) => !currentStickers.includes(sticker));
        if (stickersToAdd.length === 0) {
          // Nema novih vrednosti za dodavanje
          return of(currentStickers);
        }

        const updatedStickers = [...currentStickers, ...stickersToAdd];
        return this.httpClient.put<number[]>(url, { missingStickers: updatedStickers });
      })
    );
  }

  getMissingStickers(id: number): Observable<number[]> {
    return this.httpClient.get<{ missingStickers: number[] }>(environment.apiUrl + this.path + `/${id}`).pipe(
      map((response) => response.missingStickers),
      // map((stickers) => stickers.sort((a, b) => a - b))
    );
  }

  removeMissingStickers(stickersToRemove: number[]): Observable<number[]> {
    const url = `${environment.apiUrl}${this.path}/1`;

    return this.getMissingStickers(1).pipe(
      switchMap((currentStickers) => {
        // Iz niza sličica izbacite one koje želite da obrišete
        stickersToRemove.forEach((sticker) => {
          const index = currentStickers.indexOf(sticker);
          if (index !== -1) {
            currentStickers.splice(index, 1);
          }
        });

        // Ažurirajte niz sličica na API-ju
        return this.httpClient.put<number[]>(url, { missingStickers: currentStickers }).pipe(
          map(() => currentStickers)
        );
      })
    );
  }

  
}
