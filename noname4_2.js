
//***********PREGUNTA #4.2
var promedio=0;
var suma = 0;
var numero_alumnos=Number(prompt("Ingrese numero de alumnos"));
var i = 1;
do{
	notas = Number(prompt("Please enter your notes" + i));
	suma = suma + notas;
	promedio = suma/3;
	i++
}while(i<numero_alumnos+1)

document.write(promedio);

