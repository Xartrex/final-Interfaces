$(document).ready(function(){


  var x = localStorage.getItem('user');
  $('#namee').find('p').html(x);

   // When the user clicks on <div>, close the box
   $('.cruz').on('click', function(){
        if(confirm('¿Seguro que quieres borrar la caja?'))
        this.parentElement.style.display = 'none';
        else;
      });
    
  $('#registrarse').on('click', function(){
    $('.modal_oscuro').fadeIn("slow");
    $('.modal-contenido1').fadeIn("slow");

  });

  $('#iniciar').on('click', function(){
    $('.modal_oscuro').fadeIn("slow");
    $('.modal-contenido2').fadeIn("slow");
  });


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

    localStorage.setItem('name', $('#name').val());

    localStorage.setItem('surname', $('#surname').val());

    localStorage.setItem('email', $('#email').val());

    localStorage.setItem('date', $('#date').val());

    localStorage.setItem('interest', $('#interest').val());

    localStorage.setItem('language', $('#language').val());

    localStorage.setItem('uso', $('#uso').val());

    jump();

  }else{

    alert('Ya existe una cuenta con este correo electrónico');

  }

});

$('#login').on('click', function(){

  if(localStorage.getItem('#email') == $('email').val() && localStorage.getItem('#password') == $('password').val()){

    window.open('index.html', '_self');



  }else{

    alert('El correo o contraseña introducidos son incorrectos');
  }

});

function jump(){
      window.open('index.html', '_self');
    }





});
