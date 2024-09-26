import { IonAvatar, IonButton, IonCard, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './sass/Tab3.scss';
import { Router } from 'react-router';

const Tab3: React.FC = () => {

  const user =
  {
    name: "kocos",
    email: "kocos@gmail.com",
    phone: "08123456789",
    address: "Jl. Kebon Jeruk No. 1",
    gender: "Male"
  }

  const handleLogOut = () => {
    console.log('Log Out User', user.name);
    // Router.replace('/Login');
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='title-page'>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard className='profile-container'>
          <IonAvatar>
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/avatar.svg" className="class-image" />
          </IonAvatar>
          <IonList>
            <IonItem>
              <IonInput label="Name    :" value={user.name} disabled={true} placeholder="Name    :"></IonInput>
            </IonItem>
            <IonItem>
              <IonInput label="Email   :" value={user.email} disabled={true} placeholder="Email   :"></IonInput>
            </IonItem>
            <IonItem>
              <IonInput label="Phone   :" value={user.phone} disabled={true} placeholder="Phone   :"></IonInput>
            </IonItem>
            <IonItem>
              <IonInput label="Address :" value={user.address} disabled={true} placeholder="Address :"></IonInput>
            </IonItem>
            <IonItem>
              <IonInput label="Gender :" value={user.gender} disabled={true} placeholder="Address :"></IonInput>
            </IonItem>
          </IonList>
          <IonButton onClick={handleLogOut}>Log Out</IonButton>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
