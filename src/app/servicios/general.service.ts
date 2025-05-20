import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  public URLSERV:string ="";
  private rol = '';
  private menu: any[] = [];

  constructor(private router:Router,private toast:ToastController) {
      this.URLSERV = "https://api-hospital-mu.vercel.app/api/"
  }

  //funciones generales
  irA(url:string){
      this.router.navigateByUrl(url);
  }

  //funcion emite mensaje
  async fun_Mensaje(texto: string, tipo: string = 'success') {
    let t = await this.toast.create({
      message: texto,
      color: tipo,
      duration: 3000
    });
    t.present();
  }

  //FUNCIONES PARA GUARDAR INFO
  setSesion(datos: any) {
    this.rol = datos.rol;
    this.menu = datos.menu;
  }

  getRol() {
    return this.rol;
  }

  getMenu() {
    return of(this.menu);
  }

}
