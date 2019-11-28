$(document).ready(function(){

      $('#botonContinuar').on('click',function(){

          var cTitulo = document.forms["form1"]["titulo"].value;
          /*
                AQUI ABRIA QUE PONER QUE SE PUSIERA EL TITULO CORRESPONDIENTE
          */
          $('#FormularioTitulo').css("visibility", "hidden");
          $('#FormularioCategorias').css("visibility", "visible");
      });

});




