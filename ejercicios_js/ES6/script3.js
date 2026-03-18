// Programación asíncrona
// fetch(), then() devuelven promesas

// fetch("https://rickandmortyapi.com/api/character/3") // llamada a la API
//   .then((res) => res.json()) // Convertir a objeto la respuesta
//   .then((data) => console.log(data)); // Utilizar el objeto respuesta

document.getElementById("descarga1").addEventListener("click", () => {
  fetch("https://rickandmortyapi.com/api/character/2")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("resultados").innerHTML = `
            <img src="${data.image}" alt="${data.name}">
            <p>${data.name} Especie:${data.species}</p>
        `;
    });
});

// Llamada a la API, generar un section + article + renderizar datos en el DOM y devolver un string con el resultado del section

function getAndRenderProducts() {
  const url = "https://fakestoreapi.com/products?limit=10";
  return fetch(url)
    .then((response) => response.json()) // Convertir a objeto
    .then((data) => {
      console.log(data);
      let container = "<section>";

      data.forEach((product) => {
        container += `<article>
                          <img src="${product.image}" alt="${product.title}">
                          <h1>${product.title}</h1>
                          <p>${product.description}</p>
                      </article>`;
      });

      container += "</section>";

      //document.body.innerHTML += container;
      return container;
    })
    .catch((error) => {
      console.error("Error fetching data from fakestoreapi:", error);
    });
}

// Llamada a una función ASINCRONA
//console.log(getAndRenderProducts());
getAndRenderProducts().then((data) => console.log(data));

function getAndRenderProducts2() {
  const url = "https://fakestoreapi.com/products?limit=3";
  fetch(url)
    .then((response) => response.json()) // Convertir a objeto
    .then((data) => {
      let list = "<ul>";
      data.forEach((product) => {
        list += `<li>${product.title} -- ${product.price}€</li>`;
      });
      list += "</ul>";

      document.getElementById("resultados").innerHTML = list;
    })
    .catch((error) => {
      console.error("Error fetching data from fakestoreapi:", error);
    });
}

document.getElementById("descarga2").addEventListener("click", () => {
  // Llamada a la función
  getAndRenderProducts2();
});

//  La función retorna la promesa resultante de llamar a fetch() y controla en la llamada a la función la renderización del objeto

function getProducts(number) {
  const url = `https://fakestoreapi.com/products?limit=${number}`;
  return fetch(url)
    .then((response) => response.json()) // Convertir a objeto
    .then((data) => {
      // sacar titulo de cada producto
      return data.map((producto) => producto.title);
    })
    .catch((error) => {
      console.error("Error fetching data from fakestoreapi:", error);
    });
}

// Llamada a la función. Devuelve una promesa con los datos de la llamada a la API
getProducts(3).then((data) => console.log(data));
//console.log(getProducts(3));

// 1.- Declara una funcion getAllBreeds que devuelva un array de strings con todas las razas de perro.

// https://dog.ceo/api/breeds/list/all
function getAllBreeds() {
  return fetch("./breeds_all.json")
    .then((res) => res.json())
    .then((data) => Object.keys(data.message))
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

getAllBreeds().then((data) => console.log(data));

// 2.- Declara una función getRandomDog que obtenga una imagen random de una raza.

// **IMPORTANTE**:
// En caso de quedarnos SIN PETICIONES A LA API, podemos cargar el objeto de un fichero externo

function getRandomDog() {
  const url = "./dogs.json";
  return fetch(url)
    .then((res) => res.json()) // convertir a objeto
    .then((data) => data.message) // return de la URL de la imágen
    .catch((data) => console.log(data));
}

getRandomDog().then((data) => console.log(data));

// 4.- Declara una funcion getAllImagesByBreed2(breed) que devuelva las imágenes de la raza pasada por el argumento

function getAllImagesByBreed2(breed) {
  return fetch(`https://dog.ceo/api/breed/${breed}/images`)
    .then((res) => res.json())
    .then((data) => data.message)
    .catch((error) => {
      console.error("Error fetching data from fakestoreapi:", error);
    });
}

getAllImagesByBreed2("komondor").then((razas) => console.log(razas));

// 7. Crea una función getAndPrintGitHubUserProfile(username) que contenga una petición a la API para obtener información de ese usuario y devuelva un string que represente una tarjeta HTML como en el ejemplo, la estructura debe ser exactamente la misma:

function getAndPrintGitHubUserProfile(user) {
  return fetch(`https://api.github.com/users/${user}`)
    .then((person) => person.json())
    .then((username) => {
      const card = `<section>
          <img src="${username.avatar_url}" alt="${username.name}">
          <h1>${username.name}</h1>
          <p>Public repos: ${username.public_repos}</p>
        </section>`;
      document.body.innerHTML += card;
      return card;
    });
}

getAndPrintGitHubUserProfile("marcojgh352").then((data) => console.log(data));

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

/*********** Forma 3 ************/

console.time("***timer2***");
const rickURL = "https://rickandmortyapi.com/api/character/1";
const mortyURL = "https://rickandmortyapi.com/api/character/2";

Promise.all([
  fetch(rickURL).then((res) => res.json()),
  fetch(mortyURL).then((res) => res.json()),
]).then((data) => {
  // data -> [{rick},{morty}]
  const rickData = data[0];
  const mortyData = data[1];
  console.log(rickData);
  console.log(mortyData);
  console.timeEnd("***timer2***");
});

// return Promise
async function showEpisode() {
  try {
    // LLamada 1
    let response = await fetch("https://rickandmortyapi.com/api/character/1");
    let data = await response.json();

    const episode_url_3 = data.episode[2]; // URL Episodio 3

    // Llamada 2
    let response2 = await fetch(episode_url_3);
    let episode_data = await response2.json(); // datos del episodio listo para usar

    return episode_data.name;
  } catch (error) {
    // Manejar errores de red o del servidor
    console.error("Hubo un problema con la solicitud:", error.message);
  }
}

// Llamar a la función
showEpisode().then((data) => console.log(data));

// 9.- Dada una lista de usuarios de github guardada en una array,crea una funcion fetchGithubUsers(userNames) que utilice 'https://api.github.com/users/${name}' para obtener el nombre de cada usuario.

function fetchGithubUsers(userNames) {
  const promises = userNames.map((name) =>
    fetch(`https://api.github.com/users/${name}`).then((res) => res.json())
  ); // Array de promesas [p1,p2,p3,p4]

  return Promise.all(promises) // [p1,p2,p3,p4]
    .catch((error) => {
      console.log("Error:", error);
    });
}

fetchGithubUsers(["PabloVecilla", "octocat"]).then((data) => {
  data.forEach((user) => {
    console.log("Nombre:", user.login);
    console.log("Repos URL:", user.repos_url);
  });
});

// Con async/await

async function fetchGithubUsers2(userNames) {
  try {
    const promises = userNames.map((name) =>
      fetch(`https://api.github.com/users/${name}`).then((res) => res.json())
    );
    const users = await Promise.all(promises);
    return users;
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchGithubUsers2(["PabloVecilla", "octocat"]).then((data) => {
  data.forEach((user) => {
    console.log(user);
    console.log("Nombre:", user.login);
    console.log("Repos URL:", user.repos_url);
  });
});
