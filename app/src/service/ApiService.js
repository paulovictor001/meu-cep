export default class ApiService{

    async get(url){
        return await fetch(url, {method:"GET"})
    }
}