export default function isValidCep(cep){
    if (!cep){
        return false;
    }

    if (cep.length !== 8){
        return false;
    }

    return true;
}