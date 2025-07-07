// Leaflet Script for the Map

var map = L.map('map').setView([43.63895326717817, -79.381906197839], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([43.63895326717817, -79.381906197839]).addTo(map)

marker.bindPopup("<b>Hello!</b><br>This is our location!").openPopup();