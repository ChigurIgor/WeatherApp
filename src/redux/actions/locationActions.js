import {setLocation} from "./actions";

export const getCurrentLocation = () => {
    return dispatch => {
        const {geolocation} = navigator;
         geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
             dispatch(setLocation({lat: latitude, lon: longitude}));
         });
    }
}