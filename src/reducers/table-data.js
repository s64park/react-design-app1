/**
 * Created by Terry on 2017-01-10.
 */
import {
    GET_SECONDARY_LEVELS
} from '../actions/types';

export default function (state = {}, action ) {
    switch(action.type) {
        case GET_SECONDARY_LEVELS:
            return {...state, secondaryLevels: action.payload };
        default:
            return state;
    }
}