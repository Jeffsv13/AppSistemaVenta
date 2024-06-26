import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { appsetings } from '../Settings/appsetings';
import { ResponseApi } from '../Interfaces/response-api';
import { Producto } from '../Interfaces/producto';
import { Pedido } from '../Interfaces/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private urlApi:string = appsetings.apiUrl + "Pedido/"

  constructor(private http:HttpClient) { }

  registrar(request: Pedido):Observable<ResponseApi>{
    return this.http.post<ResponseApi>(`${this.urlApi}Registrar`,request)
  }

  historial(buscarPor:string,numeroPedido:string,fechaInicio:string,fechaFin:string):Observable<ResponseApi>{
    return this.http.get<ResponseApi>(`${this.urlApi}Historial?buscarPor=${buscarPor}&numeroPedido=${numeroPedido}
      &fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`)
  }
}
