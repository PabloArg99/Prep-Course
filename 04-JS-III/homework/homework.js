// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length -1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var resultado=[];
  var elementoIncrementado;
  for (let index = 0; index < array.length; index++) {
    var element = array[index];
    elementoIncrementado=element+=1;
    resultado.push(elementoIncrementado);
    
  }
  return resultado;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;

}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
  
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var frase='';
  for (let index = 0; index < palabras.length; index++) {
    var element = palabras[index];
    
    if(index===(palabras.length-1)){
      frase = frase + element;
    }
    else{
      frase = frase + element + " ";
    }
    
  }
  return frase;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:   
  var loContiene = false;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(elemento === element){
      loContiene = true;
    }

    
  }
  return loContiene;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var resultado=0;
  for (let index = 0; index < numeros.length; index++) {
    const element = numeros[index];
    resultado+=element;
    
  }
  return resultado;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var promedio=0;
  for (let index = 0; index < resultadosTest.length; index++) {
    var element = resultadosTest[index];
    promedio+=element;
    
  }
  promedio=promedio/resultadosTest.length;
  return promedio;

}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var mayor=Number.MIN_VALUE;
  for (let index = 0; index < numeros.length; index++) {
    var element = numeros[index];
    if(element>mayor){
      mayor=element;
    }
  }
  return mayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments.length < 1) return 0;
  var total = 1;
  for(var i = 0; i < arguments.length; i++) {
    total = total * arguments[i];
  }
  return total;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var mayores=0;
  for (let index = 0; index < arreglo.length; index++) {
    const element = arreglo[index];
    if (element>18){
      mayores++;

    }
    
  }
  return mayores;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí
  const diaLaboral= "Es dia Laboral";
  const diaNoLaboral= "Es fin de semana";
  switch (numeroDeDia) {
    case 0:
      
      return diaNoLaboral;
    case 1:
      
    return diaNoLaboral;
    case 2:
      
      return diaLaboral;
    case 3:
      
    return diaLaboral;
    case 4:
      
    return diaLaboral;
    case 5:
      
    return diaLaboral;
    case 6:
      
    return diaLaboral;
      
  
    default:
      return diaNoLaboral;
  }   
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var aString=""+n;
  const primerEntero=aString.charAt(0);
  if(primerEntero==='9'){
    return true;
  }
  return false;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var contadorIgualdades=0;
  var objetoComparado=arreglo[0];
  for (let index = 0; index < arreglo.length; index++) {
    var element = arreglo[index];
    if(element===objetoComparado){
      contadorIgualdades++;
    }
    
  }
  if(contadorIgualdades===arreglo.length){
    return true;
  }
  return false;
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  const mes1="Enero";
  const mes2="Marzo";
  const mes3="Noviembre";
  var mesesPedidos = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element===mes1 || element===mes2 || element===mes3){
      mesesPedidos.push(element);
    }
    
  }
  if(mesesPedidos.length===3){
    return mesesPedidos;
  }
  return "No se encontraron los meses pedidos";
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var mayoresA100=[];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element>100){
      mayoresA100.push(element);
    }
    
  }
  return mayoresA100;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var arrayNumeros = [];
  for (let index = 0; index < 10; index++) {
    if(numero===index){
      
      break;
      
    }
    numero+=2;
    arrayNumeros.push(numero);
    if(index===9){
      return arrayNumeros;
    }
    
  }
  return "Se interrumpió la ejecución";
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var arrayNumeros = [];
  for (let index = 0; index < 10; index++) {
    if(index===5){
      continue;
    }
  numero+=2;
  arrayNumeros.push(numero);
  
  }
  return arrayNumeros;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
