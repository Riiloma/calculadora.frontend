$(document).ready(function(){
    $(document).keydown(function(event) {
        if(event.keyCode >= 48 && event.keyCode <= 57) {
            var valor = String.fromCharCode(event.keyCode);
            $('#resultado').val(function(i, val) {
                if(val == '0') {
                    return valor;
                } else {
                    return val + valor;
                }
            });
        }
    });
    
    $(document).ready(function() {
        var num1 = 0;
        var num2 = 0;
        var operacion = "";
        
        $("button[id^='numero']").click(function(){
          var valor = $(this).text();
          $("#resultado").val($("#resultado").val() + valor);
        });
        
        $("button[id='sumar']").click(function(){
          num1 = parseInt($("#resultado").val());
          operacion = "+";
          $("#resultado").val("");
        });
        
        $("button[id='restar']").click(function(){
          num1 = parseInt($("#resultado").val());
          operacion = "-";
          $("#resultado").val("");
        });
        
        $("button[id='multiplicar']").click(function(){
          num1 = parseInt($("#resultado").val());
          operacion = "*";
          $("#resultado").val("");
        });
        
        $("button[id='dividir']").click(function(){
          num1 = parseInt($("#resultado").val());
          operacion = "/";
          $("#resultado").val("");
        });
        
        $("button[id='borrar']").click(function(){
          $("#resultado").val("");
          num1 = 0;
          num2 = 0;
          operacion = "";
        });
        
        $("button[id='igual']").click(function(){
          num2 = parseInt($("#resultado").val());
          var resultado = " ";
          switch(operacion) {
            case "+":
              resultado = num1 + num2;
              break;
            case "-":
              resultado = num1 - num2;
              break;
            case "*":
              resultado = num1 * num2;
              break;
            case "/":
              resultado = num1 / num2;
              break;
          }
          $("#resultado").val(resultado);
          num1 = resultado;
          num2 = 0;
          operacion = "";
        });
      });
      
});