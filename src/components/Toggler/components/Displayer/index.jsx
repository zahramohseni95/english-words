//Hooks
import { useEffect, useState } from "react";
//Utilities
import randomString from "../../../../utilis/random.string.utilis";
import { getFromLocalStorage } from "../../../../utilis/get.from.localstorage.utilis";

export default function Displayer() {
  let [mistakes, setMistakes] = useState([]);
  let score = 100;

  useEffect(() => {
    //it there was no quizdDate in localStorage in sets today date in local storage
    //and finds the wrong answers in local storage
    let date = getFromLocalStorage("quizDate");

    if (!date) {
      localStorage.setItem("quizDate", new Date().toDateString());
    }

    let mistakesList = getFromLocalStorage("Mistakes");

    if (mistakesList) {
      const payload = JSON.parse(mistakesList);
      setMistakes(payload);
    }
  }, []);

  return (
    <div className="score">
      <h1 className="grade">Score: {score - mistakes.length * 10} </h1>
      {mistakes.map((element) => (
        <div key={randomString()} className="wrongCard">
          {element.chosenword + "  " + element.trueAnswer}
        </div>
      ))}
    </div>
  );
}
