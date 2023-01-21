import questionCreator from "./question.creator";

export default function questionListCreator(list) {
    let questionList = new Array(10);

    for (let i = 0; i < questionList.length; i++) {
        questionList[i] = questionCreator(list);
    }

    return questionList;
}