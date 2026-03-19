let map = L.map("map").setView([51.505, -0.09], 13);

  // Pintar una capa de leaflet
  /* L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map); */

var OpenTopoMap = L.tileLayer(
    "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
    {
      maxZoom: 17,
      attribution:
        'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
    }
  ).addTo(map);

  var OpenRailwayMap = L.tileLayer(
    "https://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png",
    {
      maxZoom: 19,
      attribution:
        'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Map style: &copy; <a href="https://www.OpenRailwayMap.org">OpenRailwayMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
    }
  ).addTo(map);



function paintMap1() {
  // Pintar un marcador
  var marker = L.marker([51.5, -0.09]).addTo(map);

  // Circulo
  var circle = L.circle([51.508, -0.11], {
    color: "red",
    fillColor: "#f03",
    fillOpacity: 0.1,
    radius: 500,
  }).addTo(map);

  var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047],
  ]).addTo(map);

  // Popup - mensaje emergente
  marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
  circle.bindPopup("I am a circle.");
  polygon.bindPopup("I am a polygon.");

  // popup sin marcador
  var popup = L.popup()
    .setLatLng([51.513, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(map);

  // Eventos en el mapa
  function onMapClick(e) {
    //     console.log(e);
    //   alert("You clicked the map at " + e.latlng);
    //   console.log("You clicked the map at " + e.latlng);
    const { lat, lng } = e.latlng;

    // DOM
    document.getElementById(
      "position"
    ).innerHTML = `You clicked the map at: ${lat},${lng}`;

    //POPUP
    popup
      .setLatLng(e.latlng)
      .setContent("You clicked the map at " + e.latlng.toString())
      .openOn(map);
  }

  map.on("click", onMapClick);
}


async function getData(){
    try{
        const res = await fetch("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson");
        const data = await res.json();
        return data.features;
    }
    catch(e){
        console.log(e);
    }
}
getData().then(data => {
    
    console.log(data);
    //Agregar marcador

    data.map(pin => {
        //Tratamiento de datos
        const coordinates_pin = [pin.geometry.coordinates[1], pin.geometry.coordinates[0]];

        // Representación de datos
        const marker = L.marker(coordinates_pin)
            .bindPopup(`${pin.properties.title}<br><button class='fav-btn'>Añadir a favoritos</button>`)
            .addTo(map);

        marker.on('popupopen', () => {
            const favButton = document.querySelector('.fav-btn');
            if (favButton) {
                favButton.addEventListener('click', () => {
                    alert('favorito guardado');
                });
            }
        });
    });

});
