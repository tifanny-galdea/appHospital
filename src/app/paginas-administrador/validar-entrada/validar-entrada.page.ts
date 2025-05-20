import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-validar-entrada',
  templateUrl: './validar-entrada.page.html',
  styleUrls: ['./validar-entrada.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ValidarEntradaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
