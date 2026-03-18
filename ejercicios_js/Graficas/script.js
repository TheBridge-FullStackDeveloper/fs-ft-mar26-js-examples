let options = {
  fullWidth: true,
  chartPadding: {
    right: 20,
    left: 20,
  },
  width: "90%",
  height: "500px", // Incrementa la altura de la gráfica
};

let data = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  series: [
    [12, 9, 7, 8, 5],
    [2, 1, 3.5, 7, 3],
    [1, 3, 4, 5, 6],
  ],
};

new Chartist.Line(".ct-chart", data, options);

// Data Analytics
// 1. Obtención de datos: excel, CSV, JSON, API
// 2. Tratamiento de datos: limpiar, ordenar, eliminar, etc... Data treatment
// 3. Representación de datos: Gráficas, mapas, PDF, Web

function paintGraph(dataset) {
  // 2 - Tratamiento de datos

  // Forma 1. Ineficiente con 2 iteraciones
  // const listIdProducts = dataset.map((product) => `prod${product.id}`);
  // const listPrices = dataset.map((product) => product.price);

  // Forma 2. Eficiente con 1 iteración
  const listIdProducts = [];
  const listPrices = [];
  dataset.forEach((product) => {
    listIdProducts.push(`prod${product.id}`);
    listPrices.push(product.price);
  });

  // 3 - Representación de datos en una gráfica
  var data = {
    labels: listIdProducts,
    series: [listPrices],
  };

  var options = {
    seriesBarDistance: 15,
  };

  var responsiveOptions = [
    [
      "screen and (min-width: 641px) and (max-width: 1024px)",
      {
        seriesBarDistance: 10,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value;
          },
        },
      },
    ],
    [
      "screen and (max-width: 640px)",
      {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          },
        },
      },
    ],
  ];

  new Chartist.Bar(".precios", data, options, responsiveOptions);
}

async function getData() {
  try {
    // 1 - Obtención de datos
    const response = await fetch("https://fakestoreapi.com/products?limit=10");

    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Recurso no encontrado (404)");
      } else if (response.status === 500) {
        throw new Error("Error en el servidor (500)");
      } else {
        throw new Error(`Error HTTP: ${response.status}`);
      }
    }

    const data = await response.json();
    console.log(data);

    // Tratamiento + representar gráficamente los datos. Pasos 2-3
    paintGraph(data);
  } catch (error) {
    // Manejar el error de manera personalizada
    if (error.message.includes("404")) {
      console.error("Error: No se encontró el recurso solicitado.");
    } else if (error.message.includes("500")) {
      console.error("Error: Problemas con el servidor.");
    } else {
      console.error("Hubo un problema:", error.message);
    }
  }
}

getData();
