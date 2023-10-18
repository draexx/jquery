$(document).ready(function(){
    $("#agregar").click(function(){
        $("#miLista").append("<li>Nuevo Elemento</li>");
    });
    $("#eliminar").click(function(){
        $("#miLista li:last-child").remove();
    });
});