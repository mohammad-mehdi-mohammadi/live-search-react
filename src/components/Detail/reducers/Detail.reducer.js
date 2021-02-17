import {
    FETCH_DETAIL_BEGIN,
} from './../constants/Detail.constants';

const initialState = {
    list: [],
    isLoading: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        // case FETCH_LIST_SUCCESS:
        //     return {
        //         ...state,
        //         list: action.payload,
        //     };
        //
        // case LIST_IS_LOADING:
        //
        //     return {
        //         ...state,
        //         isLoading: action.payload,
        //     };
        default:
            return state;
    }
}
