export default function toast(message){
    const card = document.createElement("div")
    const toastMessage = document.createElement("p")
    toastMessage.innerHTML = message

    const icone = document.createElement("img")
    icone.src = "img/icones/error.png"

    card.appendChild(icone)
    card.appendChild(toastMessage)
    
    const father = document.getElementsByClassName("box-form")[0]
    father.appendChild(card)
    card.classList.add("toast-error")
    card.classList.add("toast-show")

    setTimeout(()=>{
        card.classList.remove("toast-show")

        toast.addEventListener("transitionend", () => father.removeChild(card));
    },2000)


}