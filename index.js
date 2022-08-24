const inputTexto=document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")
const Imagen = document.querySelector(".imagen1")
const copiar =  document.querySelector(".copiar")


function btnEncriptar(){
	const textoEncriptado = encriptar1(inputTexto.value)
	if (textoEncriptado==""){
		mensaje.value = textoEncriptado;
		document.getElementById('id_mensaje').style.backgroundImage="url(Logos/Imagen.png)"
		copiar.style.top="-80%"




	}
	if (textoEncriptado!=""){
		mensaje.value = (textoEncriptado);
		mensaje.style.backgroundImage = "none"
		inputTexto.value=""	
		copiar.style.top= "75%"
		
		
		

	}

	return(mensaje.value)

	
}

function encriptar1(strinEncriptada){

	var palabra=strinEncriptada

	//alert(input.value)
	

	var encriptar=[]
	var contador=0

	while(contador<=(palabra.length-1)){
		var x =true

		if (palabra[contador]=="e"){
			encriptar=encriptar+"enter"
			x=false


		}
		if (palabra[contador]=="i"){
			encriptar=encriptar+"imes"
			x=false


		}
		if (palabra[contador]=="a"){
			encriptar=encriptar+"ai"
			x=false


		}

		if (palabra[contador]=="o"){
			encriptar=encriptar+"ober"
			x=false


		}

		if (palabra[contador]=="u"){
			encriptar=encriptar+"ufat"
			x=false


		}


		if(x==true){
			encriptar=encriptar+palabra[contador]
						
		}

		contador=contador+1

		

	}


	//La letra "e" es convertida para "enter"
	//La letra "i" es convertida para "imes"
	//La letra "a" es convertida para "ai"
	//La letra "o" es convertida para "ober"
	//La letra "u" es convertida para "ufat"

	//alert("ys")
	
	return encriptar
	


}


function btnDesencriptar(){
	const textoDesencriptado = desencriptar1(inputTexto.value)
	if (textoDesencriptado==""){
		mensaje.value = textoDesencriptado;
		document.getElementById('id_mensaje').style.backgroundImage="url(Logos/Imagen.png)"
		copiar.style.top="-80%"




	}
	if (textoDesencriptado!=""){
		mensaje.value = (textoDesencriptado);
		mensaje.style.backgroundImage = "none"
		inputTexto.value=""	
		copiar.style.top= "75.4%"
		
		
		

	}

	return(mensaje.value)

	
}


function desencriptar1(strinDesencriptada){

	var palabra=strinDesencriptada
	var desencriptar=[]
	var contador=0
	var contador2=0
	var contador3=0
	var e=["enter","imes","ai","ober","ufat"]
	var letras=["e","i","a","o","u"]

	while(contador<=(palabra.length-1)){

		contador2=0

		while(contador2<=(e.length-1)){
		var x =true
		contador3=0
		var y = 0

			while(contador3<=(e[contador2].length-1)){
				
				if (palabra[contador]==e[contador2][contador3]){
					contador3=contador3+1;
					contador=contador+1;
					x =true;
					console.log("a")
				}
				else{
					//contador=contador-contador3+1;
					x=false;
					contador3=e[contador2].length
					console.log("u")
					console.log("contador3: "+contador3)
				}}


			console.log("L")
			if (x==true){
				y = contador2
				console.log("y: "+y)
				contador2=e.length
			}
			else{
				contador2=contador2+1

			}

			console.log("contador2: "+contador2)

		}

		if (x==true){
			desencriptar=desencriptar+letras[y]

		}
		if (x==false){
			desencriptar=desencriptar+palabra[contador]
			contador=contador+1
		}

		


		console.log("contador: "+contador)
		console.log("LL")
			

	}


	//La letra "e" es convertida para "enter"
	//La letra "i" es convertida para "imes"
	//La letra "a" es convertida para "ai"
	//La letra "o" es convertida para "ober"
	//La letra "u" es convertida para "ufat"
	return desencriptar
	
}




function btncopiar(id_mensaje) {
				var copiar=""
				let texto = document.getElementById('id_mensaje')
				texto.select();
				document.execCommand("copy");

				

			
				



				
				
}