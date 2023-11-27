$(document).ready(function(){
    $("#miFormulario").submit(function(e){
        e.preventDefault();
        var nombre = $("#nombre").val();
        var email = $("#email").val();

        if(nombre === "" || email ===""){
            $("#mensaje").text("Complete los campos.");
        }else{
            $("#mensaje").text("Formulario enviado correctamente.");
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