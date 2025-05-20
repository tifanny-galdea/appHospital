import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-agendar-citas',
  templateUrl: './agendar-citas.page.html',
  styleUrls: ['./agendar-citas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AgendarCitasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
