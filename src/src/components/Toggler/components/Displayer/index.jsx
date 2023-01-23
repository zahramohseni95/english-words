import { useEffect, useState } from "react"
import randomString from "../../../../utilis/random.string.utilis"
import { getFromLocalStorage } from "../../../../utilis/get.from.localstorage.utilis"

export default function Displayer() {
    //create a state for mistake to calculate score 
    



    let [mistakes,setMistakes] = useState([]);
    let score = 100;
    // after render page, check it, if you dont have date, create a new date on localStorage
    //else you dont have time , thus show mistake.
    // then get the mistake to display it.
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
            <h1 className="grade">Score: { score - mistakes.length *10} </h1>
            {mistakes.map(
                (mistake) => <div key={randomString()} className="wrongCard">
                    {mistake.chosenword + "  " + mistake.trueAnswer}
                </div>)}
        </div>
    )
}