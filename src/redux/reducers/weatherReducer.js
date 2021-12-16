import {SET_FORECAST, SET_WEATHER} from "../actionTypes";

// const INITIAL_STATE = {
//     // weather: '',
//     // forecast: ''
// }

export const weatherReducer = (state, {type, payload}) => {
    switch (type) {
        case SET_WEATHER:
            return {
                ...state,
                weather: payload
            }
        case SET_FORECAST:
            return {
                ...state,
                forecast: payload
            }
        default:
            return {
                state
            }

    }
}