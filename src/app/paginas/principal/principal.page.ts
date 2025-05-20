import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSplitPane, IonRouterOutlet } from '@ionic/angular/standalone';

import { MenuComponent } from 'src/app/componentes/menu/menu.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [IonRouterOutlet, IonSplitPane, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, MenuComponent]
})
export class PrincipalPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
