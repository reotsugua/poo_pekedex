import { processSelectedPokemon, processSelectedGeneration, createPokemon } from "./core/controller/Pokemons.controller.js";
import { 
    populatePokemonsOfGen,
    startLoading,
    renderPokemon
 } from "./shared/utils.js";

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
const elements = {
    image: document.getElementById('pokemon-image'),
    name: document.getElementById('pokemon-name'),
    height: document.getElementById('pokemon-height'),
    experience: document.getElementById('pokemon-experience'),
    abilities: document.getElementById('pokemon-abilities'),
    loading: document.getElementById('loading-image'),
};


// FUNÇÔES PRINCIPAIS
const changeGenerations = async event => {
    const { results: pokemonsMinInfo } = await processSelectedGeneration(query[event.target.value]);

    populatePokemonsOfGen(pokemonsMinInfo.map(({ name }) => name), selectPokemon);
}

const changePokemon = async event => {
    startLoading(elements);

    try {
        const pokemon = createPokemon(await processSelectedPokemon(event.target.value));
        renderPokemon(pokemon, elements);
    } catch (error) {
        alert(error.message);
    }
}


// EVENTOS
selectGeneration.addEventListener('change', changeGenerations);
selectPokemon.addEventListener('change', changePokemon);




