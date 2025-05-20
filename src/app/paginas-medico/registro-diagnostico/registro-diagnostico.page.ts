import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-registro-diagnostico',
  templateUrl: './registro-diagnostico.page.html',
  styleUrls: ['./registro-diagnostico.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RegistroDiagnosticoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
