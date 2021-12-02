import {combineReducers} from "redux";
import {errorsReducer} from "./errorsReducer";

export const rootReducer =  combineReducers({
        errorsStore: errorsReducer,

    }
)