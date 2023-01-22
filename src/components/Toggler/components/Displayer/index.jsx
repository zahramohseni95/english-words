import { useEffect, useState } from "react"
import randomString from "../../../../utilis/random.string.utilis"
import { getFromLocalStorage } from "../../../../utilis/get.from.localstorage.utilis"

export default function Displayer() {

    let [mistakes,setMistakes] = useState([]);
    let score = 10;

    useEffect(() => {
        let date = getFromLocalStorage('quizDate');

        if (!date) {
            localStorage.setItem('quizDate', new Date().toDateString())
        }

        let mistakesList = getFromLocalStorage('Mistakes');

        if (mistakes) {
            mistakes = setMistakes(JSON.parse(mistakesList));
        }

    }, [])

    return (
        <div className="score">
            <h1 className="grade">Score: { score - mistakes.length} </h1>
            {mistakes.map(
                (element) => <div key={randomString()} className="wrongCard">
                    {element.chosenword + "  " + element.trueAnswer}
                </div>)}
        </div>
    )
}