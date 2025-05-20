import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-historial-paciente',
  templateUrl: './historial-paciente.page.html',
  styleUrls: ['./historial-paciente.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HistorialPacientePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
