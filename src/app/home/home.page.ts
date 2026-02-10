import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone'; // Importaciones específicas

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true, // <--- Esto indica que es Standalone
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton], // Aquí añades los componentes de Ionic que uses
})
export class HomePage {
  constructor() {}

  manejarEvento() {
    const titulo = document.getElementById('texto-interactivo');
    if (titulo) {
      titulo.innerText = "¡Evento Detectado!";
      titulo.style.color = "#2dd36f";
    }
  }
}