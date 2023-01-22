import randomString from "../../../../utilis/random.string.utilis";
//hooks
import { useSelector } from "react-redux";

export default function Question(props) {
  const Store = useSelector((state) => state);

  const selectedQuestion = Store.quizReducer.selectedquestion;

  const onHandleClick = (e) => {
    let answer = e.target.textContent;

    props.handler(answer);
  };
  return (
    <div className="question">
      <h2>{props.questionCount + "/" + "10"}</h2>
      <h2>Find the right translation for selected word</h2>
      <h4>{selectedQuestion.word}</h4>
      {selectedQuestion.Options.map((option) => {
        return (
          <button key={randomString()} onClick={onHandleClick}>
            {option}
          </button>
        );
      })}
    </div>
  );
}
