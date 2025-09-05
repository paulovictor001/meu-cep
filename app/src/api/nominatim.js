import ApiService from "../service/ApiService.js";
import UrlBuilder from "../service/UrlBuilder.js";

export default async function fetchCoordinatesByAddress(addressData){
    const apiService = new ApiService()
    const urlNominatim = new UrlBuilder("https://nominatim.openstreetmap.org/search");
    urlNominatim.addParam("state", addressData.estado);
    urlNominatim.addParam("city", addressData.localidade);
    urlNominatim.addParam("county", addressData.bairro);
    urlNominatim.addParam("street", addressData.logradouro);
    urlNominatim.addParam("country", "Brasil");
    urlNominatim.addParam("format", "json");
    
    const responseNominatim = await apiService.get(urlNominatim.getUrl());
    const dataNominatim = await responseNominatim.json();
    
    const latitude = dataNominatim[0].lat;
    const longitude = dataNominatim[0].lon;
    
    return {lat:latitude, log:longitude}
}