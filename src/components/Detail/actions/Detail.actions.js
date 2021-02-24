import {
    FETCH_DETAIL_BEGIN,
    FETCH_DETAIL_SUCCESS,
    ABORT_REQUEST
} from './../constants/Detail.constants';



export function fetchDetailBegin(payload) {
    return {
        type: FETCH_DETAIL_BEGIN,
        payload
    };
}

export function fetchDetailSuccess(payload) {
    return {
        type: FETCH_DETAIL_SUCCESS,
        payload,
    };
}
export function abortRequest() {

    return {
        type: ABORT_REQUEST
    };
}

