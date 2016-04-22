//************PREGUNTA #7

function multiplicar(a,b){
	var resultado=0;
	resultado= a*b;
	return resultado;
}
numero = Number(prompt("Please enter one number"));
document.write('<br>'+"La tabla de multiplicar de "+numero+" es :")
for(i=0;i<=12;i++){
	document.write('<br>'+i+"*"+numero+"="+multiplicar(i,numero) );
}
