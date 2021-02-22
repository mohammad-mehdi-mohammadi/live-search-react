import {put, call, takeLatest} from 'redux-saga/effects';
import {
    FETCH_DETAIL_BEGIN,
} from './../constants/Detail.constants';
import {
    fetchDetailBegin,
    fetchDetailSuccess,
} from './../actions/Detail.actions';
import axios from 'axios';
import {endpoint} from './../../../_shared/axios-proxy/setupProxy'


let CancelToken = axios.CancelToken.source()

export function getDetail(id) {

    if (CancelToken) {
        CancelToken.cancel('cancelled');
        CancelToken = axios.CancelToken.source()
    }
    const result = endpoint.get(`/get-post?id=${id}`, {
        cancelToken: CancelToken.token
    })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return null;
        });
    return result
}

export function* fetchDetail(action) {

    // yield put(listIsLoading(true));
    console.log(action)
    const result = yield call(getDetail, action.payload);
    if (result) {
        yield put(fetchDetailSuccess(result));

    }
    // yield put(listIsLoading(false));

}

export function* abortRequest() {
    if (CancelToken) {
        CancelToken.cancel('cancelled');
        CancelToken = axios.CancelToken.source()
    }

}

// All sagas to be loaded
export default [
    takeLatest(FETCH_DETAIL_BEGIN, fetchDetail),
    // takeLatest(ABORT_REQUEST, abortRequest),
];
