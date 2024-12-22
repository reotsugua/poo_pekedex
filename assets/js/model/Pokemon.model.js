export class Pokemon {
    #name;
    #abilities;
    #height;
    #baseExperience;
    #sprites;

    constructor(name, abilities, height, baseExperience, sprites) {
        this.#name = name;
        this.#abilities = abilities;
        this.#height = height;
        this.#baseExperience = baseExperience;
        this.#sprites = sprites;
    }

    get name(){
        const firstUppercase = this.#name.charAt(0).toUpperCase();
        const restOfString = this.#name.slice(1);
        return firstUppercase + restOfString;
    }

    get abilities() {
        return this.#abilities.map(item => item.ability.name).join(", ");
    }

    get height() {
        return this.#height;
    }

    get baseExperience() {
        return this.#baseExperience;
    }

    get sprites() {      
        return this.#sprites.other['official-artwork'].front_default;
        // return this.#sprites.other.home.front_default;
    }

    getSummary() {
        return `${this.#name} is ${this.#height} meters tall, with ${this.#baseExperience} base experience.`;
    }
}