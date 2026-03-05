// Ejercicio 1
// Escriba un programa que pida un año y que escriba si es bisiesto o no. Se recuerda que los años bisiestos son múltiplos de 4, pero los múltiplos de 100 no lo son, aunque los múltiplos de 400 sí.
// 1992 B
// 100 - NO
// 400 - SI
// 2 - NO
// 55 o 3 - NO
// 4 - SI

// Si es multiplo de 400 es multiplo de 100??? SI

// 1992 --> true && (true || false ) --> true && true --> true --> BISIESTO
// 100 --> true && (false || false ) --> true && false--> false --> NO
// 4 --> true && (true || false ) --> true && true--> true  --> BISIESTO
// 55 --> false && (true || false ) --> false && false--> false  --> NO
// 400 --> true && (false || true ) --> true && true--> true --> BISIESTO

function calculaBisiesto(year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return "bisiesto: " + year;
  } else {
    return "no es bisiesto: " + year;
  }
}

console.log(calculaBisiesto(4));
console.log(calculaBisiesto(100));
console.log(calculaBisiesto(400));
console.log(calculaBisiesto(2));
console.log(calculaBisiesto(55));
console.log(calculaBisiesto(1992));

// Sólo ejecuta en el Browser
if (typeof prompt === "function") {
  const text_year = prompt("Introduce el año").trim(); // recorta espacios
  const anio = Number(text_year); // queso -> NaN, 24 -> number

  if (anio) {
    // comprueba que la variable existe, es numéro y no está vaciá
    console.log(calculaBisiesto(anio));
  } else {
    alert("Año no válido");
  }
}

function bisiesto(n) {
  if (n % 4 == 0 && n % 100 !== 0) {
    return "Es bisiesto";
  } else if (n % 400 == 0) {
    return "Es bisiesto";
  } else {
    return "No es bisiesto";
  }
}

console.log(bisiesto(1994));

// Ejercicio 2
// Contar todas las "o" almacenadas en un array de palabras. En cada posición del array hay una palabra almacenada. Tip: piensa en doble bucle
// Ejemplo de datos y llamada a la función
// let data = ["yoda", "best", "has", "tortilla", "cAfe", "barrita tomate", "zumo"];
// contarCaracteres(data,"a");

let data = [
  "yoda",
  "best",
  "has",
  "tortilla",
  "cAfe",
  "barrita tomate",
  "zumo",
];

function contarCaracteres(data, letra) {
  let counter = 0; // Contador
  for (let i = 0; i < data.length; i++) {
    // recorre array
    const word = data[i].toLowerCase();

    for (let j = 0; j < word.length; j++) {
      // recorre palabra
      if (word[j] == letra.toLowerCase()) {
        counter++;
      }
    }
  }
  return counter;
}

console.log(contarCaracteres(data, "A"));

// Ejercicio 1
// Crea una función que pida un número por parámetro y guarde su tabla de multiplicar en un array. El array será el valor devuelto por la función
// Ejemplo --> Tabla del 3 --> [3,6,9,12,15,18,21,24,27,30]

// const tablaMultiplicar = () => {}

// Función: tablaMultiplicar()
// parámetro: num
// return: array de la tabla de multiplicar
// [3*1,3*2,3*3,.....3*10] ---> i va de 1....10
// [num*1,num*2,num*3,.....num*10]
function tablaMultiplicar(num) {
  let resultado = [];
  for (let i = 1; i <= 10; i++) {
    resultado.push(num * i);
    //console.log(resultado);
    
  }
  //console.log(resultado);
  return resultado;
}

const tabla = tablaMultiplicar(3); // almacena el resultado 
console.log(`El resultado de la tabla es: ${tabla}`);


// Ejercicio 2
// Crea una función que pida números por teclado (prompt) y mételos en un array. Cuando el usuario meta un 0, dejaremos de insertar (habrá que usar un bucle que pregunte constantemente). Por último, ordena los números ordenados de menor a mayor y devuelve el array. Prompt() devuelve un string. hay que convertirlo a entero con parseInt() https://www.tutorialspoint.com/how-to-convert-a-string-into-integer-in-javascript

// Tareas
// Pedir números por teclado
// Lógica para parar de insertar números OK
// Ordenar números en un array OK

// array ejemplo:
// antes
// let datos = []; // inicialmente, array vacío

// // Llega 3
// datos = [3];

// // Llega 5
// datos = [3,5];

// // Llega -2
// datos = [-2, 3, 5];

// // Llega 1
// datos = [-2, 1, 3, 5];


// Llega 4
// Cuando llega el 4, debo recorrer el array
// compara en cada posición si el número (num) es menor
// Sólo podemos usar push() para añadir en la última posición

/*
let datos = [-2, 1, 3, 5];
let num = 100;
// part1 = datos.slice(0,3) --> [-2, 1, 3]  
// part2 = datos.slice(3,4) --> [5]
// part1.push(4) --> [-2, 1, 3, 4]   --> Sirve SOLO para 4
// part1.concat(part2) --> [-2, 1, 3, 4, 5]  

for (let i = 0; i < datos.length; i++) {
  if (datos[i] > num) { // num es menor que el actual 
    part1 = datos.slice(0,i);
    part2 = datos.slice(i);
    part1.push(num);
    console.log(part1.concat(part2));
    break;
  }
  // else{ // numero mayor que los que hay en el array
  //   datos.push(num);
  // }
  else{
    datos.push(num); // [-2, 1, 3, 4, 5] --> [-2, 1, 3, 4, 5, 100, 100, 100 ,1000] --> bucle infinito si no ponemos "break"
    console.log(datos);
    //break
    
  }
}

*/



num = propmt("Introduce número");
let datos = [];

for (let i = 0; i < datos.length; i++) {
  if (datos[i] > num) {
    part1 = datos.slice(0,i);
    part2 = datos.slice(i);
    part1.push(num);
    console.log(part1.concat(part2));
    break;
  }
  else{
    datos.push(num);
    break; 
  }
}
