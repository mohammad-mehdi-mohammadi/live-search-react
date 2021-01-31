import {all} from 'redux-saga/effects';
import LiveSearchSaga from './../../components/LiveSearch/sagas';

export const rootSaga = function* rootSagas() {
    yield all([
        ...LiveSearchSaga
    ]);
};