import randomString from "../../../../utilis/random.string.utilis";
//hooks
import { useSelector } from "react-redux";
import { useTimer } from "../../../../hooks/timer.hook";
import { useEffect } from "react";

export default function Question(props) {
  const Store = useSelector((state) => state);

  const selectedQuestion = Store.question;

  let { value, isDone, start } = useTimer(10);

  const HandleClick = (e) => {
    let answer = e.target.textContent;

    props.handler(answer);
  };

  useEffect(() => {
    start();

    if (isDone) {
      props.handler("");
    }
  }, [value]);

  return (
    <div className="question">
      <h2>{props.questionCount + " / 10"}</h2>
      <h2>Find the right translation for selected word</h2>
      <h4>{selectedQuestion.word}</h4>
      {selectedQuestion.Options.map((option) => {
        return (
          <button key={randomString()} onClick={HandleClick}>
            {option}
          </button>
        );
      })}
      <h3>{value}</h3>
    </div>
  );
}
