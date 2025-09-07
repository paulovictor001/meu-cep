let map;
let maker;

export default function builderMap(coordinates){
    console.log(map)
    if (!map){
        map = L.map('map').setView([coordinates.lat, coordinates.log], 19);
                
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
            maxZoom: 20,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map)
    
        maker = L.marker([coordinates.lat, coordinates.log]).addTo(map);
        console.log("criou")
    }
    else{
        map.setView([coordinates.lat,coordinates.log], 19)
        maker.setLatLng([coordinates.lat, coordinates.log])
    }
}
