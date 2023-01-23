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
  IonText,
  IonRow,
  IonCol,
  IonGrid,
  useIonToast,
        IonLabel,
        IonItemDivider, 
        IonButton, useIonAlert, 
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


  const [presentAlert] = useIonAlert();
  const displayScore = score - mistakes.length * 10

  let x = mistakes.map(mistake => {
    return mistake.chosenword
  })
  const yy = 10
  const xx = mistakes.map(mistake => {
    return { value: `${mistake.chosenword}` }
  })
  const [present] = useIonToast();

  const presentToast = (position) => {
    present({
      message: 'Hello World!',
      duration: 1500,
      position: position
    });
  };


  return (
    <>

      <IonPage className="end-page">
        <IonHeader class="end-page-header ion-no-border">
          <IonToolbar className="end-page-title">
            <IonText >
              <h1>Done!</h1>
              <p>You can try again tomorrow, Good Luck!</p>

            </IonText>
          </IonToolbar>
        </IonHeader>
        <IonToolbar className="end-page-score">
          {<IonButton key={randomString()}
            onClick={() =>
              presentAlert({
                header: `${displayScore > 50 ? "Good Job!" : "Try Harder!"}`,
                message: `Your Score : ${displayScore}`,
                buttons: ["OK!"],
              })
            }
          >
            Your Score!
          </IonButton>}
        </IonToolbar>
        
        <IonItemDivider className="end-page-score">
          <IonLabel className="end-page-score">
            Your Mistake!
          </IonLabel>
        </IonItemDivider>
        <IonContent className="end-page-content">

                    {/*  create mistake by TOOOOOOAAAAAAST */}

          {mistakes.map(mistake => {
            return (
                
              <IonButton key={randomString()} expand="block" onClick={() => {
                present({
                  message: `${mistake.trueAnswer}`,
                  duration: 1500,
                  position: "bottom"
                });
              }}>{mistake.chosenword}</IonButton>
            )
          })}
          {/*  create mistake by ALLLLLLEEEEEERT */}
          <IonList inset={true}>
            
            <IonGrid>
              <IonRow className="wrong-answer-item">
                {mistakes.map(mistake => {
                  return (
                    <IonButton expand="block" key={randomString()}
                      onClick={() =>
                        presentAlert({
                          header: `${mistake.chosenword}`,

                          message: `${mistake.trueAnswer}`,
                          buttons: ["OK!"],


                        })
                      }
                    >
                      {mistake.chosenword}
                    </IonButton>
                  )
                })}
              </IonRow>
            </IonGrid>

          </IonList>
        </IonContent>
      </IonPage>
    </>
  );
}
