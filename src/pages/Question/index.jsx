import { IonContent, IonHeader, IonPage } from "@ionic/react";
import { Header } from "./Header";

//hooks
import { useEffect, useState } from "react";
// Utilities
import { randomNumber } from "../../utils/random-number.util";
import { pickRandomNIndex } from "../../utils/pick-random-n-index";
import { Wordlist } from "../../utils/word.list";
import { getItem, setItem } from "../../utils/local-storage.util";
// styles
import "./index.css";
import { Redirect } from "react-router";

export function Question() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    setItem("countWords", 0);
  }, []);

  let limitedWords = getItem("countWords");
  const wrongAnswers = [];
  // 0 for persian 1 for english
  const lang = randomNumber(0, 1);
  //for question and options
  const words = pickRandomNIndex(Wordlist, 4);
  //chooose question index
  const questionIndex = randomNumber(0, 3);

  function handleAnswerClick(e) {
    const selectedOption = e.target.value;
    if (lang) {
      checkAnswer(words[questionIndex].translation, selectedOption);
    } else {
      checkAnswer(words[questionIndex].word, selectedOption);
    }
  }
  function checkAnswer(trueAnswer, selectedOption) {
    if (trueAnswer === selectedOption) {
      setScore(score + 5);
      console.log({ score });
    } else {
      setScore(score - 1);
      wrongAnswers.push(words[questionIndex]);
      console.log("wrongAnswers", wrongAnswers);
    }
    setItem("countWords", ++limitedWords);
  }

  return limitedWords == 6 ? (
    <Redirect to="/end" />
  ) : (
    <IonPage>
      <IonHeader>
        <Header number={limitedWords} />
      </IonHeader>
      <IonContent className="ion-padding">
        {lang ? (
          <>
            <div className="question">
              :ترجمه ی کلمه ی
              <br />
              {words[questionIndex].word}
            </div>
            <div className="options-wrapper">
              <br />
              <button
                className="option"
                value={words[0].translation}
                onClick={(e) => {
                  handleAnswerClick(e);
                }}
              >
                {words[0].translation}
              </button>
              <button
                className="option"
                value={words[1].translation}
                onClick={(e) => {
                  handleAnswerClick(e);
                }}
              >
                {words[1].translation}
              </button>
              <button
                className="option"
                value={words[2].translation}
                onClick={(e) => {
                  handleAnswerClick(e);
                }}
              >
                {words[2].translation}
              </button>
              <button
                className="option"
                value={words[3].translation}
                onClick={(e) => {
                  handleAnswerClick(e);
                }}
              >
                {words[3].translation}
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="question">
              :ترجمه ی کلمه ی
              <br />
              {words[questionIndex].translation}
            </div>
            <div className="options-wrapper">
              <br />
              <button
                className="option"
                value={words[0].word}
                onClick={(e) => {
                  handleAnswerClick(e);
                }}
              >
                {words[0].word}
              </button>
              <button
                className="option"
                value={words[1].word}
                onClick={(e) => {
                  handleAnswerClick(e);
                }}
              >
                {words[1].word}
              </button>
              <button
                className="option"
                value={words[2].word}
                onClick={(e) => {
                  handleAnswerClick(e);
                }}
              >
                {words[2].word}
              </button>
              <button
                className="option"
                value={words[3].word}
                onClick={(e) => {
                  handleAnswerClick(e);
                }}
              >
                {words[3].word}
              </button>
            </div>
          </>
        )}
      </IonContent>
    </IonPage>
  );
}
