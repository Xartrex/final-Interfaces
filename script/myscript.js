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
  $('#guardarse').on('click', function(){
    
    alert('¡ENHORABUENA, te has registrado correctamente!  Comienza con un breve tutorial ahora.')
    jump1();

  })


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






/*COOKIES*/

$('body').on('click', '#guardar', function(){


  if(localStorage.getItem('email') != $('#email').val()){

    localStorage.setItem('user', $('#user').val());

    localStorage.setItem('password', $('#password').val());

    localStorage.setItem('email', $('#email').val());

    localStorage.setItem('date', $('#date').val());



  }else{

    alert('¡Ups! Ya existe una cuenta con este correo electrónico, prueba con otro');

  }


});

$('#login').on('click', function(){

  if(localStorage.getItem('#email') == $('email').val() && localStorage.getItem('#password') == $('password').val()){

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
