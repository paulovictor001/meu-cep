import isValidCep from "../utils/isValidCep.js"
import AddressInformationCard from "../components/AddressInformationCard.js"
import fetchAddressByCep from "../api/viaCep.js"
import fetchCoordinatesByAddress from "../api/nominatim.js"
import builderMap from "../utils/builderMap.js"
import toast from "../components/toast.js"


const form = document.getElementById("form")
const message_error = document.getElementsByClassName("message-error")[0]
const card_info_endereco = document.getElementsByClassName("card-info-endereco")
const input_cep = document.getElementById("icep")
const card = document.getElementById("card")
const box_infos_endereco = document.getElementsByClassName("box-infos-endereco")
const divmap = document.getElementsByClassName("box-map")


form.addEventListener("submit", async (event)=>{
    event.preventDefault();

    const cep = document.getElementById("icep").value
    
    if (!isValidCep(cep)){
       showCepError();
        return;
    }
    
    try{
        const addressData = await fetchAddressByCep(cep)
        showAddressCard(addressData)
        card.scrollIntoView({behavior:"smooth"});
        
        const coordinates = await fetchCoordinatesByAddress(addressData);
        showMap(coordinates)
    }
    catch (error) {
        if (error instanceof Error){
            if (error.message === "CEP não encontrado"){
                 toast(error);
            }
        }
    }

    
})

input_cep.addEventListener("input",event =>{
    clearInputError();
    let valueInput = event.target.value.replace(/\D/g,"").substring(0,8)
    event.target.value = valueInput
})

input_cep.addEventListener("focus",event =>{
    input_cep.classList.remove("input-error")
    message_error.innerHTML = ""
})

function showAddressCard(addressData){
    card_info_endereco[0].style.display = "block";
    box_infos_endereco[0].innerHTML = AddressInformationCard(addressData)
}

function showMap(coordinates){
    divmap[0].classList.add("box-map-ativo")
    builderMap(coordinates);
}

function showCepError(){
    input_cep.classList.add("input-error")
        message_error.innerHTML = "formato inválido"
}

function clearInputError(){
    input_cep.classList.remove("input-error");
    message_error.innerHTML = "";
}