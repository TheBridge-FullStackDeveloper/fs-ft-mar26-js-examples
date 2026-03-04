// Objeto o JSON

const data = {
    nombre: "Pepe",
    apellidos:"Perez",
    "mis hobbies":"Cine, Literatura",
    "comida-favorita":"Tortilla"
}

console.log(data["nombre"]);
console.log(data.nombre);

//console.log(data.mis hobbies);
//console.log(data.mis);
console.log(data["mis hobbies"]);
console.log(data["comida-favorita"]);

data.apellidos = "Martinez";
data["nombre"] = "Luis";

console.log(data);

// Métodos nativos útiles
// Object.keys()
console.log(Object.keys(data));

// Object.values()
console.log(Object.values(data));

// Object.entries()
console.log(Object.entries(data));

// Usamos Object.entries() para obtener [clave, valor]
for (const [clave, valor] of Object.entries(data)) {
    console.log(`${clave}: ${valor}`);
  }

const obj1 = "hola";
const obj2 = "hola";

console.log(obj1 == obj2); // true
console.log(obj1 === obj2); // ??

const data1 = {message:"hola"}; 
const data2 = {message:"hola"};

console.log(data1 == data2); // false
console.log(data1 === data2); // false

let num1 = 2;
let num2 = num1;
num2++;

console.log(num1); // 2
console.log(num2); // 3

// Objetos conectados
let data3 = {message:"hola"}; 
let data4 = data3; // Creas un "alias" para acceder a data3. "conectas ambas variables"

console.log(data3 == data4); // true --> data4 guarda una copia de data3

data4.message = "coffee";

console.log(data3);
console.log(data4);


console.log("*****");
console.log(data3.message === data4.message); // true!!!!

// Crear objetos independientes
let data5 = {message:"hola"}; 
let data6 = {message:data5.message}; // Creas un "alias" para acceder a data3

data6.message = "coffee";

console.log(data5);
console.log(data6);

// Crear objetos independientes
let data7 = {message:"hola"}; 
let data8 = {...data7}; // Crear copia NUEVA independiente del objeto

data8.message = "coffee";

console.log(data7);
console.log(data8);







