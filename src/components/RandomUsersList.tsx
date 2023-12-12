import { IonItemSliding, IonList, IonLoading } from "@ionic/react";
import useRandomUsersFetch from "../service/RandomUsersFetch";
import RandomUser from "./RandomUser";

const RandomUsersList = (): JSX.Element => {
  const { data, loading } = useRandomUsersFetch();

  return (
    <div>
      {loading && <IonLoading></IonLoading>}
      {!loading && (
        <IonList>
          {data && data.results.map((el: any) => <RandomUser key={el.login.uuid} user={el}></RandomUser>)}
        </IonList>
      )}
    </div>
  );
};

export default RandomUsersList;
