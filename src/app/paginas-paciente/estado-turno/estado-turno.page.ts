import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-estado-turno',
  templateUrl: './estado-turno.page.html',
  styleUrls: ['./estado-turno.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class EstadoTurnoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
