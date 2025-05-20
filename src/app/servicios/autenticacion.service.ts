import { Injectable } from '@angular/core';
import { GeneralService } from './general.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AutenticacionService {

  constructor(
    private servG:GeneralService,
    private http: HttpClient
  ) {}

  login(data: { usuario: string, password: string }) {
    return this.http.post<any>(this.servG.URLSERV + 'login', data);
  }

}
