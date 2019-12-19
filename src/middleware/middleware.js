import axios from 'axios';

export const FETCH_QUESTIONS_START = 'FETCH_QUESTIONS_START';
export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
export const FETCH_QUESTIONS_FAILURE = 'FETCH_QUESTIONS_FAILURE';

export const CORRECT = 'CORRECT';
export const WRONG = 'WRONG';

export const getQuestions = () => dispatch => {
    dispatch({ type: FETCH_QUESTIONS_START });
    axios.get('https://opentdb.com/api.php?amount=10&category=15')
        .then(res => {
            dispatch({ type: FETCH_QUESTIONS_SUCCESS, payload: res.data.results});
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_QUESTIONS_FAILURE, payload: err});
        })
}

