let map;

(function paintMap(){
  //Crear un mapa en el div con id "map"
  //let map = L.map('map').setView([51.505, -0.09], 13); // zoom sobre UK
  map = L.map("map").setView([20, 0], 2); // Zoom general sobre el planeta

  // let Esri_NatGeoWorldMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
  // 	attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
  // 	maxZoom: 16
  // }).addTo(map);

  var Stadia_AlidadeSatellite = L.tileLayer(
    "https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}",
    {
      minZoom: 0,
      maxZoom: 20,
      attribution:
        '&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      ext: "jpg",
    }
  ).addTo(map);

  let OpenRailwayMap = L.tileLayer(
    "https://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png",
    {
      maxZoom: 19,
      attribution:
        'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Map style: &copy; <a href="https://www.OpenRailwayMap.org">OpenRailwayMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
    }
  ).addTo(map);

  //Agregar marcador
  const marker = L.marker([51.5, -0.09]).bindPopup("cheese house").addTo(map);

  //Agregar circulo
  const circle = L.circle([51.508, -0.11], {
    color: "yellow",
    fillColor: "#f03",
    fillOpacity: 0.4,
    radius: 500,
  })
    .bindPopup("circle house")
    .addTo(map);

  //Agregar poligono
  const polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047],
  ])
    .bindPopup("polygon club")
    .addTo(map);

  //Agregar popup
  const popup = L.popup()
    .setLatLng([51.513, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(map);
})(); // IIFE - Función autoejecutable

paintMap();

async function getData() {
  // Crear el spinner
  const spinner = document.getElementById("spinner");

  try {
    const res = await fetch(
      "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
    );
    const data = await res.json();

    // Esperar 3 segundos (por ejemplo para mostrar el spinner aunque la respuesta llegue rápido)
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Ocultar el spinner
    //spinner.remove();
    spinner.style.visibility="hidden";

    //paintMap(); // pintar mapa

    return data.features;
  } catch (e) {
    console.log(e);
  }
}
getData().then((data) => {
  console.log(data);
  //Agregar marcador

  data.forEach((pin) => {
    //Tratamiento de datos
    const coordinates_pin = [
      pin.geometry.coordinates[1],
      pin.geometry.coordinates[0],
    ];

    // Representación de datos
    const marker = L.marker(coordinates_pin)
      .bindPopup(
        `${pin.properties.title}<br><button class='fav-btn'>Añadir a favoritos</button>`
      )
      .addTo(map);

    marker.on("popupopen", () => {
      const favButton = document.querySelector(".fav-btn");
      if (favButton) {
        favButton.addEventListener("click", () => {
          // Lógica para añadir el objeto a array de favoritos de user en firebase
          //...
          //...
          console.log(pin); // imprime el objeto seleccionado

          //addToFavorites(pin) // creada por ti

          alert(`favorito guardado: ${pin.properties.title}`);
        });
      }
    });
  });
});
