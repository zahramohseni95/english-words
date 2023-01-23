//Hooks
import { useEffect, useState } from "react";
//Utilities
import randomString from "../../../../utilis/random.string.utilis";
import { getFromLocalStorage } from "../../../../utilis/get.from.localstorage.utilis";
// ionic components
import {
  IonHeader,
  IonPage,
  IonToolbar,
  IonContent,
  IonList,
  IonItem,
  IonRow,
  IonCol,
  IonGrid,
} from "@ionic/react";
//styles
import "./index.css";

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
    <IonPage className="end-page">
      <IonHeader class="end-page-header ion-no-border">
        <IonToolbar className="end-page-title">
          Good job!
          <br /> come back tomorrow.
        </IonToolbar>
      </IonHeader>
      <IonContent className="end-page-content">
        <IonToolbar className="end-page-score">
          Your Score : {score - mistakes.length * 10}
        </IonToolbar>
        <IonList inset={true}>
          {mistakes.map((element) => (
            <IonItem key={randomString()}>
              <IonGrid>
                <IonRow className="wrong-answer-item">
                  <IonCol>{element.chosenword}</IonCol>
                  <IonCol>{element.trueAnswer}</IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
}
