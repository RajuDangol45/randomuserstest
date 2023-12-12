import { IonItem, IonItemOption, IonItemSliding, IonLabel, IonItemOptions } from "@ionic/react";

const RandomUser = (props: any): JSX.Element => {
  return (
    <IonItemSliding>
      <IonItem>
        <IonLabel>{props.user.email}</IonLabel>
      </IonItem>

      <IonItemOptions>
        <IonItemOption color="danger" onClick={() => props.deleteUser(props.user.email)}>Delete</IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};

export default RandomUser;
