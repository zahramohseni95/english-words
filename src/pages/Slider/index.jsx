import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

export function Slider() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Slider</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton routerLink="/quiz">start</IonButton>
      </IonContent>
    </IonPage>
  )
}
