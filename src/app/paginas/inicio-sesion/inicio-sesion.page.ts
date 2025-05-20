import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';

//import { IonicModule } from '@ionic/angular';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { GeneralService } from 'src/app/servicios/general.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
  standalone: true,
  imports: [
    //IonicModule,
    IonButton, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, 
    CommonModule, FormsModule]
})
export class InicioSesionPage {

  usr = '';
  clave = '';

  constructor(
    private auth: AutenticacionService,
    public serv: GeneralService
  ) { }

  iniciarSesion() {
    if (!this.usr || !this.clave) {
      this.serv.fun_Mensaje('Ingrese usuario y contraseña', 'warning');
      return;
    }

    this.auth.login({ usuario: this.usr, password: this.clave }).subscribe({
      next: (res) => {
        this.serv.setSesion(res);
        this.serv.fun_Mensaje('Bienvenido ' + res.usuario);
        this.serv.irA('/principal');
      },
      error: (err) => {
        this.serv.fun_Mensaje(err.error?.msg || 'Error de conexión', 'danger');
      }
    });
  }

}
