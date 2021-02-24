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
                detail: {
                    title: action.payload.title,
                    field: action.payload.Field,
                },
                isLoading: false,
            };
        default:
            return state;
    }
}
