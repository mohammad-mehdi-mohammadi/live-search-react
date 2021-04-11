import {put, call, takeLatest} from 'redux-saga/effects';
import {

    FETCH_LIST_BEGIN,
} from '../constants/LiveSearch.constant';

import axios from 'axios';
import {endpoint} from '../../../_shared/axios-proxy/setupProxy';
import {fetchListBegin, initList} from "../reducers/LiveSearch.reducer";

let CancelToken = axios.CancelToken.source()

export function getSuggestions(value) {
    abortRequest()
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

    const result = yield call(getSuggestions, action.payload);
    if (result) {

        yield put(fetchListBegin(result))

    }
}

export function* initialListFlow() {
    put({type: 'INIT_LIST'})
}

export function* abortRequestFlow() {
    abortRequest();
}

export function abortRequest() {
    if (CancelToken) {
        CancelToken.cancel('cancelled');
        CancelToken = axios.CancelToken.source()
    }
}

// All sagas to be loaded
export default [
    takeLatest(FETCH_LIST_BEGIN, fetchListFlow),
    takeLatest('dasda/abortRequestx', abortRequestFlow),
    takeLatest(initList, initialListFlow),
];
