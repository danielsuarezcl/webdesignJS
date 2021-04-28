function ValidaNombre(){
    var nombre = document.getElementById("nombre").value;
    var mensaje = document.getElementById("msgNombre");

    if(nombre.length < 5){
        mensaje.innerText = "El nombre debe de tener al menos 5 caracteres.";
        mensaje.classList.remove("formTrue");
        mensaje.classList.add("formFalse");
    }else{
        mensaje.innerText = "El nombre es correcto.";
        mensaje.classList.remove("formFalse");
        mensaje.classList.add("formTrue");
    }
}

function ValidaCorreo(){
    var regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    var correo = document.getElementById("correo").value;
    var msgCorreo = document.getElementById("msgCorreo");

    if(!regex.test(correo)){
        msgCorreo.innerText = "Ingresa un correo válido, por favor.";
        msgCorreo.classList.remove("formTrue");
        msgCorreo.classList.add("formFalse");
    }else{
        msgCorreo.innerText = "El correo es correcto.";
        msgCorreo.classList.remove("formFalse");
        msgCorreo.classList.add("formTrue");
    }
}

function ValidaFono(){
    var regex = /^\d{9}$/;
    var fono = document.getElementById("fono").value;
    var msgFono = document.getElementById("msgFono");

    if(!regex.test(fono)){
        msgFono.innerText = "Ingresa un teléfono válido, por favor.";
        msgFono.classList.remove("formTrue");
        msgFono.classList.add("formFalse");
    }else{
        msgFono.innerText = "El teléfono es correcto.";
        msgFono.classList.remove("formFalse");
        msgFono.classList.add("formTrue");
    }
}