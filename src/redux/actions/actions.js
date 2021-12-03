import {SET_ERROR, SET_FORECAST, SET_WEATHER} from "../actionTypes";

export const setErrorAction = (err) => {
    return {
        type: SET_ERROR,
        payload: err
    }
}
export const setWeatherAction = (weather) => {
    return {
        type: SET_WEATHER,
        payload: weather
    }
}
export const setForecastAction = (weather) => {
    return {
        type: SET_FORECAST ,
        payload: weather
    }
}