function calcular_gastos_fabricacion(materia_prima,tipo_producto) {
    var costo_gasto_fabricacion=null;
    if(tipo_producto===2 || tipo_producto===5){
        costo_gasto_fabricacion=materia_prima*0.3;
    }
    if(tipo_producto===3 || tipo_producto===6){
        costo_gasto_fabricacion=materia_prima*0.35;
    }
    if(tipo_producto===1 || tipo_producto===4){
        costo_gasto_fabricacion=materia_prima*0.85;
    }
    return costo_gasto_fabricacion;

}
function calcular_mano_obra(materia_prima,tipo_producto) {
    var costo_mano_obra=null;
    if(tipo_producto===3 || tipo_producto===4){
        costo_mano_obra=materia_prima*0.75;
    }
    if(tipo_producto===1 || tipo_producto===5){
        costo_mano_obra=materia_prima*0.8;
    }
    if(tipo_producto===2 || tipo_producto===6){
        costo_mano_obra=materia_prima*0.85;
    }
    return costo_mano_obra;

}
function calcular_costo_produccion(materia_prima,tipo_producto) {
    return materia_prima+calcular_mano_obra(materia_prima,tipo_producto)+calcular_gastos_fabricacion(materia_prima,tipo_producto);
}
function calcular_precio_venta(materia_prima,tipo_producto) {
    var costo_produccion=calcular_costo_produccion(materia_prima);
    return parseFloat((costo_produccion*1.45).toFixed(2));
}

console.log(calcular_precio_venta(305,1));
console.log(calcular_precio_venta(200,4));
console.log(calcular_precio_venta(100,6));