export default function builderMap(coordinates){
    const map = L.map('map').setView([coordinates.lat, coordinates.log], 19);
            
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
        maxZoom: 20,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map)

    var marker = L.marker([coordinates.lat, coordinates.log]).addTo(map);
}