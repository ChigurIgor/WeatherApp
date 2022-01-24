import {setErrorAction, setLocation} from "./actions";

export const getCurrentLocation = () => {
    return dispatch => {
        try {
            const {geolocation} = navigator;
            geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
                dispatch(setLocation({lat: latitude, lon: longitude}));
            });
        }
        catch (err){
            dispatch(setErrorAction(err))
        }
    }
}