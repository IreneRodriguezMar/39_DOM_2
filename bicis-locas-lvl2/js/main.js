function validateForm(){
	/* Escribe tú código aquí */
	var name = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var correo = document.getElementById("input-email").value;
	var contraseña = document.getElementById("input-password").value;
	var spanNombre = document.getElementById("mySpan").style.display;
	var spanContraseña = document.getElementById("passw").style.display;
	
	if(name === "" || apellido === "" || correo === ""){
		return document.getElementById("mySpan").style.display = "inline";
	}
	else if(contraseña.length < 6){
		return document.getElementById("passw").style.display = "inline";
	}
	else if(contraseña === "password" || "123456" || "098754"){
		alert("Contraseña no válida, escriba una diferente")
	}
}