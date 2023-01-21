import randomString from "../../../../utilis/randomString";

export default function Question(props) {

    const onHandleClick = (e) => {
        let answer = e.target.textContent;

        props.handler(answer)
    }
    return (
        <div className="question">
            <h2 ion-text >{props.questionCount}</h2>
            <h2>Find the right translation for selected word</h2>
            <h4>{props.title}</h4>
            {props.options.map((option) => {
                return <button key={randomString()} onClick={onHandleClick}>{option}</button>
            })}
        </div>
    )
}