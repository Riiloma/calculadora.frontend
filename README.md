# calculadora.frontend
1-buenos dias estimado, la calculadora funciona de la siguente forma
2-usted preciona un boton numerico / cantidad que guste en la pantalla
3-una ves determinada la primera cantidad, seleccione la operacion numerica que desea realizar
3-luego de haber ingresado tanto como la primera cantidad y la operacion matematica a realizar ingrese la 2 cantidad que guste
4 por ultimo, dele al boton de "=" para que le de el resusltado
________________________________________________________________
parte logica
en estes proyecto se utilizo jquery 3.6.4
si se van a la carpeta js y al archivo main.js encontraran 2 funcniones, una funcion para detectar el las teclas numericas
y otro con la logica de la calcuraladora

si se fijan bien en la segunda funcion hay 3 valiables, num1, num2, operacion, tanto como num 1 y num2 si inicalizan en 0 ya que se ingresaran numeros mas adenlante

mas abajo tenemos una funcion que tedecta que boton numerico pulsamos, el "[id^='numero']"en jquery nos da la opcion de que de recorrer todo los id que empiesen con numero, luego se crea una variable valor para el tema de los numeros, y abajo tenemos la linea de codigo en el cual se vera el texto

de igual forma tenemos otras funciones que nos ayudan tanto a detectar las operaciones matematicas deseadas ya sea tanto como sumar, restar, multiplicar, divicion, utilizamos el parseInt para comvertirlo en un numero entero y abajo en operacion se le designa que operacion tendra que hacer

luego esta la funcion para borrar y otra funcion que nos dara el resultado

y para el tema de borrar basicamente apretamos el boton borrar jquery lo detecta y limpia el resultado

en la funcion donde topa la id igual, ocupamos un switch para determinar que operacion opto el usuario, despues de detectar se hace la logica