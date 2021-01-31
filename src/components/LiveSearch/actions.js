import {
    FETCH_LIST,
    FETCH_LIST_SUCCESS,
    LIST_IS_LOADING,
} from './constants';

export function listIsLoading(bool) {
    console.log("loading")
    return {
        type: LIST_IS_LOADING,
        isLoading: bool,
    };
}

export function fetchListSuccess(list) {
    return {
        type: FETCH_LIST_SUCCESS,
        list,
    };
}

export function fetchList() {
    return {
        type: FETCH_LIST,
    };
}