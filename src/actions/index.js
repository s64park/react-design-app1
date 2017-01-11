import axios from 'axios';
import {
    GET_SECONDARY_LEVELS
} from './types';

export function getSecondaryLevels() {
    return (dispatch) => {
        axios.get('https://gist.githubusercontent.com/espinet/922527b7ea1606127f7dba413a911937/raw/245370f480934a50eb3fa68891fc9476cce894e2/secondary-levels.json')
            .then((res) => {
                //pass secondary levels array to dispatcher
                dispatch({type: GET_SECONDARY_LEVELS, payload: res.data.secondaryLevels});
                console.log(res.data.secondaryLevels);
            }).catch((err) => {
                console.log(err);
        });
    };
}