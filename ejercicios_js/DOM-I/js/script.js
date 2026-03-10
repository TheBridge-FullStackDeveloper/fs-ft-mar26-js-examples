console.log("Hola!");

// Ejercicio 1

// Editar
document.getElementById("titulo").innerText = "Cambio titulo";


document.getElementById("titulo").innerHTML = "Hola! Soy un <span>innerHTML<span>";

// Ejercicio 2
const p = document.getElementById("parrafo");

p.style.color = "#fff";
p.style.backgroundColor = "aquamarine";
p.style.fontSize = "30px";

// Ejercicio 3

const boton = document.getElementById("boton");
const p2 = document.getElementById("cambioParrafo");

// Escuchar el evento "click"
// Crear función de callback
boton.addEventListener("click", function(){
    p2.innerText = "Hola! Estoy cambiando!!";
    document.body.style.backgroundColor = "blue";
});

// Ejercicio 4

const boton2 = document.getElementById("cambioImagen");
const imagen = document.getElementById("imagen");

boton2.addEventListener("click",()=> {
    imagen.src = "https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/cloud-data-migration/approved/images/MariaDB_Logo.f3145dd3e6e24c106f4a59b3e69b47c8bc46e827.png";
})

// Ejercicio 5
const mouse = document.getElementById("mouse");

mouse.addEventListener("mouseover",() => {
    mouse.style.backgroundColor = "pink";
});

mouse.addEventListener("mouseout",() => {
    mouse.style.backgroundColor = "red";
});


// Ejercicio 6
const frases = document.querySelectorAll(".frases");

// for (let i = 0; i < frases.length; i++) {
//     const frase = frases[i];
//     frase.addEventListener('click',() => {
//         frase.innerText = "hola!!!!";
//         frase.innerText = frase.innerText.toUpperCase();
//     }) 
// }

for (const frase of frases) {
    frase.addEventListener('click',() => {
        frase.innerText = "hola!!!!";
        frase.innerText = frase.innerText.toUpperCase();
    })     
}

// Ejercicio 7
const enlace = document.getElementById("enlace");
const msg = document.getElementById("msg");

enlace.addEventListener("click", (event) => {
    console.log(event);
    
    event.preventDefault(); // Anula el enlace
    msg.innerText = "no puedes pasar!!!"
})

// Ejercicio 8
const h2 = document.querySelector("article h2");
const p3 = document.querySelector("article p");
const img = document.querySelector("article img");

h2.addEventListener("click",()=>{
    h2.innerText = "Hechizo lanzado";
})

// p3.addEventListener("click",()=>{
//     p3.style.backgroundColor = "green";
//     p3.style.color = "blue";
// })

p3.addEventListener("click",()=>{
    p3.classList.add("clickado");
})





// BONUS

const input = document.getElementById("input");
const buttonList = document.getElementById("buttonList");
const lista = document.getElementById("listado");

buttonList.addEventListener("click", () => {

    if (input.value.trim() !="") {

        lista.innerHTML += `<li>${input.value}</li>`; 
        alert(`Has enviado: ${input.value}`);
        input.value = "";
    }
    else{
        console.log("Rellena el input,please");
    }
})

// CREAR ELEMENTOS desde JS

document.getElementById("boton1").addEventListener("click",()=> {
    const div1 = document.getElementById("div1");

    // div1.innerHTML = ""; // Limpiar el div

    // ***Forma 1 (moderna)
    div1.innerHTML += "<p>Texto desde JS 1</p>";
    div1.innerHTML += `<p class="js-1">Texto desde JS 2. Son las ${new Date().toLocaleTimeString()}</p>`;
    div1.innerHTML += `<p class="js-1">${4+65}</p>`;

    // Cambiar contenido
    const p1 = document.getElementById("p1");
    p1.innerText = "Editado desde JS!!!";

    
    // ***Forma 2 (clásica)
    const newP = document.createElement("p"); // <p>
    newP.textContent = "Texto desde JS 3";   // <p>Texto desde JS 3</p>
    div1.appendChild(newP);

    const newP2 = document.createElement("p"); // <p>
    newP2.textContent = "Texto desde JS 4";   // <p>Texto desde JS 4</p>
    newP2.setAttribute("class","js-1");      // <p class="js-1">Texto desde JS 4</p>
    div1.appendChild(newP2);

    // replaceChild - Cambiar nodos
    let oldChild = document.getElementById("p2");

    // Nuevo elemento
    const newChild = document.createElement("p"); // <p>
    newChild.textContent = "Editado desde JS!!!";   // <p>Editado desde JS!!!</p>

    div1.replaceChild(newChild,oldChild); // Reemplazar


    // Editar nodo existente
    const p3 = document.getElementById("p3");
    p3.textContent = "Editado desde JS!!!";
});

document.getElementById("boton2").addEventListener("click", function () {
    const datos = [
      { marca: "BMW", peso: 1600, color: "rojo" },
      { marca: "BMW", peso: 1600, color: "azul" },
      { marca: "BMW", peso: 1600, color: "verde" },
      { marca: "BMW", peso: 1600, color: "amarillo" },
    ]; // viene de un "servidor externo"
    // Template string
    const lista = `<section>
                    <article>
                      <p>${datos[0].marca}</p>
                      <p>${datos[0].peso}</p>
                      <p>${datos[0].color}</p>
                    </article>
                    <article>
                      <p>${datos[1].marca}</p>
                      <p>${datos[1].peso}</p>
                      <p>${datos[1].color}</p>
                    </article>
                    <article>
                      <p>${datos[2].marca}</p>
                      <p>${datos[2].peso}</p>
                      <p>${datos[2].color}</p>
                  </article>
                  <article>
                    <p>${datos[3].marca}</p>
                    <p>${datos[3].peso}</p>
                    <p>${datos[3].color}</p>
                </article>
  
                  </section>`;
    document.getElementById("div2").innerHTML = lista;
  });

  document.getElementById("boton3").addEventListener("click", function () {
    const datos = [
      { marca: "BMW", peso: 1600, color: "rojo" },
      { marca: "BMW", peso: 1600, color: "azul" },
      { marca: "BMW", peso: 1600, color: "verde" },
      { marca: "BMW", peso: 1600, color: "amarillo" },
    ]; // viene de un "servidor externo"
    // Template string
    let lista = `<section>`;


    for (let i = 0; i < datos.length; i++) {
        const article = `
                    <article>
                      <p>${datos[i].marca}</p>
                      <p>${datos[i].peso}</p>
                      <p>${datos[i].color}</p>
                    </article>`
        console.log(article);

        lista += article;
    }
    lista += `</section>`;
    document.getElementById("div3").innerHTML = lista;
  });

  // Borrar lista
  document.getElementById("boton4borrar").addEventListener("click",()=>{
    document.getElementById("div3").innerHTML = "";
  })




