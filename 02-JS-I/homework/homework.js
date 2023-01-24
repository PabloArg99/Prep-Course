// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "David Beckam";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 10;

// Crea una variable booleana:
const nuevoBool = false;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 21 % 5;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  return str;
  // "Return" la string provista: str
  // Tu código:
  
}

function suma(x, y) {
  resultado = x+y;
  return resultado;
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  
}

function resta(x, y) {
  resultado = x-y;
  return resultado;
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  
}

function multiplica(x, y) {
  resultado = x*y;
  return resultado;
  
}

function divide(x, y) {
  resultado = x/y;
  return resultado;
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  
}

function sonIguales(x, y) {
  if(x===y){
    return true;
  }
  else{
    return false;
  }
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

function tienenMismaLongitud(str1, str2) {
  var long1,long2;
  long1=str1.length;
  long2=str2.length;
  if(long1===long2){
    return true;
  }
  else{
    return false;
  }
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

function menosQueNoventa(num) {
  if(num<90){
    return true;
  }
  return false;
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

function mayorQueCincuenta(num) {
  if(num>50){
    return true;
  }
  return false;
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

function obtenerResto(x, y) {
  var resto = x%y;
  return resto;
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  
}

function esPar(num) {
  var resto = num%2;
  if(resto===0){
    return true;
  }
  return false;
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

function esImpar(num) {
  var resto = num%2;
  if(resto!=0){
    return true;
  }
  return false;
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

function elevarAlCuadrado(num) {
  var resultado = Math.pow(num,2);
  return resultado;

  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  
}

function elevarAlCubo(num) {
  var resultado = Math.pow(num,3);
  return resultado;
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  
}

function elevar(num, exponent) {
  var resultado = Math.pow(num,exponent);
  return resultado;
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  
}

function redondearNumero(num) {
  var resultado = Math.round(num);
  return resultado;
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  
}

function redondearHaciaArriba(num) {
  var resultado = Math.ceil(num);
  return resultado;
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  
}

function numeroRandom() {
  var resultado= Math.random();
  return resultado;
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  
}

function esPositivo(numero) {
  if (numero>0){
    return 'Es positivo';
    //console.log(numero + " Es Positivo");
  }
  if (numero<0){
    return 'Es negativo';
    //console.log(numero + " Es Negativo");
  }
  if (numero===0){
    return false;
  }
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  
}

function agregarSimboloExclamacion(str) {
  var nuevaString= str + "!";
  return nuevaString;

  
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
}

function combinarNombres(nombre, apellido) {
  var nuevaString= nombre + " " + apellido;
  return nuevaString;
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  
}

function obtenerSaludo(nombre) {
  var nuevaString = "Hola " + nombre + "!";
  return nuevaString;

  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  
}

function obtenerAreaRectangulo(alto, ancho) {
  var areaRectangulo= alto*ancho;
  return areaRectangulo;
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  
}


function retornarPerimetro(lado){
  var perimetro = lado*4;
  return perimetro;
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  
}


function areaDelTriangulo(base, altura){
  var areaTriangulo= (base*altura)/2;
  return areaTriangulo;
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí

}


function deEuroAdolar(euro){
  var resultadoCambio = euro*1.2;
  return resultadoCambio;

  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  
}


function esVocal(letra){
  var esVocal=false;
  var esString=false;
  var cantLetras=letra.length;
 
  if(cantLetras>1){
    esString=true;
  }
  if(letra==='a'||letra==='e'||letra==='i'||letra==='o'||letra==='u'){
    esVocal=true;
    return 'Es vocal';
    //console.log("Es vocal");
  }
  if(esVocal===false||esString){
    return 'Dato incorrecto';
    //console.log("Dato incorrecto");
  }


  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
