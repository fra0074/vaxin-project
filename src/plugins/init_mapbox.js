import mapboxgl from 'mapbox-gl';

const initMapbox = () => {
  const mapElement = document.getElementById('map');

  if (mapElement) { // only build a map if there's a div#map to inject into
    mapboxgl.accessToken = "pk.eyJ1IjoiZnJhMDA3NCIsImEiOiJjanRyNG9wd3Mwa21jNDRyMHV4MW1kZzhkIn0.blzNxpTbYGf8ODCOngGb7A";
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [12.496366, 41.902782], // starting position
      zoom: 6 // starting zoom
    });
    map.addControl(new mapboxgl.NavigationControl());
  }
};

export { initMapbox };