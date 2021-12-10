import {setLocation} from "./actions";

export const getCurrentLocation = () => {
    return dispatch => {
        if ("geolocation" in navigator) {
            console.log("Available");
            navigator.geolocation.getCurrentPosition(function(position) {
                // console.log("Latitude is :", position.coords.latitude);
                // console.log("Longitude is :", position.coords.longitude);
                // console.log("position :", position);
                dispatch(setLocation({lat: position.coords.latitude, lon: position.coords.longitude}));
            });
        } else {
            console.log("Not Available");
        }
    }
}