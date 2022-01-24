import {SET_ERROR} from "../actionTypes";

const INITIAL_STATE = {
    error: undefined
}

export const errorsReducer = (state = INITIAL_STATE, {type, payload}) => {
    switch (type) {
        case SET_ERROR:
            return {
                ...state,
                error: payload
            }
        default:
            return {
                state
            }

    }
}