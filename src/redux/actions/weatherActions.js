import axios from "axios";
import {API_KEY, BASE_URL_ONE_CALL, BASE_URL_WEATHER} from "../constants";
import {setErrorAction, setForecastAction, setWeatherAction} from "./actions";

export const getWeather = (city) =>{
    return async dispatch => {
        try {
            const params = {
                appid: API_KEY,
                q: city,
                lang: 'en',
                unit: 'metric', // values are (metric, standard, imperial)
            };
            const response = axios.get(BASE_URL_WEATHER, {params})
            const {data} = await response;
            // setCity('');
            dispatch(setWeatherAction(data))
        }
        catch (err){
            dispatch(setErrorAction(err))
        }

    }
}
export const getWeatherInCurrentLocation = (location) =>{
    return async dispatch => {
        try {
            if (location !== undefined && location.lat !== undefined && location.lon !== undefined) {
                const params = {
                    appid: API_KEY,
                    // q: city,
                    lang: 'en',
                    lat: location.lat,
                    lon: location.lon,
                    unit: 'metric', // values are (metric, standard, imperial)
                };
                const response = axios.get(BASE_URL_WEATHER, {params});
                const {data} = await response;
                dispatch(setWeatherAction(data));
            }
        }
        catch (err) {
            setErrorAction(err)
        }
    }
}
export const getForecast = (weather) =>{
        return async dispatch => {
            try {
                if (weather !== undefined && weather.coord !== undefined) {
                    const lat = weather.coord.lat;
                    const lon = weather.coord.lon
                    const params = {
                        appid: API_KEY,
                        // q: city,
                        lang: 'en',
                        lat: lat,
                        lon: lon,
                        unit: 'metric', // values are (metric, standard, imperial)
                    };
                    const response = axios.get(BASE_URL_ONE_CALL,{params});
                    const {data} = await response;
                    dispatch(setForecastAction(data));
                }
            }
            catch (err){
                setErrorAction(err)
            }
    }
}

