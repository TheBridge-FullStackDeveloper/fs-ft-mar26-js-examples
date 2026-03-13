function imprime([name, val]) {
  console.log(`${name}, buenos ${val}`);
}

const array_datos1 = ["hola", "dias"];
imprime(array_datos1);

function imprime2(data) {
  console.log(`${data[0]}, buenos ${data[1]}`);
}

const array_datos2 = ["hola", "dias"];
imprime2(array_datos2);

// Objeto usuario: id, email, password, name, address, phone

const user = {
  id: 1,
  email: "user@example.com",
  password: "securepassword",
  name: "John Doe",
  address: "123 Main St, Anytown, USA",
  phone: "555-1234",
};

let { name, email } = user;
console.log(`Nombre: ${name}, Email: ${email}`);

// Renaming de variables
let { name: nombre, email: mail } = user;
console.log(`Nombre: ${nombre}, Email: ${mail}`);

name = "Andrea";
console.log(user);

user.name = "Andrea2";
console.log(user);

const usuarios = [
  {
    id: 1,
    email: "user@example.com",
    password: "securepassword",
    name: "John Doe",
    address: "123 Main St, Anytown, USA",
    phone: "555-1234",
  },
  {
    id: 2,
    email: "user2@example.com",
    password: "securepassword",
    name: "Pepe Down",
    address: "123 Main St, Anytown, USA",
    phone: "555-1234",
  },
];

//const res = usuarios.map(user => `${user.name}  ${user.email}`); // ["John Doe", "Pepe Down"]
//const res = usuarios.map(user => {name:user.name, email:user.email});
const res = usuarios.map((user) => {
  return { name: user.name, email: user.email };
});
console.log(res);

const [{ name: name1, email: email1 }, { name: name2, email: email2 }] =
  usuarios;

console.log(name1); // John Doe
console.log(name2); // Pepe Down

console.log(email1);
console.log(email2);

// Spread operator

let misConocimientos = [
  "variables",
  "operadores",
  "estructuras de control",
  "funciones",
];

let aprendido = ["rest operator", "spread operator"];

// Concatenar arrays
let misConocimientosAmpliados = [
  ...misConocimientos,
  ...aprendido,
  "otra cosa más",
];

console.log(misConocimientosAmpliados);

//Ejemplo 3 - Mergeando objetos
const user1 = {
  name: "Jen",
  age: 22,
  email:"jen@gmail.com",
  address:"C/micasa 25",
  phone: 787878787
};

const user2 = {
  name: "Andrew",
  location: "Philadelphia",
  phone: 678678678
};

const mergedUsers = { ...user1, ...user2 }; 
console.log(mergedUsers);

// REST
let [a, b, ...datos] = [10, 20, 30, 40, 50];
console.log(a);
console.log(b);
console.log(datos); // [30, 40, 50]

// Sumatorio
// total = 1+2+3+44+55
function add(...datos) { // rest -> [1,2,3,44,55]
    let total = 0;
  
    for (let i = 0; i < datos.length; i++) {
      total += datos[i];
    }
    return total;
  }
  
  console.log(add(1));
  console.log(add(1, 2));
  console.log(  add(1, 2, 3, 44,55,-2,45,33,32));
  
// Ternarios
let esCliente = false;
console.info("El pago son  " + (esCliente ? "10.00€" : "20.00€"));

// Ejemplo 2
let esCliente2 = true;
let esAdulto = true;
console.info(
  esCliente2                  // IF
    ? "Debes pagar 10.00€"
    : esAdulto              // ELSE IF
    ? "Envíe su solicitd"
    : "Sorry, espera a hacerte mayor :)" // ELSE
);