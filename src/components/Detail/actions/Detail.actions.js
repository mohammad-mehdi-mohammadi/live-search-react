import {
    FETCH_DETAIL_BEGIN,
    FETCH_DETAIL_SUCCESS
} from './../constants/Detail.constants';


export function fetchDetailBegin() {
    return {
        type: FETCH_DETAIL_BEGIN
    };
}

export function fetchDetailSuccess(payload) {
    return {
        type: FETCH_DETAIL_SUCCESS,
        payload,
    };
}

export function fetchList(data) {

    // return {
    //     type: FETCH_LIST,
    //     value: data
    // };
}

export function abortRequest() {

    // return {
    //     type: ABORT_REQUEST
    // };
}

// export const Request_API_DATA = "REQUEST_API_DATA";
// export const RECIEVE_API_DATA = "RECIEVE_API_DATA";
//
// export const requestApiData = () => ({ type: Request_API_DATA })
// export const recieveApiData = data => ({ type: RECIEVE_API_DATA, data })
