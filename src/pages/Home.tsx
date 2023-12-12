import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import RandomUsersList from '../components/RandomUsersList';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Random Users List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">RandomUsersList</IonTitle>
          </IonToolbar>
        </IonHeader>
        <RandomUsersList></RandomUsersList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
