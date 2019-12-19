import {
    FETCH_QUESTIONS_START,
    FETCH_QUESTIONS_SUCCESS,
    FETCH_QUESTIONS_FAILURE,
    CORRECT,
    WRONG
} from '../middleware/middleware';

const initialState = {
    results: [],
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_QUESTIONS_START:
            return {
                ...state,
                error: '',
                isFetching: true
            };
        case FETCH_QUESTIONS_SUCCESS:
            return {
                ...state,
                error: '',
                isFetching: false,
                results: action.payload.map(element => {
                    return {
                        ...element,
                        correct: null
                    }
                })
            };
        case FETCH_QUESTIONS_FAILURE:
            return {

            }
        default:
            return state;
    }
}