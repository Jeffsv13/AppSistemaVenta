import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { appsetings } from '../Settings/appsetings';
import { ResponseApi } from '../Interfaces/response-api';
import { Login } from '../Interfaces/Login';
import { Usuario } from '../Interfaces/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private urlApi:string = appsetings.apiUrl + "Usuario/"

  constructor(private http:HttpClient) { }

  iniciarSesion(request: Login):Observable<ResponseApi>{
    return this.http.post<ResponseApi>(`${this.urlApi}IniciarSesion`,request)
  }

  lista():Observable<ResponseApi>{
    return this.http.get<ResponseApi>(`${this.urlApi}Lista`)

  }

  guardar(request: Usuario):Observable<ResponseApi>{
    return this.http.post<ResponseApi>(`${this.urlApi}Guardar`,request)
  }

  editar(request: Usuario):Observable<ResponseApi>{
    return this.http.put<ResponseApi>(`${this.urlApi}Editar`,request)
  }

  eliminar(id: number):Observable<ResponseApi>{
    return this.http.delete<ResponseApi>(`${this.urlApi}Eliminar/${id}`)
  }
}
