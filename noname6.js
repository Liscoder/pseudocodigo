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
