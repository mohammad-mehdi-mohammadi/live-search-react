import {put, call, takeLatest, take} from 'redux-saga/effects';
import {
    ABORT_REQUEST, FETCH_LIST_BEGIN, INIT_LIST
} from './../constants/LiveSearch.constant';
import {
    fetchListSuccess, initialList
} from './../actions/LiveSearch.action';
import axios from 'axios';
import {endpoint} from '../../../_shared/axios-proxy/setupProxy';

let CancelToken = axios.CancelToken.source()

export function getSuggestions(value) {

    if (CancelToken) {
        CancelToken.cancel('cancelled');
        CancelToken = axios.CancelToken.source()
    }
    const result = endpoint.get(`/get-posts?term=${value}`, {
        cancelToken: CancelToken.token
    })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error;
        });
    return result
}

export function* fetchListFlow(action) {

    const result = yield call(getSuggestions, action.value);
    if (result) {
        yield put(fetchListSuccess(result));

    }
}

export function* initialListFlow() {
    put({ type: 'INIT_LIST' })
}

export function* abortRequest() {
    if (CancelToken) {
        CancelToken.cancel('cancelled');
        CancelToken = axios.CancelToken.source()
    }
}

// All sagas to be loaded
export default [
    takeLatest(FETCH_LIST_BEGIN, fetchListFlow),
    takeLatest(ABORT_REQUEST, abortRequest),
    takeLatest(INIT_LIST, initialListFlow),
];
