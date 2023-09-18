// import { Injectable } from "@angular/core";
// import { Actions, createEffect, ofType } from "@ngrx/effects";
// import { catchError, concatMap, map, mergeMap, of, switchMap } from "rxjs";
// import * as StickerActions from "../actions/sticker.actions";
// import { StickerService } from "src/app/services/sticker/sticker.service";

// @Injectable()
// export class StickerEffect {

//     constructor(private stickerService: StickerService, private actions$: Actions) { }

//     addNewMissingStickers$ = createEffect(() => this.actions$.pipe(
//         ofType(StickerActions.addMissingStickers),
//         mergeMap((action) =>
//             this.stickerService.addMissingStickers(action.stickers).pipe(
//                 map((stickers) => StickerActions.addMissingStickersSuccess({ stickers })),
//                 catchError((error) => of(StickerActions.addMissingStickersFailure(error)))
//             ))
//     ))

//     getMissingStickers$ = createEffect(() => this.actions$.pipe(
//         ofType(StickerActions.getMissingStickers),
//         mergeMap((action) =>
//             this.stickerService.getMissingStickers(action.id).pipe(
//                 map((stickers) => StickerActions.getMissingStickersSuccess({ stickers })),
//                 catchError((error) => of(StickerActions.getMissingStickersFailure(error)))
//             )
//         )
//     ))

//     removeMissingStickers$ = createEffect(() => this.actions$.pipe(
//         ofType(StickerActions.removeMissingStickers),
//         mergeMap((action) =>
//             this.stickerService.removeMissingStickers(action.stickers).pipe(
//                 map((stickers) => StickerActions.removeMissingStickersSuccess({ stickers })),
//                 catchError((error) => of(StickerActions.removeMissingStickersFailure(error)))
//             ))
//     ))

// }