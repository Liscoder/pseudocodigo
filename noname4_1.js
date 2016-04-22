//***********PREGUNTA #4.1
var promedio=0;
var suma = 0;
var numero_alumnos=Number(prompt("Ingrese numero de alumnos"));
var i = 1;
while(i<numero_alumnos+1){
	notas = Number(prompt("Please enter your notes" + i));
	suma = suma + notas;
	promedio = suma/3;
	i++
}
document.write(promedio);
