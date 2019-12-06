$(document).ready(function(){

      function fade(element) {
            var op = 1;  // initial opacity
            var timer = setInterval(function () {
                if (op <= 0.1){
                    clearInterval(timer);
                    element.style.visibility = 'hidden';
                }
                element.style.opacity = op;
                element.style.filter = 'alpha(opacity=' + op * 100 + ")";
                op -= op * 0.3;
            }, 50);
      }

      function unfade(element) {
            var op = 0.1;  // initial opacity
            element.style.visibility = 'visible';
            var timer = setInterval(function () {
                if (op >= 1){
                    clearInterval(timer);
                }
                element.style.opacity = op;
                element.style.filter = 'alpha(opacity=' + op * 100 + ")";
                op += op * 0.2;
            }, 10);
      }

      /************* UNFADE MODIFICADOS *************/

      function unfade03(element) {
            var op = 0.1;  // initial opacity
            element.style.visibility = 'visible';
            var timer = setInterval(function () {
                if (op >= 1){
                    clearInterval(timer);
                }
                element.style.opacity = op;
                element.style.filter = 'alpha(opacity=' + op * 100 + ")";
                op += op * 0.3;
            }, 10);
      }

      function unfade02(element) {
            var op = 0.1;  // initial opacity
            element.style.visibility = 'visible';
            var timer = setInterval(function () {
                if (op >= 1){
                    clearInterval(timer);
                }
                element.style.opacity = op;
                element.style.filter = 'alpha(opacity=' + op * 100 + ")";
                op += op * 0.2;
            }, 10);
      }

      function unfade01(element) {
            var op = 0.1;  // initial opacity
            element.style.visibility = 'visible';
            var timer = setInterval(function () {
                if (op >= 1){
                    clearInterval(timer);
                }
                element.style.opacity = op;
                element.style.filter = 'alpha(opacity=' + op * 100 + ")";
                op += op * 0.1;
            }, 10);
      }

      /************* FADE MODIFICADOS *************/

      function fade01(element) {
            var op = 1;  // initial opacity
            var timer = setInterval(function () {
                if (op <= 0.1){
                    clearInterval(timer);
                    element.style.visibility = 'hidden';
                }
                element.style.opacity = op;
                element.style.filter = 'alpha(opacity=' + op * 100 + ")";
                op -= op * 0.1;
            }, 50);
      }

      function fade02(element) {
            var op = 1;  // initial opacity
            var timer = setInterval(function () {
                if (op <= 0.1){
                    clearInterval(timer);
                    element.style.visibility = 'hidden';
                }
                element.style.opacity = op;
                element.style.filter = 'alpha(opacity=' + op * 100 + ")";
                op -= op * 0.2;
            }, 50);
      }

      function fade03(element) {
            var op = 1;  // initial opacity
            var timer = setInterval(function () {
                if (op <= 0.1){
                    clearInterval(timer);
                    element.style.visibility = 'hidden';
                }
                element.style.opacity = op;
                element.style.filter = 'alpha(opacity=' + op * 100 + ")";
                op -= op * 0.3;
            }, 50);
      }


      /************* FUNCIONES ONCLICK *************/


      $('#areaDispositivos').on('click',function(){

            var element = document.getElementById('dispositivos');

            if (element.style.visibility == "hidden"){
                  unfade(element);

            }
            else {
                  fade(element);
            }
           
            
      });


      $('#areaTraduccion').on('click',function(){

            var element1 = document.getElementById('ingless');
            var element2 = document.getElementById('francess');
            var element3 = document.getElementById('alemann');

            if (element1.style.visibility == "hidden" && element2.style.visibility == "hidden" && element3.style.visibility == "hidden" ){
                  unfade03(element1);
                  unfade01(element2);
                  unfade02(element3);

            }
            else {
                  fade01(element1);
                  fade03(element2);
                  fade02(element3);
            }
           
            
      });

      
});




