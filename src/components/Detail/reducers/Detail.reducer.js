import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    detail: {
        title: '',
        field: ''
    },
    isLoading: false,
};


const DetailSlice = createSlice({
        name: 'detailState',
    initialState,
    reducers: {
        fetchDetailBegin(state) {
            state.isLoading = true
        },
        fetchDetailSuccess(state, action) {
            state.detail.title = action.payload.title
            state.detail.Field = action.payload.Field
            state.isLoading = false

        }
    }
})

export const {fetchDetailBegin, fetchDetailSuccess} = DetailSlice.actions

export default DetailSlice.reducer;


// const initialState = {
//     detail: {
//         title: '',
//         field: ''
//     },
//     isLoading: false,
// };
//
// export default function (state = initialState, action) {
//     switch (action.type) {
//         case FETCH_DETAIL_BEGIN:
//             return {
//                 ...state,
//                 isLoading: true
//             };
//
//         case FETCH_DETAIL_SUCCESS:
//
//             return {
//                 ...state,
//                 detail: {
//                     title: action.payload.title,
//                     field: action.payload.Field,
//                 },
//                 isLoading: false,
//             };
//         default:
//             return state;
//     }
// }
