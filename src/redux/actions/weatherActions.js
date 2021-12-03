import axios from "axios";
import {API_KEY, BASE_URL_ONE_CALL, BASE_URL_WEATHER} from "../constants";
import {setErrorAction, setWeatherAction} from "./actions";

export const getWeather = (city) =>{
    const params = {
        appid: API_KEY,
        q: city,
        lang: 'en',
        // lat: '32.109333',
        // lon: '34.855499',
        unit: 'metric', // values are (metric, standard, imperial)
    };

    return dispatch => {
         axios.get(BASE_URL_WEATHER, {params})
             .then(response=> {
                 dispatch(setWeatherAction(response.data));
             })
             .catch(err => {
                 dispatch(setErrorAction(err));
             });
    }
}

export const getForcast = (weather) =>{
    if(weather !== undefined && weather.coord !== undefined) {
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

        return dispatch => {
            axios.get(BASE_URL_ONE_CALL, {params})
                .then(response => {
                    dispatch(setWeatherAction(response.data));
                })
                .catch(err => {
                    dispatch(setErrorAction(err));
                });
        }
    }
}