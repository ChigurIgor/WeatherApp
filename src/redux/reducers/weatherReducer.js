import {SET_WEATHER} from "../actionTypes";

const INITIAL_STATE = {
    weather: ""
}

export const weatherReducer = (state = INITIAL_STATE, {type, payload}) => {
    switch (type) {
        case SET_WEATHER:
            console.log(payload)
            return {
                ...state,
                weather: payload
            }
        default:
            return {
                state
            }

    }
}