import {all} from 'redux-saga/effects';
import LiveSearchSaga from '../../components/LiveSearch/sagas/LiveSearch.saga';
import DetailSaga from '../../components/Detail/sagas/Detail.saga';

export const rootSaga = function* rootSagas() {
    yield all([
        ...LiveSearchSaga,
        ...DetailSaga
    ]);
};
