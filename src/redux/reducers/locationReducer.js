import {SET_LOCATION, SET_SELECTED_CITY} from "../actionTypes";

const INITIAL_STATE = {
    location: undefined,
    selectedCity: undefined
}
export const LocationReducer = (state = INITIAL_STATE, {type, payload}) => {
    switch (type){
        case SET_LOCATION:
            return {...state, location: payload}
        case SET_SELECTED_CITY:
            return {...state, selectedCity: payload}
        default:
            return state;
    }
}