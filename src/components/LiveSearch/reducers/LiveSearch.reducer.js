import {
    FETCH_LIST_BEGIN,
    FETCH_LIST_SUCCESS, INIT_LIST,
} from '../constants/LiveSearch.constant';

const initialState = {
    list: [],
    isLoading: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_LIST_BEGIN:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_LIST_SUCCESS:
            return {
                ...state,
                list: action.payload,
                isLoading: false
            };

        case INIT_LIST:
            return {
                ...state,
                list: initialState.list
            };
        default:
            return state;
    }
}
