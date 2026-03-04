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

let data = ["yoda", "best", "has", "tortilla", "cAfe", "barrita tomate", "zumo"];

function contarCaracteres(data, letra) {

    let counter = 0; // Contador
  for (let i = 0; i < data.length; i++) { // recorre array
    const word = data[i].toLowerCase();

    for (let j = 0; j < word.length; j++) { // recorre palabra
        if (word[j] == letra.toLowerCase()) {
            counter++;
        }  
    }
  }
  return counter;
}

console.log(contarCaracteres(data, "A"));

