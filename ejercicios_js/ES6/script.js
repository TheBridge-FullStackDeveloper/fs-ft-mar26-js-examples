// Usando MAP
let arr = [1, 2, 3, 4, 5, 6, 7];
let arrTimes2 = arr.map((n) => n * 2);
console.log(arrTimes2);

// MAP -> for + hacer push() a array nuevo con elemento transformado
let productos = ["patatas", "pescado", "naranjas", "manzana"];
let resultado = productos.map((producto) => producto + " modificado!");
console.log(resultado);

// MAP utilizando el índice con objetos
let items = [
  { valor: 10 },
  { valor: 20 },
  { valor: 30 },
  { valor: 40 },
  { valor: 50 }
];

// Añadir ID a cada objeto utilizando el índice del array
// ID-0001, ID-0002, ID-0003, ID-0004, ID-0005

let resultadoConIndice = items.map((objeto, indice) => {
  let id = `ID-${String(indice + 1).padStart(4, '0')}`;
  return { id: id, valor: objeto.valor };
});

console.log(resultadoConIndice);

// FILTER
let words = ["Hola", "bienvenidos", "queridos", "FullStack", "Developers"];
// [false, true, true, true, true]
let longWords = words.filter((word) => word.length > 6);
console.log(longWords);

function validar(elemento) {
  return typeof elemento == "number";
}
let filtrados = [false, 22, 4, 2, null, "Bye"].filter(validar);
console.log(filtrados); // [ ???? ]

// FIND
const array = [5, 12, 8, 130, 44];
const found = array.find((element) => element > 10);
console.log(found);

// REDUCE --> Acumulador
let lista = [2, -1, 1, 3, 5, 8, 4]; // Temperatura 1 semana en Madrid
// acumulador += actual
// acumulador = acumulador + actual
const initial = 1000; // Necesario con array y objects
let total = lista.reduce((acumulador, actual) => acumulador + actual, initial);

// Calcula el Promedio de temperatura semanal
console.log(total / lista.length); // 22



// REDUCE --> Acumulador
let lista2 = [2, -1, 1, 3, 5, 8, 4]; // Temperatura 1 semana en Madrid
// acumulador += actual
// acumulador = acumulador + actual
const initial2 = 1000; // Necesario con array y objects
let total2 = lista2.reduce((acumulador, actual, i) => {
  console.log(`index:${i}`);
  console.log(`acumulador:${acumulador} actual:${actual}`);
  console.log("************************************");
  return acumulador + actual;  // acumulador = acumulador + actual
}, initial2);

// Calcula el Promedio de temperatura semanal
console.log(total2 / lista2.length); // 22


let lista3 = [2, -1, 1, 3, 5, 8, 4]; // Temperatura 1 semana en Madrid
//  [2**0,-1**1,1**2,3**3, 5**4, 8**5, 4**6 ]
// acumulador += actual
// acumulador = acumulador + actual
const initial3 = 1000; // Necesario con array y objects
let total3 = lista3.reduce((acumulador, actual, i) => {
  console.log(`index:${i}`);
  console.log(`acumulador:${acumulador} actual:${actual} elevado:${actual**i}`);
  console.log("************************************");
  return acumulador + actual**i;  // acumulador = acumulador + actual
}, initial2);

// Calcula el Promedio de temperatura semanal

console.log(total3 ); // 22

// Ejemplo de reduece con objetos
let orders = [
  { id: 1, amount: 50 },
  { id: 2, amount: 100 },
  { id: 3, amount: 150 },
];

// Usando initial value para evitar estado inicial inconsistente
const initialValue = { totalAmount: 0, orderCount: 0 }; 

let summary = orders.reduce((acc, order, i) => {
  console.log(`index:${i}`);
  console.log(`acumulador:${acc} actual:${order.amount} totalAmount:${acc.totalAmount} orderCount:${acc.orderCount}`);
  console.log("************************************");


  acc.totalAmount += order.amount;
  acc.orderCount += 1;
  return acc;
}, initialValue);

console.log(summary); // { totalAmount: 300, orderCount: 3 }



/* 

// MAP, FILTER, REDUCE (subóptima)
let users = [
  { user: "👩🏻‍💻" },
  { user: "👨🏾‍💻" },
  { user: "💃" },
  { user: "👨🏻‍🎓" },
  { user: "🧑🏻‍🏫" },
  { user: "🦸‍♂️" },
  { user: "🧟‍♂️" },
];

// MAP -> Transformar
let resultDetails = users.map((user) => {
  let mark = Math.random() * 100;
  user.mark = mark; // Añade key "mark"
  return user;
}); // resultDetails.length = 7

console.log(resultDetails);

let selectedCandidate = resultDetails.filter(user => user.mark > 50);

console.log(selectedCandidate);



let usuarios = [
    { user: "👩🏻‍💻" },
    { user: "👨🏾‍💻" },
    { user: "💃" },
    { user: "👨🏻‍🎓" },
    { user: "🧑🏻‍🏫" },
    { user: "🦸‍♂️" },
    { user: "🧟‍♂️" },
  ];
  
  let aprobados = usuarios
                    .map(user => {
                      let mark = Math.random() * 100;
                      user.mark = mark;
                      return user;
                    })//[]
                    .filter(user => user.mark > 50) //[]
                    .reduce((acc,elem) => acc+elem.mark,0) // Num
                    .toFixed(2);
  
  console.log((aprobados/usuarios.length).toFixed(2)); // promedio notas




const func1 = x => x * x;                  
// sintaxis de cuerpo conciso, el "return" está implícito

const func2 = (x, y) => { 
  console.log(`Suma: ${x+y}`);
  return x + y; 
}; 

const result = func2(3,4);
console.log("El resultado es: "+result);


// con cuerpo de bloque, se necesita "return" explícito

console.log("El resultado es: "+func1(2,2));



let productos2 = ["patatas", "pescado", "naranjas", "manzana"];

// let resultado2 = productos.map(function (producto){return producto + " modificado!"});
// console.log(resultado);


function editarTexto(producto){
  return producto + " modificado!"
}

let resultado2 = productos.map(editarTexto);
console.log(resultado2);


// Función de callback
function saludar(nombre) {
  console.log("Hola " + nombre);
}

function procesarEntradaUsuario(callback) { 
  const nombre = "Ana";
  callback(nombre); // ejecuta función saludar("ana")
}

// Ejecutar función
procesarEntradaUsuario(saludar);
 */


