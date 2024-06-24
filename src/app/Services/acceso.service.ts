import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { appsetings } from '../Settings/appsetings';
import { Usuario } from '../Interfaces/Usuario';
import { Observable } from 'rxjs';
import { ResponseAcceso } from '../Interfaces/ResponseAcceso';
import { Login } from '../Interfaces/Login';

@Injectable({
  providedIn: 'root'
})
export class AccesoService {

  private http = inject(HttpClient)
  private baseUrl:string = appsetings.apiUrl;

  constructor() { }

  registrarse(objeto:Usuario):Observable<ResponseAcceso>{
    return this.http.post<ResponseAcceso>(`${this.baseUrl}Acceso/Registrarse`,objeto)
  }
  login(objeto:Login):Observable<ResponseAcceso>{
    return this.http.post<ResponseAcceso>(`${this.baseUrl}Acceso/Login`,objeto)
  }
}
