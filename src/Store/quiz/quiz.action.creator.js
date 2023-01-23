import { ADD_MISTAKE, SELELCT_QUESTION } from "./quiz.constants";

export function quizAddMistakeAction(payload) {
    return {
        type: ADD_MISTAKE,
        payload,
    }
}

export function quizSelectedQuestion(payload) {
    return {
        type: SELELCT_QUESTION,
        payload: payload,
    }
}