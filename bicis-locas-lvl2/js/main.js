function validateForm(){
	//llamas a la funcion desaparecer aqui para que no los ponga de principio
	
	var spans = document.getElementsByClassName("falla");
	while(spans.length>0 ){
		spans[0].parentElement.removeChild(spans[0]);
	}
	
	/* Escribe tú código aquí */
	var name = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var correo = document.getElementById("input-email").value;
	var contraseña = document.getElementById("input-password").value;
	var opcion = document.getElementById("opciones").selectedIndex;
	
	if(name === "" ){
		var validacionCorreo = document.createElement('span');
		validacionCorreo.setAttribute("class","falla");
		validacionCorreo.appendChild(document.createTextNode("Debe ingresar su nombre")); 
		document.getElementById("name").parentElement.appendChild(validacionCorreo);
	}
	if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(correo))){
		var validacionCorreo = document.createElement('span');
		validacionCorreo.setAttribute("class","falla");
		validacionCorreo.appendChild(document.createTextNode("Verifique su e-mail")); 
		document.getElementById("input-email").parentElement.appendChild(validacionCorreo);
	}
	
	if(contraseña === "password" || contraseña === "123456" || contraseña === "098754"){
		var validacionContraseña = document.createElement('span');
		validacionContraseña.setAttribute("class","falla");
		validacionContraseña.appendChild(document.createTextNode("Contraseña no valida, escriba una diferente")); 
		document.getElementById("input-password").parentElement.appendChild(validacionContraseña);
	}
	
	if(contraseña.length < 6 ){
		var validacionLongitud = document.createElement('span');
		validacionLongitud.setAttribute("class","falla");
		validacionLongitud.appendChild(document.createTextNode("La contraseña debe tener al menos 6 carácteres")); 
		document.getElementById("input-password").parentElement.appendChild(validacionLongitud);
	}	
	
	if(opcion == 0){
		var validacionOpcion = document.createElement('span');
		validacionOpcion.setAttribute("class","falla");
		validacionOpcion.appendChild(document.createTextNode("Debes seleccionar al menos un tipo de bici")); 
		document.getElementById("opciones").parentElement.appendChild(validacionOpcion);
	}

//con esto borra todos los spans

}
