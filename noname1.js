// ************PREGUNTA #1
// var  suma = 0;
// var  i=0;


// 	while(i<10){
		
// 		numero = Number(prompt("Please enter your number " +i));
// 		suma=suma+numero;
// 		i++
// 	}
// document.write(suma);



//**********PREGUNTA #2
// var suma = 0;
// var i=0;
// do{
// 	numero = Number(prompt("Please enter your number "+i));
// 	suma=suma+numero;
// 	i++
// } while(i<10);
// document.write(suma);



// ************PREGUNTA #3
// var suma = 0;

// for(i=1;i<=10;i++){
// 	numero = Number(prompt("Please enter your number "+i));
// 	suma=suma+numero;
// }
// document.write(suma);



//***********PREGUNTA #4.1
// var promedio=0;
// var suma = 0;
// var numero_alumnos=Number(prompt("Ingrese numero de alumnos"));
// var i = 1;
// while(i<numero_alumnos+1){
// 	notas = Number(prompt("Please enter your notes" + i));
// 	suma = suma + notas;
// 	promedio = suma/3;
// 	i++
// }
// document.write(promedio);



//***********PREGUNTA #4.2
// var promedio=0;
// var suma = 0;
// var numero_alumnos=Number(prompt("Ingrese numero de alumnos"));
// var i = 1;
// do{
// 	notas = Number(prompt("Please enter your notes" + i));
// 	suma = suma + notas;
// 	promedio = suma/3;
// 	i++
// }while(i<numero_alumnos+1)

// document.write(promedio);


//***********PREGUNTA #4.3
// var promedio=0;
// var suma = 0;
// var numero_alumnos=Number(prompt("Ingrese numero de alumnos"));
// var i = 1;

// for(i=1;i<=numero_alumnos;i++){
// 	notas = Number(prompt("Please enter your notes" + i));
// 	suma = suma + notas;
// 	promedio = suma/3;
// }
// document.write(promedio);



//***********PREGUNTA #5
// for(i=0; i<100;i++){
	
// 	if(i%2==0){
// 		console.log(i);
// 	} 
// }

//************PREGUNTA #6

for(i=1;i<500;i++){
	for(j=1;j<500;j++){
		for(k=1;k<500;k++){
			if(i*i===j*j+k*k){
				document.write("Los numeros son:"+
					'<br>'+ "hipotenusa es:"+ i +
					'<br>'+ ","+"Cateto_Opuesto:"+j+
					'<br>'+ ","+"Cateto_adyacente:"+k);
			}
		}
	}
}
























