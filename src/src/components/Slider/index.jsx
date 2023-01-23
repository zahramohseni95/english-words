//Components
import { IonSlides, IonSlide, IonButton, IonText } from "@ionic/react"
//Styles
import "./index.css"

//just explain how to use this application

export default function Slider() {
    return (
        <IonSlides>
            <IonSlide className="Slide-section">
                <IonText >
                    <h1>Welcome to GoodVocab</h1>
                    <p>This is a vocabulary app designed for learning english words for all persian speakers</p>
                </IonText>

            </IonSlide>
            <IonSlide className="Slide-section">
                <IonText>
                    <h1>How to use?</h1>
                    <p>In this app, you will take a quiz right after opening the app after finishing quiz you will see your score and your mistakes</p>
                </IonText>
            </IonSlide>
            <IonSlide className="Slide-section">
                <IonText>
                    <h1>Are You Ready? </h1>
                    <IonButton color="success" routerLink="/Quiz">Let`s Go!</IonButton>
                </IonText>
            </IonSlide>
        </IonSlides>
    )
}