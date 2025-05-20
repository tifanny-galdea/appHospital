import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.page.html',
  styleUrls: ['./lista-pacientes.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ListaPacientesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
