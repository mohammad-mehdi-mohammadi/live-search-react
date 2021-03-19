// import {combineReducers} from 'redux';
// import LiveSearchReducer from "../../components/LiveSearch/reducers/LiveSearch.reducer";
// import DetailReducer from "./../../components/Detail/reducers/Detail.reducer"
//
// export default combineReducers({
//     LiveSearchReducer,
//     DetailReducer
// });


import { combineReducers } from 'redux'

import LiveSearchReducer from "../../components/LiveSearch/reducers/LiveSearch.reducer";
const rootReducer = combineReducers({
    liveSearchList: LiveSearchReducer,
})

export default rootReducer
