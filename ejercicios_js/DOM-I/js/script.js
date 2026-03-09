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
// PENDIENTE

// BONUS

const input = document.getElementById("input");
const buttonList = document.getElementById("buttonList");

buttonList.addEventListener("click", () => {
    alert(`Has enviado: ${input.value}`);
})
