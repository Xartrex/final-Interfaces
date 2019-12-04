$(document).ready(function(){

      $('#botonContinuar').on('click',function(){

          var cTitulo = document.forms["form1"]["titulo"].value;
          /*
                AQUI ABRIA QUE PONER QUE SE PUSIERA EL TITULO CORRESPONDIENTE
          */
          $('#FormularioTitulo').css("visibility", "hidden");
          $('#FormularioCategorias').css("visibility", "visible");
          $('#circuloVerde').css("margin-top", "75.5%");
          $('#circuloGris').css("margin-top", "75.5%");
          $('#circuloVerde').css("margin-left", "51.5%");
          $('#circuloGris').css("margin-left", "46.5%");
      });

});




