$(document).ready(function(){

      $('#botonContinuar').on('click',function(){

            var element = document.getElementById("botonTerminar");
          /*
                AQUI ABRIA QUE PONER QUE SE PUSIERA EL TITULO CORRESPONDIENTE
          */
         /*if(element.style.margin-top == "3%"){
            $('#circuloVerde').css("margin-top", "53%");
            $('#circuloGris').css("margin-top", "53%");
         }*/

          $('#FormularioTitulo').css("visibility", "hidden");
          $('#FormularioCategorias').css("visibility", "visible");
          /*$('#circuloVerde').css("margin-top", "75.5%");
          $('#circuloGris').css("margin-top", "75.5%");
          $('#circuloVerde').css("margin-left", "51.5%");
          $('#circuloGris').css("margin-left", "46.5%");*/

          $('#circuloVerde').css("visibility", "hidden");
          $('#circuloGris').css("visibility", "hidden");
          $('#circuloVerde2').css("visibility", "visible");
          $('#circuloGris2').css("visibility", "visible");
      });

});




