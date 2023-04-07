 Buenos días estimado, la calculadora funciona de la siguiente forma:
1. Usted presiona un botón numérico/cantidad que guste en la pantalla.
2. Una vez determinada la primera cantidad, seleccione la operación numérica que desea realizar.
3. Luego de haber ingresado tanto la primera cantidad y la operación matemática a realizar, ingrese la segunda cantidad que guste.
4. Por último, dele al botón "=" para que le de el resultado.

En cuanto a la parte lógica de este proyecto, se utilizó jQuery 3.6.4. Si van a la carpeta js y al archivo main.js, encontrarán 2 funciones: una para detectar las teclas numéricas y otra con la lógica de la calculadora.

Si se fijan bien en la segunda función, hay 3 variables: num1, num2 y operacion. Tanto num1 como num2 se inicializan en 0, ya que se ingresarán números más adelante.

Más abajo, tenemos una función que detecta qué botón numérico pulsamos. El "[id^='numero']" en jQuery nos da la opción de recorrer todos los ID que empiecen con "numero". Luego se crea una variable "valor" para el tema de los números, y abajo tenemos la línea de código en la cual se verá el texto.

De igual forma, tenemos otras funciones que nos ayudan a detectar las operaciones matemáticas deseadas, ya sea sumar, restar, multiplicar o dividir. Utilizamos el parseInt para convertirlo en un número entero, y en "operacion" se le designa qué operación tendrá que hacer.

En la función donde se topa la ID, igual, ocupamos un switch para determinar qué operación optó el usuario. Después de detectarla, se hace la lógica.

Por último, para el tema de borrar, básicamente apretamos el botón "borrar" y jQuery lo detecta y limpia el resultado.


Repositorio Genesis: https://github.com/GenesisPaola/calculadora.frontend

Repositorio Livio: https://github.com/Riiloma/calculadora.frontend

Repositorio Felipe: https://github.com/Pipeabf/calculadora.frontend

Repositorio Sergio: https://github.com/xiu55/calculadora.frontend

