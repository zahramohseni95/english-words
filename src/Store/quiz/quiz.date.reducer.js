import { ADD_MISTAKE, SELELCT_QUESTION } from "./quiz.constants";

const initialState = {
    mistakes: [],
    selectedquestion: null,
}

export default function quizReducer(state = { ...initialState }, action) {
    switch (action.type) {
        case ADD_MISTAKE:
            state.mistakes.push(action.payload);
            break;
        case SELELCT_QUESTION:
            state.selectedquestion = action.payload;
            break;
        default:
    }
    return state;
}