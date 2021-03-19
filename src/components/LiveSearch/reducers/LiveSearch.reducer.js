import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    list: [],
    isLoading: false,
};


const LiveSearchSlice = createSlice({
    name: 'liveSearchList',
    initialState,
    reducers: {
        fetchListBegin(state) {
            state.isLoading = true
        },
        fetchListSuccess(state, action) {
            state.list = action.payload
            state.isLoading = false
        },
        initList(state) {
            state.list = initialState.list
        }
    }
})

export const {fetchListBegin, fetchListSuccess, initList} = LiveSearchSlice.actions

export default LiveSearchSlice.reducer
// export const { FETCH_LIST_BEGIN, FETCH_LIST_SUCCESS } = todosSlice.actions
//
// export default function (state = initialState, action) {
//     switch (action.type) {
//         case FETCH_LIST_BEGIN:
//             return {
//                 ...state,
//                 isLoading: true
//             };
//         case FETCH_LIST_SUCCESS:
//             return {
//                 ...state,
//                 list: action.payload,
//                 isLoading: false
//             };
//
//         case INIT_LIST:
//             return {
//                 ...state,
//                 list: initialState.list
//             };
//         default:
//             return state;
//     }
// }
// export default LiveSearchSlice.reducer
