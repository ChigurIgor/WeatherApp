import {setLocation} from "./actions";

export const getCurrentLocation = () => {
    return dispatch => {
        if ("geolocation" in navigator) {
            // console.log("Available");
            navigator.geolocation.getCurrentPosition(function(position) {
                dispatch(setLocation({lat: position.coords.latitude, lon: position.coords.longitude}));
            });
        } else {
            // console.log("Geolocation is Not Available");
        }
    }
}