import { Component } from '@angular/core';
import { IonAlert, IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonAlert, IonButton, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  alertButtons = ['Yes', 'No'];
}
