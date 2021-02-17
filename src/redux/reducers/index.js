import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import LiveSearchReducer from "../../components/LiveSearch/reducers/LiveSearch.reducer";
import DetailReducer from "./../../components/Detail/reducers/Detail.reducer"

export default combineReducers({
    form: formReducer,
    LiveSearchReducer,
    DetailReducer
});
