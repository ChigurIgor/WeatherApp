import {combineReducers} from "redux";
import {errorsReducer} from "./errorsReducer";
import {weatherReducer} from "./weatherReducer";
import {LocationReducer} from "./locationReducer";

export const rootReducer =  combineReducers({
    errorsStore: errorsReducer,
    weatherStore: weatherReducer,
    locationStore: LocationReducer
    }
)