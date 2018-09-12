var map = L.map('mapid').setView([45.56112, 18.69054], 14);

// OpenStreetMap Style
var OpenStreetMap_HOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
}).addTo(map);

// Basic OpenStreetMap Style
//L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(map);

IconStyleOne = L.icon({
	iconUrl: 'dist/icon/marker-green.png'
});

IconStyleTwo = L.icon({
	iconUrl: 'dist/icon/marker-red.png'
});

L.marker([45.56212, 18.67943]).addTo(map)
  .bindPopup('Conference Hotel<br/>Hotel Osijek')
  .openPopup()
  .setIcon(IconStyleTwo);

L.marker([45.55877, 18.68108]).addTo(map)
	.bindPopup('Faculty of Humanities and Social Sciences')
	.openPopup()
	.setIcon(IconStyleTwo);

L.marker([45.55571, 18.70815]).addTo(map)
	.bindPopup('Conference Venue<br/>Faculty of Civil Engineering')
	.openPopup()
	.setIcon(IconStyleOne);
