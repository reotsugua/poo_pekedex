import { Pokemon } from "./model/Pokemon.model.js";
import { ServicePokemon } from "./service/Pokemon.service.js";

// VARIAVEIS GLOBAIS
const query = {
    'Gen1': '?limit=151&offset=0',
    'Gen2': '?limit=100&offset=151',
    'Gen3': '?limit=135&offset=251',
    'Gen4': '?limit=107&offset=386',
    'Gen5': '?limit=156&offset=493',
    'Gen6': '?limit=72&offset=649',
    'Gen7': '?limit=88&offset=721',
    'Gen8': '?limit=89&offset=809',
    'others': '?limit=32&offset=1025',
    'mega': '?limit=58&offset=1057',
    'alola': '?limit=70&offset=1115',
    'Galar': '?limit=20&offset=1185',
    'Gmax': '?limit=48&offset=1205',
    'hisui': '?limit=21&offset=1253',
    'others2': '?limit=500&offset=1274',
}

// ELEMENTS DOM
const selectGeneration = document.getElementById('select-gens');
const selectPokemon = document.getElementById('select-options');
const name = document.getElementById('pokemon-name');
const image = document.getElementById('pokemon-image');
const loading = document.getElementById('loading-image');
const height = document.getElementById('pokemon-height');
const experience = document.getElementById('pokemon-experience');
const abilities = document.getElementById('pokemon-abilities');

// FUNÇÔES UTILITARIAS
const processSelectedPokemon = (selectedValue) => {
    return new ServicePokemon().getPokemon(selectedValue);
}

const createPokemon = (dataPokemon) => {
    const { name, abilities, height, base_experience, sprites } = dataPokemon;
    return new Pokemon(name, abilities, height, base_experience, sprites);
}

const renderPokemon = pokemon => {
    image.src = pokemon.sprites;
    name.textContent = pokemon.name ?? '-';
    height.textContent = `${pokemon.height ?? '-'} m`;
    experience.textContent = pokemon.baseExperience ?? '-';
    abilities.textContent = pokemon.abilities ?? '-';
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

const populatePokemonsOfGen = arr => {
    selectPokemon.innerHTML = '<option value="" selected disabled>Selecione</option>';

    const options = arr.map(pokemon => new Option(pokemon.toUpperCase(), pokemon.toLowerCase()));
    selectPokemon.append(...options);
}

// FUNÇÔES PRINCIPAIS
const changeGenerations = async event => {
    const { results: pokemonsMinInfo } = await processSelectedPokemon(query[event.target.value]);

    populatePokemonsOfGen(pokemonsMinInfo.map(({ name }) => name));
}

const changePokemon = async event => {
    startLoading();

    try {
        const pokemon = createPokemon(await processSelectedPokemon(event.target.value));
        renderPokemon(pokemon);
    } catch (error) {
        alert(error.message);
    }
}


// EVENTOS
selectGeneration.addEventListener('change', changeGenerations);
selectPokemon.addEventListener('change', changePokemon);




