import ApiService from "../service/ApiService.js";
import UrlBuilder from "../service/UrlBuilder.js";

export default async function fetchAddressByCep(cep){
    const apiService = new ApiService()
    const urlViaCep = new UrlBuilder("https://viacep.com.br/ws/");
    urlViaCep.addPath(cep);
    urlViaCep.addPath("json")

    const responseViaCEp = await apiService.get(urlViaCep.getUrl())
    const addressData = await responseViaCEp.json()

    if (await addressData.erro){
        throw new Error("CEP não encontrado")
    }

    return addressData;
}