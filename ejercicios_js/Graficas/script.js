var data = {
    // A labels array that can contain any sort of values
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    // Our series array that contains series objects or in this case series data arrays
    series: [
      [5, 2, 4, 2, 0],
      [4, 5, 6, 3, 2]
    ]
  };


  // As options we currently only set a static size of 300x200 px. We can also omit this and use aspect ratio containers
// as you saw in the previous example
    var options = {
        // width: 300,
        // height: 200,
        fullWidth: true,
        chartPadding: {
          right: 40,
          left: 40
        }
    };

  // Create a new line chart object where as first parameter we pass in a selector
  // that is resolving to our chart container element. The Second parameter
  // is the actual data object.
  new Chartist.Bar('.ct-chart', data, options);


// Data Analytics
/*   
1. Obtención de datos: excel,CSV,API,etc... 
2. Tratamiento de datos: limpiar, ordenar, tratar datos hasta que
aporten el valor que buscamos: map, filter, reduce, sort, etc...
3. Representación de datos: gráficas, en la web, PDF, Mapas, excel, etc..
NOTA: los datos debe representar de manera inequívoca los resultados
*/

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
  
//   getData();

document.getElementById("descargar").addEventListener("click",() => {
    Swal.fire({
        title: "Deseas descargar los datos de la API?",
        text: "Vamos a ver la gráfica!!!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, descargar!",
        cancelButtonText: "Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
            // Descargar datos y pintar gráfica
            getData();
          Swal.fire({
            title: "Descarga exitosa!",
            text: "A continuación puedes ver la gráfica .",
            icon: "success"
          });
        }
      });
})

