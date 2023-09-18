// import { EntityState, createEntityAdapter } from "@ngrx/entity";
// import { createReducer, on } from "@ngrx/store";
// import { SwappingInfo } from "src/app/models/swapping-info";
// import * as SwappingActions from "../actions/swapping-info.actions";

// export interface SwappingInfoState extends EntityState<SwappingInfo> {
//     error: any;
// }

// const adapter = createEntityAdapter<SwappingInfo>();

// const initialState: SwappingInfoState = adapter.getInitialState({
//     error: null
// });

// export const swappingInfoReducer = createReducer(
//     initialState,

//     on(SwappingActions.getSwappingInfoSuccess, (state, props) => {
//         const { swappingInfos } = props;
//         return adapter.setAll(swappingInfos, state)
//     }),
// )