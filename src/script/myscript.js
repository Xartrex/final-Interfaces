$(document).ready(function(){


  var x = localStorage.getItem('user');
  $('#nombreUser').find('p').html(x);

   // When the user clicks on <div>, close the box
   $('.cruz').on('click', function(){
        if(confirm('¿Seguro que quieres borrar la caja?'))
        this.parentElement.style.display = 'none';
        else;
      });

  $('#registrarse').on('click', function(){
    $('.modal_oscuro').css("visibility", "visible");
    $('.modal_oscuro').fadeIn("slow");
    $('.modal-contenido1').fadeIn("slow");

  });

  $('#iniciarSesion').on('click', function(){
    $('.modal_oscuro').css("visibility", "visible");
    $('.modal_oscuro').fadeIn("slow");
    $('.modal-contenido2').fadeIn("slow");
  });

  $('#Prueba').on('click',function(){
    jump1();
  })


  $('.close').on('click', function(){
    $('.modal_oscuro').fadeOut("slow");
    $('.modal-contenido1').fadeOut("slow");
    $('.modal-contenido2').fadeOut("slow");
    $('.pops2').css('visibility', 'hidden');
    $('.dropdown-comment').css('display', 'none');

  });

  $('.ajustes').on('click', function(){
    $(this).children(".dropdown-comment").css('display', 'block');
  });

  $('.cl').on('click', function(){
   /* $('.dropdown-comment').css('visibility', 'hidden');*/
    $('.dropdown-comment').fadeOut("slow");
  });

  $('#arch').on('click', function(){
    if(confirm('¿Seguro que quieres borrar la caja?'))
          this.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
          else;
  });


  $('.añadir').on('click', function(){
    $('.modal_oscuro').fadeIn("slow");
  });

  $('#imagenCerrarPOPUP').on('click', function(){
    $('#fondoDifuminadoTematica1').css('visibility', 'hidden');
  });

  $('#clickPOPUP1').on('click', function(){
    $('#fondoDifuminadoTematica1').css('visibility', 'visible');
  });

  $('#clickPOPUP2').on('click', function(){
    $('#fondoDifuminadoTematica1').css('visibility', 'visible');
  });

  $('#clickPOPUP3').on('click', function(){
    $('#fondoDifuminadoTematica1').css('visibility', 'visible');
  });

  $('#clickPOPUP4').on('click', function(){
    $('#fondoDifuminadoTematica1').css('visibility', 'visible');
  });

  $('#clickPOPUP5').on('click', function(){
    $('#fondoDifuminadoTematica1').css('visibility', 'visible');
  });

  $('#clickPOPUP6').on('click', function(){
    $('#fondoDifuminadoTematica1').css('visibility', 'visible');
  });

  $('#clickPOPUP7').on('click', function(){
    $('#fondoDifuminadoTematica1').css('visibility', 'visible');
  });

  $('#clickPOPUP8').on('click', function(){
    $('#fondoDifuminadoTematica1').css('visibility', 'visible');
  });

  $('#clickPOPUP9').on('click', function(){
    $('#fondoDifuminadoTematica1').css('visibility', 'visible');
  });

  $('#clickPOPUP10').on('click', function(){
    $('#fondoDifuminadoTematica1').css('visibility', 'visible');
  });

  $('#clickPOPUP11').on('click', function(){
    $('#fondoDifuminadoTematica1').css('visibility', 'visible');
  });

  $('#clickPOPUP12').on('click', function(){
    $('#fondoDifuminadoTematica1').css('visibility', 'visible');
  });

  $('#clickPOPUP13').on('click', function(){
    $('#fondoDifuminadoTematica1').css('visibility', 'visible');
  });

  $('#clickPOPUP14').on('click', function(){
    $('#fondoDifuminadoTematica1').css('visibility', 'visible');
  });

/*COOKIES*/

$('body').on('click', '#guardarse', function(){


  if(localStorage.getItem('email') != $('#email').val()){

    localStorage.setItem('user', $('#user').val());

    localStorage.setItem('password', $('#password').val());

    localStorage.setItem('email', $('#email').val());

    localStorage.setItem('date', $('#date').val());

    alert('¡ENHORABUENA, te has registrado correctamente!  Comienza con un breve tutorial ahora.')
    jump1();

  }else{

    alert('¡Ups! Ya existe una cuenta con este correo electrónico, prueba con otro');

  }


});

$('#login').on('click', function(){

  if(localStorage.getItem('email') == $('#correoInicioSesion').val() && localStorage.getItem('password') == $('#contraseñaInicioSesion').val()){

    window.open('Tematicas1.html', '_self');



  }else{

    alert('El correo o contraseña introducidos son incorrectos');
  }

});

function jump(){
      window.open('Tematicas1.html', '_self');
    }
function jump1(){
      window.open('Registro.html', '_self');
}






});
