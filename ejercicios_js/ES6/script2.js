function getAndRenderProducts() {
    const url = "https://fakestoreapi.com/products?limit=10";
    return fetch(url)
      .then((response) => response.json()) // Convertir a objeto
      .then((data) => {
        let container = "<section>";
        data.forEach((product) => {
          container += `<article>
                          <img src="${product.image}" alt="${product.title}">
                          <h1>${product.title}</h1>
                          <p>${product.description}</p>
                      </article>`;
        });
        container += "</section>";
  
        document.querySelector("#resultados").innerHTML = container;
        return container;
      })
      .catch((error) => {
        console.error("Error fetching data from fakestoreapi:", error);
        document.querySelector("#resultados").innerHTML = "<h4>Error de descaga</h4>";
      });
  }
  
  document.getElementById("descarga1").addEventListener("click",()=>{
    // Llamada a la función
    getAndRenderProducts()
            .then((data) => console.log(data))
    })



// Forma 3. La función retorna la promesa resultante de llamar a fetch() y controla en la llamada a la función la renderización del objeto

function getProducts() {
    const url = "https://fakestoreapi.com/products?limit=10";
    return fetch(url)
      .then((response) => response.json()) // Convertir a objeto
      .catch((error) => {
        console.error("Error fetching data from fakestoreapi:", error);
      });
}

// Llamada a la función. Devuelve una promesa con los datos de la llamada a la API
//Renderizar datos en el DOM. Utiliza template string para generar los nuevos elementos del DOM


document.getElementById("descarga2").addEventListener("click",()=>{
    getProducts()
        .then((data) => {
        let list = "<ul>";
        data.forEach((product) => {
          list += `<li>${product.title} -- ${product.price}€</li>`;
        });
        list += "</ul>";
      
        document.getElementById("resultados").innerHTML = list;
      });
})

// Asincronía -- fetch() -- HTTP request
// 2.- Declara una función getRandomDog que obtenga una imagen random de una raza.

// 
//  data = {
//   "message": "https://images.dog.ceo/breeds/australian-shepherd/leroy.jpg",
//   "status": "success"
//   }


function getRandomDog(){
  const url = "https://dog.ceo/api/breeds/image/random";
  return fetch(url)
        .then(res => res.json()) // convertir a objeto
        .then(data => data.message) // return de la URL de la imágen
        .catch(data => console.log(data));
}

// Llamar a la función

// console.log(getRandomDog());
getRandomDog().then(url_img => {
  const img = `<img src=${url_img}>`;
  document.body.innerHTML += img;
  console.log(url_img);
})

getRandomDog().then(url_img => console.log(url_img)) ; 

// **IMPORTANTE**: 
// En caso de quedarnos SIN PETICIONES A LA API, podemos cargar el objeto de un fichero externo
function getRandomDog(){
  const url = "./dogs.json";
  return fetch(url)
        .then(res => res.json()) // convertir a objeto
        .then(data => data.message) // return de la URL de la imágen
        .catch(data => console.log(data));
}

// Llamar a la función
getRandomDog().then(url_img => console.log("*******IMG:"+url_img)) ;  


// Llamada anidada a 2 APIs

const rickMortyURL = "https://rickandmortyapi.com/api/character";

/**** Forma 1 -- LLamada a la API anidada ****/
console.time("***timer1***");
fetch("https://rickandmortyapi.com/api/character/1") // Datos de Rick
  .then((res) => res.json())
  .then((rickMortyData) => {
    console.log("HA TERMINADO RICK Y MORTY 1");
    console.log(rickMortyData);
    const episode_url_3 = rickMortyData.episode[2]; // URL tercer episodio donde aparece

    fetch(episode_url_3)
      .then((res) => res.json())
      .then((episode_data) => {
        console.log("HA TERMINADO extracción datos del episodio");
        console.log(episode_data);
        console.log(episode_data.name); // nombre del episodio

        console.timeEnd("***timer1***");
      });
  }); 

// Asincronía async/await con Rick and Morty
async function getCharacterData(){
  try{
    //1 - Extrae datos del primer personaje
    const response1 = await fetch("https://rickandmortyapi.com/api/character/1"); // Rick
    const data1 = await response1.json();

    // Verificar si la respuesta es exitosa
    if (!response1.ok) {
      throw new Error(`Error HTTP - personaje: ${response1.status} - ${response1.statusText}`);
    }

    const episode_url = data1.episode[2]; // Endpoint tercer episodio

    //2 - Extrae datos del episodio 3
    const response2 = await fetch(episode_url+"hola");
    const data2 = await response2.json();

    // Verificar si la respuesta es exitosa
    // if (!response2.ok) {
    //   throw new Error(`Error HTTP - episodio: ${response2.status} - ${response2.statusText}`);
    // }

    return data2.name; // nombre episodio
  }
  catch(error){
    console.log(`ERROR: ${error.stack}`);
  }
}

getCharacterData().then(episode_name => console.log(`Nombre del episodio:${episode_name}`));


/* 9.- Dada una lista de usuarios de github guardada en una array,crea una funcion fetchGithubUsers(userNames) que utilice 'https://api.github.com/users/${name}' para obtener el nombre de cada usuario.
 */

// usernames = ["ana","marta","pepe"] ----map()---> [Promise,Promise,Promise] ---> [fetch(),fetch(),fetch()]
function fetchGithubUsers(usernames) {

  const base_url = "https://api.github.com/users/"; // hay que concatenar username al final

  const promises = usernames
                      .map(name => 
                        fetch(base_url+name) //"https://api.github.com/users/pepe"
                        .then(response => response.json())
                      );
  // Promise.all() termina cuando se han ejecutado todas las promesas
  // Tras ello, se hace return de los datos obtenidos en un array
  return Promise.all(promises); // Cuando termina devuelve[{user_1},{user_2}] de resultados
  }


  const userNames2 = ["rebecadiazmontenegro","luciaaroca"];
  fetchGithubUsers(userNames2)
      .then(users => { // [] de usuarios
          console.log('Todos los usuarios:', users);
          // Para enseñar login y nombre real de cada usuario
          users.forEach(user => {
              console.log(`${user.login}: ${user.name}`);
          });
      })
      .catch(error => {
          console.error("Error al obtener los usuarios:", error);
      });




      // Guardar usuarios en Local Storage
let usuarios = [
  {
    nombre: "John Doe",
    email: "johndoe@example.com",
    mensaje: "Hello, how are you?",
    urlImagen: "https://example.com/johndoe.jpg",
  },
  {
    nombre: "Jane Smith",
    email: "janesmith@example.com",
    mensaje: "Nice to meet you!",
    urlImagen: "https://example.com/janesmith.jpg",
  },
];

// Escribir en Local Storage
localStorage.setItem("usuarios", JSON.stringify(usuarios));

// Añadir un nuevo usuario
let nuevoUsuario = {
  nombre: "Alice Johnson",
  email: "alicejohnson@example.com",
  mensaje: "Looking forward to collaborating!",
  urlImagen: "https://example.com/alicejohnson.jpg",
};

// Leer desde Local Storage
let usuariosGuardados = JSON.parse(localStorage.getItem("usuarios"));
console.log(usuariosGuardados);

usuariosGuardados.push(nuevoUsuario);
localStorage.setItem("usuarios", JSON.stringify(usuariosGuardados));

// Leer nuevamente para verificar el nuevo usuario
let usuariosActualizados = JSON.parse(localStorage.getItem("usuarios"));
console.log(usuariosActualizados);