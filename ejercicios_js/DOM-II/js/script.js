import pokemons from "./pokemons.js";

console.log(pokemons);

// 4. Pintar en pantalla

// for
// forEach
// for of

// UL de cada tipo
const fuego = document.getElementById("fuego");
const agua = document.getElementById("agua");
const electrico = document.getElementById("electrico");
const planta = document.getElementById("planta");
const normal = document.getElementById("normal");

// Fuego

// forEach -> Arrays
// pokemons.forEach((pokemon) => {
//   if (pokemon.tipo === "Fuego") {
//     fuego.innerHTML += `		
//         <li class="card">
//             <header class="cardHeader">
//                     <h3>NOMBRE: ${pokemon.nombre}</h3>
//                     <p>hp: ${pokemon.hp}</p>
//             </header>
//             <div class="image">
//                     <img src=${pokemon.imagen_front} alt=${pokemon.nombre}/>
//             </div>  
//                     <p>TIPO: ${pokemon.tipo}</p>
// 		</li>`;
//   } else if (pokemon.tipo === "Agua") {
//     agua.innerHTML += `		
//         <li class="card">
//             <header class="cardHeader">
//                     <h3>NOMBRE: ${pokemon.nombre}</h3>
//                     <p>hp: ${pokemon.hp}</p>
//             </header>
//             <div class="image">
//                     <img src=${pokemon.imagen_front} alt=${pokemon.nombre}/>
//             </div>  
//                     <p>TIPO: ${pokemon.tipo}</p>
// 		</li>`;
//   } else if (pokemon.tipo === "Electrico") {
//     electrico.innerHTML += `		
//         <li class="card">
//             <header class="cardHeader">
//                     <h3>NOMBRE: ${pokemon.nombre}</h3>
//                     <p>hp: ${pokemon.hp}</p>
//             </header>
//             <div class="image">
//                     <img src=${pokemon.imagen_front} alt=${pokemon.nombre}/>
//             </div>  
//                     <p>TIPO: ${pokemon.tipo}</p>
// 		</li>`;
//   }
// });

//   for (const pokemon of pokemons) {
//     if (pokemon.tipo === "Fuego") {
//       fuego.innerHTML += `
//           <li class="card">
//               <header class="cardHeader">
//                       <h3>NOMBRE: ${pokemon.nombre}</h3>
//                       <p>hp: ${pokemon.hp}</p>
//               </header>
//               <div class="image">
//                       <img src=${pokemon.imagen_front} alt=${pokemon.nombre}/>
//               </div>
//                       <p>TIPO: ${pokemon.tipo}</p>
//           </li>`;
//     }
//   };

// Datos filtrados por tipo
// Parámetro: type -> Agua, Fuego, Electrico
// return: Array de pokemons filtrado por tipo
function getPokemonsByType(type) {
  const pokemonsFilter = [];
  pokemons.forEach((pokemon) => {
    if (pokemon.tipo === type) {
      pokemonsFilter.push(pokemon);
    }
  });
  return pokemonsFilter;
}

console.log(getPokemonsByType("Fuego"));
console.log(getPokemonsByType("Agua"));



// UL de cada tipo
// const fuego = document.getElementById("fuego");
// const agua = document.getElementById("agua");
// const electrico = document.getElementById("electrico");
// const planta = document.getElementById("planta");
// const normal = document.getElementById("normal");


// renderPokemons
// param: selector, pokemonsFilter
// return: undefined
function renderPokemons(selector, pokemonsFilter){

    for (const pokemon of pokemonsFilter) {
        selector.innerHTML += `		
        <li class="card">
            <header class="cardHeader">
                    <h3>NOMBRE: ${pokemon.nombre}</h3>
                    <p>hp: ${pokemon.hp}</p>
            </header>
            <div class="image">
                    <img src=${pokemon.imagen_front} alt=${pokemon.nombre}/>
            </div>  
                    <p>TIPO: ${pokemon.tipo}</p>
        </li>`;
    }
}

// const pokemons_fuego = getPokemonsByType("Fuego"); // [p1_fuego,p2_fuego,p3_fuego,.....]
// renderPokemons(fuego,pokemons_fuego);

// const pokemons_agua = getPokemonsByType("Agua");
// renderPokemons(agua,pokemons_agua);

// const pokemons_electrico = getPokemonsByType("Eléctrico");
// renderPokemons(electrico,pokemons_electrico);

// const pokemons_planta = getPokemonsByType("Planta");
// renderPokemons(planta ,pokemons_planta);

// const pokemons_normal = getPokemonsByType("Normal");
// renderPokemons(normal,pokemons_normal);


// renderPokemons
// param: selector, type -> "Fuego", "Agua", etc....
// return: undefined
function renderPokemons2(selector, type){

    const pokemonsFilter = getPokemonsByType(type); // Llamar función filtrar

    for (const pokemon of pokemonsFilter) {
        selector.innerHTML += `		
        <li class="card">
            <header class="cardHeader">
                    <h3>NOMBRE: ${pokemon.nombre}</h3>
                    <p>hp: ${pokemon.hp}</p>
            </header>
            <div class="image">
                    <img src=${pokemon.imagen_front} alt=${pokemon.nombre}/>
            </div>  
                    <p>TIPO: ${pokemon.tipo}</p>
        </li>`;
    }
}

renderPokemons2(planta ,"Planta");
renderPokemons2(fuego ,"Fuego");
renderPokemons2(electrico ,"Eléctrico");
renderPokemons2(agua ,"Agua");
renderPokemons2(normal ,"Normal");
