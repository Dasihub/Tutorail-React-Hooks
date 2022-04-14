import {combineReducers} from "redux";
import {reducer} from "./reducers/reducer";

export const rootReducer = combineReducers({
    reducer
})

export type rootType = ReturnType<typeof rootReducer>