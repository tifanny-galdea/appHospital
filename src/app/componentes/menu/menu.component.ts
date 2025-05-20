import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/servicios/general.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

  listamenu: any[] = []

  constructor(public serv: GeneralService) { }

  ngOnInit() {}

  cargarMenu() {
  this.serv.getMenu().subscribe(menu => {
    this.listamenu = menu;
  });
}

}
