function calcularCostoHamburguesa(tipo){
	
	var costo=null;
	switch(tipo){
		case "sencillas":
			costo=20.00;
			break;
		case "dobles":
			costo=25.00;
			break;
		case "triples":
			costo=2.800;
			break;
	}
	return costo;
}


function calcularCostoTotal(cantidad,tipoHamburguesa,tarjeta){
	var costoHamburguesa = calcularCostoHamburguesa(tipoHamburguesa);
	if(tarjeta){
		costoHamburguesa *= 1.05;
	}
	return cantidad*costoHamburguesa;
}
console.log(calcularCostoTotal(10,"sencillas",true));
console.log(calcularCostoTotal(20,"dobles",true));
console.log(calcularCostoTotal(2,"triples",false));
