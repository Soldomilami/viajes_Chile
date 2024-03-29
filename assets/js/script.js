$ (function() {
    $("#nombreFormulario").tooltip();
});

$ (function() {
    $("#asuntoFormulario").tooltip();
});

$('#enviarMensaje').click(function(){
    alert('Mensaje enviado correctamente');
});

function enviar() {
var capturaNombre = document.getElementById('nombreFormulario').value;
var capturaAsunto = document.getElementById('asuntoFormulario').value;
var capturaMensaje = document.getElementById('mensajeFormulario').value;
console.log(capturaNombre, capturaMensaje, capturaAsunto);
}