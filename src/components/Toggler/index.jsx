//utillities
import { Wordlist } from "../../utilis/word.list.utilis";
import questionListCreator from "../../utilis/question.list.creator.utilis";
import randomString from "../../utilis/random.string.utilis";
import { getFromLocalStorage } from "../../utilis/get.from.localstorage.utilis";
//hooks
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
//css
import "./index.css";
//components
import Question from "./components/Question";
import Displayer from "./components/Displayer";
//Actions
import {
  quizAddMistakeAction,
  quizSelectedQuestion,
} from "../../Store/quiz/quiz.action.creator";

export default function Toggler() {
  const Store = useSelector((state) => state);
  const dispatch = useDispatch();
  let questions = questionListCreator(Wordlist);
  let [chosenIndex, setChosenIndex] = useState(0);
  let wrongAnswers = Store.quizReducer.mistakes;
  dispatch(quizSelectedQuestion(questions[chosenIndex]));

  const onHandleAnswer = (answer) => {
    //checks if the answer is wrong the put it into state's wrong answers with the correct response
    //then set's the saves the latest state of the wrong answers in local storage
    if (answer !== questions[chosenIndex].trueAnswer) {
      let chosenword = questions[chosenIndex].word;
      let trueAnswer = questions[chosenIndex].trueAnswer;

      dispatch(quizAddMistakeAction({ chosenword, trueAnswer }));
      localStorage.setItem("Mistakes", JSON.stringify(wrongAnswers));
    }

    setChosenIndex((index) => index + 1);
  };

  useEffect(() => {
    //if finds the today's date in local storage it stops the quiz
    let date = getFromLocalStorage("quizDate");
    if (date === new Date().toDateString()) {
      setChosenIndex(10);
    } else {
      localStorage.setItem("Mistakes", JSON.stringify(wrongAnswers));
      localStorage.removeItem("quizDate");
    }
  }, []);

  return (
    <>
      {chosenIndex < 10 ? (
        <Question
          key={randomString()}
          handler={onHandleAnswer}
          questionCount={1}
        />
      ) : (
        <Displayer />
      )}
    </>
  );
}
