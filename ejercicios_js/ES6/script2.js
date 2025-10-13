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
}

// Llamar a la función

// console.log(getRandomDog());
getRandomDog().then(url_img => {
  const img = `<img src=${url_img}>`;
  document.body.innerHTML += img;
  console.log(url_img);
})

getRandomDog().then(url_img => console.log(url_img)) ;      
