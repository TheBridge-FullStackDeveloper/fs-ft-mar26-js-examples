console.log("ejecuta desde fichero JS");

let dato1 = 1;
const dato2 = 1;

console.log(dato1);
// console.log(dato2++);

console.log(++dato1); // 2  dato1 = dato1 + 1
console.log("******************");
console.log(dato1++); //  2 dato1 = dato1 + 1
console.log(dato1); // 3 ¿Dato del superior?

// ¿dato1 nunca cambia? NO

const frutas = ["mango", "pera", "naranja", "platano"];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);

  if (i % 2 == 0)
    // resto de dividir entre 2 devuelva 0
    console.log("fruta par");
}
// frutas -> N elementos -> 0....N-1 posiciones
// frutas -> 4 elementos -> 0....3 posiciones

console.log("************");

for (let i = frutas.length - 1; i >= 0; i--) {
  console.log(frutas[i]);

  if (i % 2 == 0) console.log("fruta par");

  // Imprimir tercera letra de cada fruta
  // Búsqueda bidimensional
  const fruta = frutas[i]; // string
  const letra3 = fruta[2]; // busca en el string 3 pos
  console.log(letra3);
  console.log(frutas[i][2]);
}

// Input -> ["mango","pera","naranja","platano"];
// Output -> ["m:a:n:g:o","p:e:r:a","n:a:r:a:n:j:a","p:l:a:t:a:n:o"];
let resultado = [];

for (let i = 0; i < frutas.length; i++) {
  // itera frutas
  const fruta = frutas[i];
  //console.log(fruta);
  let text = ""; // fruta formateada m:a:n:g:o
  for (let j = 0; j < fruta.length; j++) {
    // itera cada letra de fruta (string)
    //console.log(fruta[j]+":");

    if (j === fruta.length - 1) {
      text += fruta[j]; // ultima posición
    } else {
      text += fruta[j] + ":"; // text = text + "a:"
    }
  }
  //   console.log(text);
  resultado.push(text);
}
console.log(resultado);

 //12.- Crear la función pintarArray que acepte como argumento un array y devuelva una cadena de texto 
 // Array entrada: [0, 1, 2] 
 // String salida: '[0, 1, 2]'

 function pintarArray(array){
    let text = "'[";
    for (let i = 0; i < array.length; i++) {
        if (i === array.length - 1) {
            text+=array[i];
        }
        else{
            text+=array[i]+", ";
        }   
    }
    return text+"]'";
 }

 console.log(pintarArray([1,44,2,"hola",-1]));


 // Parámetros:
    // prefijo numérico 1-3 cifras: 34 034 51 353 352
    // teléfono 9 cifras 657656765 876876876
// Return: "Llamando a +34 678678678" o "Error en datos"

 function llamar(prefijo, telefono){
    console.log(prefijo,telefono);
    // prefijo 1-3 cifras

    const prefix_l = prefijo.toString().length;
    const phone_l = telefono.toString().length;

    if(
        (typeof prefijo === "number" && prefix_l >=1 && prefix_l <=3)
        &&
        (typeof telefono==="number" && phone_l == 9)
    ){
        console.log("prefijo y telefono OK");
        return `Llamando a +${prefijo} ${telefono}`;
    }else {
        return "Error en datos";
    }
 }

 // Ejecutar función
 console.log(llamar(34,876876876));
 console.log(llamar(347777333,876876876));
 console.log(llamar(34,876876876787878787878787878));
 console.log(llamar(34,"queso"));
 console.log(llamar("ola",890890890));

 let respuesta = llamar(34,876876876);
 console.log("La respuesta ha sido: "+respuesta);
 
 
 
