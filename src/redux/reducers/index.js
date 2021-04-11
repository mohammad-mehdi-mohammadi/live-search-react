
import { combineReducers } from 'redux'

import LiveSearchReducer from "../../components/LiveSearch/reducers/LiveSearch.reducer";
const rootReducer = combineReducers({
    liveSearchList: LiveSearchReducer,
})

export default rootReducer
