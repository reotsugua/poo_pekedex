import { ServicePokemon } from "../service/Pokemon.service.js";
import { Pokemon } from "../model/Pokemon.model.js";

const processSelectedPokemon = (selectedValue) => {
    return new ServicePokemon().getPokemon(selectedValue);
}

const processSelectedGeneration = processSelectedPokemon;

const createPokemon = (dataPokemon) => {
    const { name, abilities, height, base_experience, sprites } = dataPokemon;
    return new Pokemon(name, abilities, height, base_experience, sprites);
}

export { processSelectedPokemon, processSelectedGeneration, createPokemon };