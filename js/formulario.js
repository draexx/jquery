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
});