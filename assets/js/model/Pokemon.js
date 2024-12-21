export class Pokemon {
    #name;

    constructor(name){
        this.#name = name
    }

    get name(){
        const firstUppercase = this.#name.charAt(0).toUpperCase();
        const restOfString = this.#name.slice(1);
        return firstUppercase + restOfString;
    }
}