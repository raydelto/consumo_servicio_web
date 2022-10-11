function cargarContactos(){
    fetch("http://www.raydelto.org/agenda.php").then(function(respuesta){
        return respuesta.json();
    }).then(function(respuesta){
        var divContacto = document.getElementById("contacto");
        var contacto = respuesta[0];
        divContacto.innerHTML = contacto.nombre + " " + contacto.apellido + " " + contacto.telefono;
    });
}