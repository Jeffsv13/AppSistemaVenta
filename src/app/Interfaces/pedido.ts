import { DetallePedido } from "./detalle-pedido";

export interface Pedido {
    idPedido?: number,
    numeroDocumento?: string,
    fechaPedido?:string,
    fechaRecepcion?:string,
    fechaDespacho?:string,
    fechaEntrega?:string,
    idVendedor?:number,
    vendedorNombre?:string,
    idRepartidor?:number,
    repartidorNombre?:string,
    idEstado?:number,
    descripcionEstado?:string,
    totalTexto:string,
    detallePedido:DetallePedido[]
}
