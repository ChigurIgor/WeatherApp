import {SET_LOCATION} from "../actionTypes";

const INITIAL_STATE = {
    location: {}
}
export const LocationReducer = (state = INITIAL_STATE, {type, payload}) => {
    switch (type){
        case SET_LOCATION:
            return {...state, location: payload}
        default: return {state};
    }
}