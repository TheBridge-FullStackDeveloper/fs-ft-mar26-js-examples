// 9.- Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.

// onlyUniques("gato", "pollo", "cerdo", "cerdo"); //["gato", "pollo", "cerdo"]
// onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]

function onlyUniques(...argumentos) {
  // argumentos -> [1, 1, 2, 2, 3, 6, 7, 8]
  let result = [];

  for (let i = 0; i < argumentos.length; i++) {
    if (!result.includes(argumentos[i])) {
      result = [...result, argumentos[i]]; // result.push(argumentos[i])
    }
  }
  return result;
}

console.log(onlyUniques("gato", "pollo", "cerdo", "cerdo", "pollo"));

// onlyUniques("gato", "pollo", "cerdo", "cerdo"); //["gato", "pollo", "cerdo"]
// onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]

// 9.- Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.

// indexOf(elem) --> returns index o -1 if not found
//  n -> ["gato", "pollo", "cerdo", "cerdo","pollo"]

//n.indexOf("gato") -> 0
//n.indexOf("gato") === 0 --> TRUE

//n.indexOf("pollo") -> 1
//n.indexOf("pollo") === 1 --> TRUE

//n.indexOf("cerdo") -> 2
//n.indexOf("cerdo") === 2 --> TRUE

//n.indexOf("cerdo") -> 2
//n.indexOf("cerdo") === 3 --> FALSE

//n.indexOf("pollo") -> 1
//n.indexOf("pollo") === 4 --> FALSE

const onlyUniques2 = (...n) =>
  n.filter((elem, index) => n.indexOf(elem) === index);
console.log(onlyUniques2("gato", "pollo", "cerdo", "cerdo", "pollo"));

// 10.- Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.
// combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]); // [3, 6, 7, 8, 2, 7, 3, 1]
// combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]

// [    [3, 6, 7, 8], [2, 7, 3, 1]   ]  --> arrays

// []
// [] + [3, 6, 7, 8] -> [3, 6, 7, 8]
// [3, 6, 7, 8] + [2, 7, 3, 1] -> [3, 6, 7, 8 , 2, 7, 3, 1]

// [    [3, 6, 7, 8], [2, 7, 3, 1]   ]  --> arrays
function combineAllArrays(...arrays) {
  let result = [];
  for (let i = 0; i < arrays.length; i++) {
    result = [...result, ...arrays[i]];
  }
  return result;
}

console.log(combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]));

// 10.- Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.

const arr6 = [1, 5, 7, 8, 9];
const arr7 = [8, 5, 37, 8, 9];
const arr8 = [8, 5, 37, 8, 9];

// acumulador _> []
// actual  -> [1, 5, 7, 8, 9]

// acumulador+= actual -> [...[],...[1, 5, 7, 8, 9]] -> [1, 5, 7, 8, 9]

// acumulador -> [1, 5, 7, 8, 9]
// actual  -> [8, 5,37, 8, 9]

// acumulador+= actual -> [...[1, 5, 7, 8, 9],...[8, 5,37, 8, 9]] -> [1, 5, 7, 8, 9, 8, 5,37, 8, 9]

//recibe cualquier array y argumentos

function combineAllArrays2(...arrays) {
  return arrays.reduce((acumulador, actual) => [...acumulador, ...actual], []); //queremos que nos devuelva un solo array
}
console.log(combineAllArrays2(arr6, arr7, arr8)); //llamamos a la función

const combineAllArrays3 = (...arrays) =>
  arrays.reduce((acumulador, actual) => [...acumulador, ...actual], []); //queremos que nos devuelva un solo array

console.log(combineAllArrays3(arr6, arr7, arr8)); //llamamos a la función

//  11.- Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.

function sumAndSquare(...numeros) {
  let total = 0;
  for (let i = 0; i < numeros.length; i++) {
    total += numeros[i] ** 2;
  }
  return total;
}

console.log(sumAndSquare(5, 6, 2));
console.log(sumAndSquare(5, 6, 33, 33, 22, 11, 24, 53));

function sumAndSquare2(...argumentos) {
  return argumentos.reduce((acc, num) => acc + num ** 2, 0);
}

const sumAndSquare3 = (...argumentos) => {
  return argumentos.reduce((acc, num) => acc + num ** 2, 0);
};

const sumAndSquare4 = (...argumentos) =>
  argumentos.reduce((acc, num) => acc + num ** 2, 0);

// MAP, FILTER, REDUCE
//   2.- Dado el array foodList con valor ['Pizza', 'Ramen', 'Paella', 'Entrecot'], generar un segundo array que consiga generar de salida el resultado esperado.

foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];

result2 = foodList.map((food) => {
  if (food === "Pizza") return `Como soy de Italia, amo comer ${food}`;
  else if (food === "Ramen") return `Como soy de Japón, amo comer ${food}`;
  else if (food == "Paella") return `Como soy de Valencia, amo comer ${food}`;
  else return `Aunque no como carne, el Entrecot es sabroso`;
});

console.log(result2);

let foodList2 = ["Pizza", "Ramen", "Paella", "Entrecot"];

let phrases = {
  Pizza: "Como soy de Italia, amo comer Pizza",
  Ramen: "Como soy de Japón, amo comer Ramen",
  Paella: "Como soy de Valencia, amo comer Paella",
  Entrecot: "Aunque no como carne, el Entrecot es sabroso",
};
let result3 = foodList2.map((food) => phrases[food]);

// 5.- Dado el array foodList2, genera un segundo array result5 que filtre los platos veganos y saque una sentencia como la del ejemplo

const foodList3 = [
  {
    name: "Tempeh",
    isVeggie: true,
  },
  {
    name: "Cheesbacon burguer",
    isVeggie: false,
  },
  {
    name: "Tofu burguer",
    isVeggie: true,
  },
  {
    name: "Entrecot",
    isVeggie: false,
  },
];

// ['Que rico Tempeh me voy a comer!',
//     'Que rica Tofu burguer me voy a comer!']

let result4 = foodList3
  .filter(food => food.isVeggie)
  .map(food => {
    if (food.name === "Tempeh") 
        return "Que rico Tempeh me voy a comer!";
    else 
        return "Que rica Tofu burguer me voy a comer!";
  });

  console.log(result4);

  let result5 = foodList3
  .filter(food => food.isVeggie)
  .map(food => 
        food.name === "Tempeh"?
        "Que rico Tempeh me voy a comer!"
        :"Que rica Tofu burguer me voy a comer!"
   );

  console.log(result5);

//   9.- Obtener el monto total de los elementos que pertenecen a catergory "code" en el siguiente array.

const books = [
    {
      name: ' JS for dummies',
      author: 'Emily A. Vander Veer',
      price: 20,
      category: 'code'
    },
    {
      name: 'Don Quijote de la Mancha',
      author: 'Cervantes',
      price: 14,
      category: 'novel'
    },
    {
      name: 'Juego de tronos',
      author: 'George R. Martin',
      price: 32,
      category: 'Fantasy'
    },
    {
      name: 'javascript the good parts',
      author: 'Douglas Crockford',
      price: 40,
      category: 'code'
    }
  ];
  // Resultado --> 60

  const result6 = books
                .filter(book => book.category === "code")
                .reduce((acumulador, actual) => acumulador + actual.price,0)

console.log(result6);

const results7 = books.reduce((acc, libro) => {
        //Ternario
        return libro.category === 'code'? 
                acc + libro.price// si es true -> acc + price en este caso
                : acc;//else solo me devuelves el acc
    }, 0);

console.log(results7);
  

  
