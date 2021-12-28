import {SET_ERROR, SET_FORECAST, SET_LOCATION, SET_SELECTED_CITY, SET_WEATHER} from "../actionTypes";

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
        type: SET_FORECAST,
        payload: weather
    }
}

export const setLocation = (location) => {
    return {
        type: SET_LOCATION,
        payload: location
    }
}
export const setSelectedCity = (city) => {
    return {
        type: SET_SELECTED_CITY,
        payload: city
    }
}