import { SELELCT_QUESTION } from "./quiz.constants";
import questionCreator from "../../utilis/question.creator.utilis";
import { Wordlist } from "../../utilis/word.list.utilis";

export default function questionReducer(state = questionCreator(Wordlist), action) {
    switch (action.type) {
        case SELELCT_QUESTION:
            state = action.payload;
            break;
        default:
    }
    return state;
}