
// if tipo_bus === "A" {
// 	costo_bus= 2.0;
// } else if(tipo_bus === "B") {
// 	tipo_bus=2.5;
// }else if (tipo_bus === "C" ){
// 	costo_bus= 3.0;
// }
// switch ( tipo_bus){
// 	case "A":
// 		costo_bus = 2.0;
// 		break;
// 	case "B":
// 		costo_bus = 2.5;
// 		break;
// 	case "C":
// 		costo_bus = 3.0;
// }

// if( numero_personas <= 20){
// 	numero_personas = 20;
// }
// costo_total = numero_personas*costo_bus*kilometros;
// costo_por_persona = costo_total/numero_personas;

function calcular_costo_bus(tipo_bus){
	var costo_bus = null;
	switch ( tipo_bus){
		case "A":
			costo_bus = 2.0;
			break;
		case "B":
			costo_bus = 2.5;
			break;
		case "C":
			costo_bus = 3.0;
	}
	return costo_bus;
}

function ajustar_numero_personas(numero_personas){
	if( numero_personas <= 20){
	numero_personas = 20;
	}
	return numero_personas;
}

function calcular_costo_total(kilometros, tipo_bus, numero_personas){
	var costo_bus = calcular_costo_bus(tipo_bus);
	var numero_personas = ajustar_numero_personas(numero_personas);
	costo_total=  numero_personas*costo_bus*kilometros;
	return costo_total;
}

function calcular_costo_persona( costo_total, numero_personas){
	return costo_total/ numero_personas;
}

function calculos(kilometros, tipo_bus, numero_personas){

	var costo_total = calcular_costo_total(kilometros,"A",numero_personas);
	var costo_por_persona = calcular_costo_persona( costo_total, numero_personas);
	console.log("Datos entrada(kilometros: "+kilometros+",tipo_bus: "+tipo_bus+",numero_personas:"+numero_personas);
	console.log(costo_total);
	console.log(costo_por_persona);
}
calculos(300,"A",15);
calculos(200,"B", 25);
calculos(1024,"C",45);
