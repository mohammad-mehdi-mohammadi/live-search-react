import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    list: [],
    isLoading: false,
};


const LiveSearchSlice = createSlice({
    name: 'liveSearchState',
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

export default LiveSearchSlice.reducer;
