import {
  IonButton,
  IonCard,
  IonContent,
  IonHeader,
  IonInput,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./sass/Login.scss";
import "./sass/app.scss"
import { useEffect, useState } from "react";

const Tab4: React.FC = () => {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });


  //  const handleChangeEmail = (e: CustomEvent) => {
  //     setUser({
  //       ...user,
  //       email: e.detail.value,
  //     });
  //     console.log("Changed To Email ==",user.email);

  //   }

  //   const handleChangePassword = (e: CustomEvent) => {
  //     setUser({
  //       ...user,
  //       password: e.detail.value,
  //     });
  //     console.log("Pass Changed to == ",user.password);

  //   }

  const handleInputChange = (e: CustomEvent) => {
    const { name, value } = (e.target as HTMLInputElement);
    setUser({
      ...user,
      [name]: value,
    });
    console.log(user);
  }

  const handleLogin = (user: { email: string, password: string }) => {
    // setUser(currentUser => {
    //   console.log("User logged in:", currentUser);
    //   if (currentUser.email === "kocos@gmail.com" && currentUser.password === "123") {
    //     console.log("User logged in successfully");
    //   } else {
    //     console.log("Failed Auth");
    //   }
    //   return currentUser;
    // });
    console.log("User logged in:", user);
    
  };

  useEffect(() => {
    handleInputChange;
    console.log("User state updated:", user);
  }, [user.email, user.password]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="title-page">Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <br />
        <IonCard className="card-container">
          <img
            alt="Silhouette of mountains"
            style={{ marginBottom: 10 }}
            src="https://ionicframework.com/docs/img/demos/card-media.png"
            className="class-image"
          />
          <IonInput
            name="email"
            value={user.email}
            label="Email"
            labelPlacement="floating"
            fill="outline"
            type="email"
            placeholder="Email"
            style={{ marginBottom: 10 }}
            onIonChange={handleInputChange}
            required={true}
          />
          <IonInput
            name="password"
            value={user.password}
            label="Password"
            labelPlacement="floating"
            type="password"
            fill="outline"
            placeholder="Password"
            style={{ marginBottom: 10 }}
            onIonChange={handleInputChange}
            required={true}
          />
          <IonButton disabled={user.email.length <= 0 || user.password.length <= 0} onClick={() => handleLogin(user)}>Sign In</IonButton>
          <h1>{user.email}</h1>
          <h1>{user.password}</h1>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
