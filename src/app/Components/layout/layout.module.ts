import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { UsuarioComponent } from './Pages/usuario/usuario.component';
import { ProductoComponent } from './Pages/producto/producto.component';
import { PedidoComponent } from './Pages/pedido/pedido.component';
import { HistorialPedidoComponent } from './Pages/historial-pedido/historial-pedido.component';
import { SharedModule } from '../../Reutilizable/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    UsuarioComponent,
    ProductoComponent,
    PedidoComponent,
    HistorialPedidoComponent,
    SharedModule
  ]
})
export class LayoutModule { }
