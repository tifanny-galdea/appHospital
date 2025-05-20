import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-registro-signos-vitales',
  templateUrl: './registro-signos-vitales.page.html',
  styleUrls: ['./registro-signos-vitales.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RegistroSignosVitalesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
