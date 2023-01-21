//utillities
import { Wordlist } from "../../utilis/word.list"
import questionListCreator from "../../utilis/question.list.creator";
import randomString from "../../utilis/randomString";
//hooks
import { useState } from "react"
//css
import "./index.css"
//components
import Question from "./components/Question";

export default function Toggler() {
    let questions = questionListCreator(Wordlist);
    let [chosenIndex,setChosenIndex] = useState(0);
    let [score,setScore] = useState(0);

    const onHandleAnswer = (answer) => {
        if(answer === questions[chosenIndex].trueAnswer) {
            setScore(score => score + 1)
        }

        setChosenIndex(index => index + 1)
    }

    return (
        <>
            {
               chosenIndex < 10 ? 
                        <Question key={randomString()} 
                        options={questions[chosenIndex].Options} 
                        handler={onHandleAnswer}
                        questionCount={(chosenIndex + 1) + '/' + questions.length}
                        title={questions[chosenIndex].word} /> : score
            }

        </>
    )
}