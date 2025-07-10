$(document).ready(function(){
    $("#miFormulario").submit(function(e){
        e.preventDefault();
        var nombre = $("#nombre").val();
        var email = $("#email").val();
        var mensajeError = "";

        if(nombre === ""){
            mensajeError += "El campo Nombre es obligatorio. ";
        }
        if(email === ""){
            mensajeError += "El campo Correo electrónico es obligatorio.";
        }

        if(mensajeError !== ""){
            $("#mensaje").text(mensajeError.trim()).css("color", "red");
        }else{
            $("#mensaje").text("Formulario enviado correctamente.").css("color", "green");
        }
    });

    var indice =0;
    var images = $(".imagen");

    function mostrarImagen(){
        images.hide();
        images.eq(indice).show();
    }

    mostrarImagen();

    $("#anterior").click(function(){
        indice = (indice - 1 + images.length) % images.length;
        mostrarImagen();
    });

    $("#siguiente").click(function(){
        indice = (indice + 1) % images.length;
        mostrarImagen();
    });
});