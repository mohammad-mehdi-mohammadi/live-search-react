import {
    FETCH_DETAIL_BEGIN,
    FETCH_DETAIL_SUCCESS
} from './../constants/Detail.constants';

const initialState = {
    detail: {
        title: '',
        field: ''
    },
    isLoading: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_DETAIL_BEGIN:
            return {
                ...state,
                isLoading: true
            };

        case FETCH_DETAIL_SUCCESS:

            return {
                ...state,
                title: action.payload.title,
                field: action.payload.field,
                isLoading: false,
            };
        default:
            return state;
    }
}
