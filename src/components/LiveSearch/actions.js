import {
    FETCH_LIST,
    FETCH_LIST_SUCCESS,
    LIST_IS_LOADING,
} from './constants';

export function listIsLoading(bool) {
    // console.log("loading")
    return {
        type: LIST_IS_LOADING,
        payload: bool,
    };
}

export function fetchListSuccess(payload) {
    return {
        type: FETCH_LIST_SUCCESS,
        payload,
    };
}

export function fetchList(data) {

    return {
        type: FETCH_LIST,
        value: data
    };
}


// export const Request_API_DATA = "REQUEST_API_DATA";
// export const RECIEVE_API_DATA = "RECIEVE_API_DATA";
//
// export const requestApiData = () => ({ type: Request_API_DATA })
// export const recieveApiData = data => ({ type: RECIEVE_API_DATA, data })
