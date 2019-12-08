$(document).ready(function(){

$('#drop').on('mouseenter', function(){
  var y = $(this).offset(); /*coger posicion del div*/
  /*mover por up con respecto coordenadas para que cuadre*/
  $('.dropdown-content').css('top', y.top +45);
  $('.dropdown-content').css('left', y.left );
  $('.dropdown-content').css('display', 'block');
  $(this).parent().parent().parent().parent().find("dropdown-content").css("visibility", "visible");
});

$('.dropdown-content').on('mouseleave', function(){
    $('.dropdown-content').css('display', 'none');
    $(this).parent().parent().parent().parent().find("dropdown-content").css("visibility", "hidden");
  });

  $('.link a').on('mouseleave', function(){
    $('.dropdown-content').css('display', 'none');
    $(this).parent().parent().parent().parent().find("dropdown-content").css("visibility", "hidden");
  });

// When the user clicks on <div>, close the box
$('.cruz').on('click', function(){
    if(confirm('¿Seguro que quieres borrar la caja?'))
    this.parentElement.parentElement.style.display = 'none';
    else;
  });

  
  /*colores del background, tematicas*/  
  $('#link1').on('click', function(){
    $('body').css('background-color', 'lightblue');
    $('.list').css('background-color', 'lightgrey');
  });

  /*colores del background, tematicas*/
  $('#link2').on('click', function(){
    $('body').css("background-color", "rgb(91, 243, 103)"); 
    $('.list').css('background-color', 'rgb(206, 155, 216)');
  });

  /*colores del background, tematicas*/
  $('#link3').on('click', function(){
    $('body').css("background-color", "white"); 
    $('.list').css('background-color', 'grey');
  });




  /*cambiar texto en titulos de listas*//*
  $('.list_title').on('dblclick', function(){
  var $outer = $(this);
  var text = $.trim($outer.text()); /*remove white spaces*//*
  $outer.empty();
  $outer.append("<input value='" + text + "'></input>");
  });
*/
  
  

  /*Añadir lista   /////
   me cambia el nombre de la clase evento y por tanto lAs funciones jquery no funcionan en los clones*/
  $('.add_event').on('click', function(){
    if(confirm('¿Seguro que quieres crear una lista?')){
    $(this.parentElement).addClass('event-content');
    $(".event-content").clone(true).prependTo(this.parentElement.parentElement);
    }
    else;
  });


  /*Añadir evento, no consigo clonar la clase evento, solo me deja el simbolo añadir o la lista entera
  $('.add_event').on('click', function(){
    if(confirm('¿Seguro que quieres crear un evento?'))
    $(this.parentElement).addClass('event-content');
    $(".event-content").clone().insertBefore(this);
  });*/


  



}); /*fin script*/