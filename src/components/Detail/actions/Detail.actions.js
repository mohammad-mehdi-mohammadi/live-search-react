import {
    FETCH_DETAIL_BEGIN,
    FETCH_DETAIL_SUCCESS
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
