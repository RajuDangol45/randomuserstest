import { IonItem, IonItemSliding, IonLabel } from "@ionic/react";

const RandomUser = (user: any): JSX.Element => {
  return (
    <IonItemSliding>
      <IonItem>
        <IonLabel>{user.email}</IonLabel>
      </IonItem>
    </IonItemSliding>
  );
};

export default RandomUser;
