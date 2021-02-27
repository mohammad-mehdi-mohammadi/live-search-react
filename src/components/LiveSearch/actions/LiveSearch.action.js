import {
    ABORT_REQUEST,
    FETCH_LIST_BEGIN,
    FETCH_LIST_SUCCESS, INIT_LIST,
} from '../constants/LiveSearch.constant';


export function fetchListSuccess(payload) {
    return {
        type: FETCH_LIST_SUCCESS,
        payload,
    };
}

export function fetchListBegin(data) {

    return {
        type: FETCH_LIST_BEGIN,
        value: data
    };
}
export function initialList() {

    return {
        type: INIT_LIST
    };
}
export function abortRequest() {
    return {
        type: ABORT_REQUEST
    };
}

