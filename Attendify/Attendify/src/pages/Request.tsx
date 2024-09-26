import {
  IonAlert,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonDatetime,
  IonHeader,
  IonInput,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./sass/Login.scss";
import "./sass/app.scss"
import { useState } from "react";

const Tab4: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="title-page">Request</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard className="card-container">
          <IonLabel>
            <h1>What Do You Need?</h1>
          </IonLabel>
          <IonRow>
            <IonCol>
              <IonCard onClick={() => setIsOpen(true)} className="card-container">
                <img alt="Silhouette of mountains" className="card-image" />
                <IonCardHeader>
                  <IonCardTitle className='card-title'>Cuti</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard className="card-container">
                <img alt="Silhouette of mountains" className="card-image" />
                <IonCardHeader>
                  <IonCardTitle className='card-title'>Lembur</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard className="card-container">
                <img alt="Silhouette of mountains" className="card-image" />
                <IonCardHeader>
                  <IonCardTitle className='card-title'>Sakit</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonCard>
        <IonAlert
          isOpen={isOpen}
          header="Apakah Anda Yakin Untuk Request Sakit?"
          message="Request Absen Karena Sakit Akan Mengurangi Jumlah Cuti Anda"
          buttons={['Yakin']}
          onDidDismiss={() => setIsOpen(false)}
        ></IonAlert>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
