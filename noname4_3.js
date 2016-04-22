//***********PREGUNTA #4.3
var promedio=0;
var suma = 0;
var numero_alumnos=Number(prompt("Ingrese numero de alumnos"));
var i = 1;

for(i=1;i<=numero_alumnos;i++){
	notas = Number(prompt("Please enter your notes" + i));
	suma = suma + notas;
	promedio = suma/3;
}
document.write(promedio);


