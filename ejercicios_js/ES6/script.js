// Usando MAP
let arr = [1, 2, 3, 4, 5, 6, 7];
let arrTimes2 = arr.map((n) => n * 2);
console.log(arrTimes2);

// MAP -> for + hacer push() a array nuevo con elemento transformado
let productos = ["patatas", "pescado", "naranjas", "manzana"];
let resultado = productos.map((producto) => producto + " modificado!");
console.log(resultado);

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
