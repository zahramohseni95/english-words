import questionCreator from "./question.creator.utilis";

export default function questionListCreator(list) {
    let questionList = new Array(10);
    let clondedList = [...list]
    for (let i = 0; i < questionList.length; i++) {
        questionList[i] = questionCreator(clondedList);
    }

    return questionList;
}
