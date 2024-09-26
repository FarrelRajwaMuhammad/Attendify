import { IonCard, IonContent, IonHeader, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonItem } from '@ionic/react';
import './sass/Tab3.scss';
import './sass/app.scss'
import React from 'react';
import './sass/Summary.scss'

const Summary: React.FC = () => {
    const user = "kocos";
    const Attend_data = [{
        id : "1",
        name : "kocos",
        total_work_hours : "8",
        days_present : "5",
        days_absent : "2",
        days_late : "1",
        total_cuti : "1",
        overtime : "2",
    }]

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle className='title-page'>Summary</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonCard className='card-container'>
                    <IonLabel className='heading'>
                        <h1 >Hello {user}!, Here Is Your Summary</h1>
                        <IonList>
                            {Attend_data.map((record, index) => (
                                <IonItem key={index}>
                                    <IonLabel className='summary-text'>
                                        <h2>name: {record.name}</h2>
                                        <p>id: {record.id}</p>
                                        <p>Days Present: {record.days_present}</p>
                                        <p>Total Hours: {record.total_work_hours}</p>
                                        <p>Days Present: {record.days_present}</p>
                                        <p>Days Absent: {record.days_absent}</p>
                                        <p>Days Late: {record.days_late}</p>
                                        <p>Total Leave : {record.total_cuti}</p>
                                        <p>Overtime : {record.overtime}</p>
                                    </IonLabel>
                                </IonItem>
                            ))}
                        </IonList>
                    </IonLabel>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Summary;
