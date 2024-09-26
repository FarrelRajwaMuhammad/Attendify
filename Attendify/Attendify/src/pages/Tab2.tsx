import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import "./sass/Tab2.scss";
import "./sass/app.scss";

const Tab2: React.FC = () => {
  let time = new Date().toUTCString(); // Only hours and minutes
  const [clockIn, setClockIn] = useState<string[]>([]);
  const [clockOut, setClockOut] = useState<string[]>([]);

  const [ctime, setTime] = useState(time);
  const [msg, setMsg] = useState(""); // Set message to empty string
  const [isClockIn, setIsClockIn] = useState(false); // Set isClockIn to false
  const UpdateTime = () => {
    time = new Date().toUTCString(); // Update time with hours and minutes
    setTime(time);
  };

  const handleClockIn = () => {
    setMsg("Clocked in at " + ctime);
    setClockIn([...clockIn, ctime]); // Add current time to clockIn array
    setIsClockIn(true);

    // Add functionality to push time to database if needed
  }

  const handleClockOut = () => {
    setMsg("Clocked out at " + ctime);
    setClockOut([...clockOut, ctime]); // Add current time to clockOut array
    setIsClockIn(false);

    // Add functionality to push time to database if needed
  }

  useEffect(() => {
    if (isClockIn) {
      console.log("Clocked in at " + ctime);

    } else {
      console.log("Clocked out at " + ctime);
    }
  }, [isClockIn]);

  setInterval(UpdateTime, 1000); // Add a delay of 1000ms (1 second) to setInterval
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="title-page">Clock In/Out</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="containter" fullscreen>
        <IonCard style={{ margin: 8 }} className="card-container ion-justify-content-between">
          <IonCardHeader>
            <IonLabel className="clock">
              Clock In/Out
            </IonLabel>
          </IonCardHeader>
          <IonCard className="outer-clock-container">
            <IonCard style={{ margin: 8 }} className="clock-container">
              <IonCardHeader>
                <IonLabel className="clock">
                  {ctime}
                </IonLabel>
              </IonCardHeader>
            </IonCard>
          </IonCard>
          <IonRow>
            <IonButton onClick={handleClockIn} disabled={isClockIn === true} className="clock-in button">Clock In</IonButton>
            <IonButton onClick={handleClockOut} disabled={isClockIn === false} className="clock-out button">Clock Out</IonButton>
          </IonRow>
          <IonLabel>{msg}</IonLabel>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
