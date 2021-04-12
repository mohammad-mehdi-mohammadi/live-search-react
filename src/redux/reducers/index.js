
import { combineReducers } from 'redux'

import LiveSearchReducer from "../../components/LiveSearch/reducers/LiveSearch.reducer";
import DetailReducer from "../../components/Detail/reducers/Detail.reducer";
const rootReducer = combineReducers({
    liveSearchState: LiveSearchReducer,
    detailState: DetailReducer
})

export default rootReducer
