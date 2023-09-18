import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import * as SwappingActions from "../actions/swapping-info.actions";
import { SwappingService } from "src/app/services/swapping/swapping.service";

@Injectable()
export class SwappingInfoEffect {

    constructor(private swappingService: SwappingService, private actions$: Actions) { }

    getSwappingInfo$ = createEffect(() => this.actions$.pipe(
        ofType(SwappingActions.getSwappingInfo),
        mergeMap((action) =>
            this.swappingService.getSwappingInfo(action.albumId).pipe(
                map((swappingInfos) => SwappingActions.getSwappingInfoSuccess({ swappingInfos })),
                catchError((error) => of(SwappingActions.getSwappingInfoFailure(error)))
            ))
    ))


}