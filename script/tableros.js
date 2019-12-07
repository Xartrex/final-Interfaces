$(document).ready(function(){

$('#drop').on('mouseenter', function(){
  var y = $(this).offset(); /*coger posicion del div*/
  /*mover por up con respecto coordenadas para que cuadre*/
  $('.dropdown-content').css('top', y.top +39.5);
  $('.dropdown-content').css('left', y.left );
  $('.dropdown-content').css('display', 'block');
  $(this).parent().parent().parent().parent().find("dropdown-content").css("visibility", "visible");
});

$('.dropdown-content').on('mouseleave', function(){
    $('.dropdown-content').css('display', 'none');
    $(this).parent().parent().parent().parent().find("dropdown-content").css("visibility", "hidden");
  });

// When the user clicks on <div>, close the box
$('.cruz').on('click', function(){
    if(confirm('¿Seguro que quieres borrar la caja?'))
    this.parentElement.parentElement.style.display = 'none';
    else;
  });

  /*Añadir lista   ///// me cambia el nombre de la clase evento y por tanto lAs funciones jquery no funcionan en los clones
  $('.add_event').on('click', function(){
    if(confirm('¿Seguro que quieres crear un evento?'))
    $(this.parentElement).addClass('event-content');
    $(".event-content").clone().prependTo(this.parentElement.parentElement);
  });*/


  /*Añadir evento, no consigo clonar la clase evento, solo me deja el simbolo añadir o la lista entera
  $('.add_event').on('click', function(){
    if(confirm('¿Seguro que quieres crear un evento?'))
    $(this.parentElement.find('event-content')).addClass('event-content');
    $(".event-content").clone().insertBefore(this);
  });*/


  



}); /*fin script*/