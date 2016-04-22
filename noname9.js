//*****************PREGUNTA #9
	var suma=0;
	var puntaje=21;
for(i=1;i<=40;i++){
	nota = Number(prompt("Ingresa la nota"+i+":"));
	suma= suma+nota;
	if (puntaje>nota){
		puntaje=nota;
	}
}
var promedio=suma/40;
document.write('<br>'+ "El promedio de las notas es:"+promedio);
document.write('<br>'+"La menor nota es:"+puntaje);

