//utillities
import { Wordlist } from "../../utilis/word.list.utilis"
import questionListCreator from "../../utilis/question.list.creator.utilis";
import randomString from "../../utilis/random.string.utilis";
import { getFromLocalStorage } from "../../utilis/get.from.localstorage.utilis";
//hooks
import { useEffect, useState } from "react"
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
//css
import "./index.css"
//components
import Question from "./components/Question";
import Displayer from "./components/Displayer";
//Actions
import { quizAddMistakeAction } from "../../Store/quiz/quiz.action.creator";

export default function Toggler() {
    const Store = useSelector((state) => state)
    const dispatch = useDispatch();
    let questions = questionListCreator(Wordlist);
    let [chosenIndex, setChosenIndex] = useState(0);
    let wrongAnswers = Store.quizReducer.mistakes;  

    const onHandleAnswer = (answer) => {
        if (answer !== questions[chosenIndex].trueAnswer) {
            let chosenword = questions[chosenIndex].word;
            let trueAnswer = questions[chosenIndex].trueAnswer;

            dispatch(quizAddMistakeAction({ chosenword, trueAnswer }));
            localStorage.setItem('Mistakes', JSON.stringify(wrongAnswers))
        }

        setChosenIndex(index => index + 1)
    }


    useEffect(() => {
        let date = getFromLocalStorage('quizDate');
        if (date === new Date().toDateString()) {
            setChosenIndex(10);
            const Mistakes = JSON.parse(getFromLocalStorage('Mistakes'))

            if (Mistakes) {
                for (const mistake of Mistakes) {
                    dispatch(quizAddMistakeAction(mistake));
                }
            }
        }
        else {
            localStorage.setItem('Mistakes', JSON.stringify(wrongAnswers))
            localStorage.removeItem('quizDate');
        }
    }, [chosenIndex])

    return (
        <>
            {
                chosenIndex < 10 ?
                    <Question key={randomString()}
                        options={questions[chosenIndex].Options}
                        handler={onHandleAnswer}
                        questionCount={(chosenIndex + 1) + '/' + questions.length}
                        title={questions[chosenIndex].word} /> : <Displayer />
            }

        </>
    )
}

