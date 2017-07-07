var mymap = L.map('mapid').setView([28.61, 77.2], 6);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'pk.eyJ1IjoiaGl0ZXlhZGF2IiwiYSI6ImNqNHRmaWV0eTA3a3gzMnI0eXlqdTF3ejcifQ.EH7i5oO_JT81KYUPYKG_JQ'
}).addTo(mymap)