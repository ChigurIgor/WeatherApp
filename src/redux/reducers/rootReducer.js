import {combineReducers} from "redux";
import {errorsReducer} from "./errorsReducer";
import {weatherReducer} from "./weatherReducer";

export const rootReducer =  combineReducers({
    errorsStore: errorsReducer,
    weatherStore: weatherReducer,
    }
)