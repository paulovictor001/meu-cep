export default function listComponentAndrress(data){

    return Object.entries(data).map(([key, value]) =>{
        return (
            `
            <div class="info_enderoco">
                <label>${key}</label>
                <p>${value || "sem"}</p>
            </div>
            `
        )
    }).join('')
}
