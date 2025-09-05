export default class UrlBuilder{
    #base;

    constructor(url){
        this.#base = new URL(url);
    }

    addPath(path){
        if (!this.#base.pathname.endsWith('/')){
            this.#base.pathname + "/";
        }

        this.#base.pathname += path.replace("/^\/+/", '') + '/'
        
    }

    addParam(key, value){
        this.#base.searchParams.append(key, value)
    }

    getUrl(){
        return this.#base.toString();
    }
}