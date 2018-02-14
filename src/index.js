console.log('Hello from your index.js file');

const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = 'pk.eyJ1IjoicmVhcmQ5NiIsImEiOiJjamRtZTJ0enowbGNyMzNvOWwxdW03cXhnIn0._m0kRxdVQl-o42F1dnI4Fg';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});
