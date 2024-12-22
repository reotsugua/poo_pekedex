import { Pokemon } from "./model/Pokemon.model.js";
import { ServicePokemon } from "./service/Pokemon.service.js";

// VARIAVEIS GLOVAIS

// ELEMENTS DOM
const selectPokemon = document.getElementById('select-options');
const name = document.getElementById('pokemon-name');
const image = document.getElementById('pokemon-image');
const loading = document.getElementById('loading-image');
const height = document.getElementById('pokemon-height');
const experience = document.getElementById('pokemon-experience');
const abilities = document.getElementById('pokemon-abilities');

// FUNÇÔES UTILITARIAS
const processSelectedPokemon = async (selectedValue) => {
    return await new ServicePokemon().getPokemon(selectedValue);
}

const createPokemon = (dataPokemon) => {
    const { name, abilities, height, base_experience, sprites } = dataPokemon;
    return new Pokemon(name, abilities, height, base_experience, sprites);
}

const renderPokemon = pokemon => {
    image.src = pokemon.sprites;
    name.textContent = pokemon.name;
    height.textContent = `${pokemon.height} m`;
    experience.textContent = pokemon.baseExperience;
    abilities.textContent = pokemon.abilities;
    loading.style.display = "none";
    image.style.display = "block";
}
const startLoading = () => {
    image.style.display = "none";
    loading.style.display = "block";
    name.textContent = 'Carregando...';
    height.textContent = '...';
    experience.textContent = '...';
    abilities.textContent = '...';
}

// FUNÇÔES PRINCIPAIS
const changePokemon = async event => {
    startLoading();
    
    try {
        const pokemon = createPokemon(await processSelectedPokemon(event.target.value));
        renderPokemon(pokemon)
        

    } catch (error) {
        alert(error.message);
    }

}

// EVENTOS
selectPokemon.addEventListener('change', changePokemon);




