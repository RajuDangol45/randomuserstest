import { IonItemSliding, IonList, IonLoading } from "@ionic/react";
import useRandomUsersFetch from "../service/RandomUsersFetch";
import RandomUser from "./RandomUser";

const RandomUsersList = (): JSX.Element => {
  let { data, loading, setData } = useRandomUsersFetch();

  const deleteUser = (email: string) => {
    data = data.filter((user: any) => user.email !== email);
    setData(data)
  }

  return (
    <div>
      <IonLoading isOpen={loading} message={'Fetching users'}></IonLoading>
      {!loading && (
        <IonList>
          {data && data.map((el: any) => <RandomUser key={el.email} user={el} deleteUser={deleteUser}></RandomUser>)}
        </IonList>
      )}
    </div>
  );
};

export default RandomUsersList;
