const form = document.getElementById("formulario");
const limpiarBtn = document.getElementById("limpiar");
const campos = ["nombre", "email", "edad"];

//  Guardar cambios del formulario solo al cambiar un campo 
campos.forEach(id => { // "nombre", "email", "edad"
  const input = document.getElementById(id);
  input.addEventListener("change", guardarFormulario);
});

//  Función para guardar los datos como objeto 
function guardarFormulario() {
  const formData = {};
  campos.forEach(id => formData[id] = document.getElementById(id).value);
  localStorage.setItem("form_data", JSON.stringify(formData));
}

//  Enviar formulario 
form.addEventListener("submit", e => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const edad = document.getElementById("edad").value.trim();

  if (!nombre || !email || !edad) {
    alert("Completa todos los campos.");
    return;
  }

  let registros = JSON.parse(localStorage.getItem("registros")) || [];
  registros.push({ nombre, email, edad });
  localStorage.setItem("registros", JSON.stringify(registros));

  limpiarFormulario();
  mostrarRegistros();
});

//  Mostrar registros 
function mostrarRegistros() {
  const tbody = document.querySelector("#tabla tbody");
  tbody.innerHTML = "";

  const registros = JSON.parse(localStorage.getItem("registros")) || [];

  registros.forEach(reg => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${reg.nombre}</td>
      <td>${reg.email}</td>
      <td>${reg.edad}</td>
    `;
    tbody.appendChild(fila);
  });
}

//  Cargar formulario cacheado desde localStorage 
function cargarFormulario() {
  const data = JSON.parse(localStorage.getItem("form_data"));
  if (data) {
    campos.forEach(id => {
      const input = document.getElementById(id);
      input.value = data[id] || "";
    });
  }
}

//  Limpiar formulario cacheado 
limpiarBtn.addEventListener("click", limpiarFormulario);

function limpiarFormulario() {
  form.reset();
  localStorage.removeItem("form_data");
}

//  Cargar registros y formulario al iniciar 
document.addEventListener("DOMContentLoaded", () => {
    mostrarRegistros();
    cargarFormulario();
  });
  