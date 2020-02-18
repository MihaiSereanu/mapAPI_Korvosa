// Value in map units
var mapSW = [-84, -174];
var mapNE = [84, 174];

// Initialize Map Object
var map = L.map('map', [0,0]).setView([0,0], 0)

// Tile references
L.tileLayer('korvosa/{z}/{x}/{y}.png', {
  minZoom: 2,
  maxZoom: 5,
  maxNativeZoom: 5,
  crs: L.CRS.Simple,
  noWrap: true,
  continuousWorld: true,
  bounds: [ [mapSW], [mapNE] ]
}).addTo(map)

// Value in pixels
var mapSW_pixels = [0, 8192]
var mapNE_pixels = [8192, 0]
map.setMaxBounds(new L.LatLngBounds(
  map.unproject(mapSW_pixels, map.getMaxZoom()),
  map.unproject(mapNE_pixels, map.getMaxZoom()),
));

var imageBounds = [[-85, -180], [85, 180]];
var image = L.imageOverlay('korvosa/korvosa square overlay.png', imageBounds).addTo(map)
map.fitBounds(imageBounds)
