import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { UsuarioComponent } from './Pages/usuario/usuario.component';
import { ProductoComponent } from './Pages/producto/producto.component';
import { PedidoComponent } from './Pages/pedido/pedido.component';
import { HistorialPedidoComponent } from './Pages/historial-pedido/historial-pedido.component';

const routes: Routes = [{
  path:'',
  component:LayoutComponent,
  children:[
    {path:'usuarios',component:UsuarioComponent},
    {path:'productos',component:ProductoComponent},
    {path:'pedido',component:PedidoComponent},
    {path:'historial_pedido',component:HistorialPedidoComponent},

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
