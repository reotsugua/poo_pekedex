const populatePokemonsOfGen = (arr, element) => {
    element.innerHTML = '<option value="" selected disabled>Selecione</option>';

    const options = arr.map(pokemon => new Option(pokemon.toUpperCase(), pokemon.toLowerCase()));
    element.append(...options);
};

const startLoading = (elements) => {
    const { image, name, height, experience, abilities, loading } = elements;
    image.style.display = "none";
    loading.style.display = "block";
    name.textContent = 'Carregando...';
    height.textContent = '...';
    experience.textContent = '...';
    abilities.textContent = '...';
};

const renderPokemon = (pokemon, elements) => {
    const { image, name, height, experience, abilities, loading } = elements;
    image.src = pokemon.sprites;
    name.textContent = pokemon.name ?? '-';
    height.textContent = `${pokemon.height ?? '-'} m`;
    experience.textContent = pokemon.baseExperience ?? '-';
    abilities.textContent = pokemon.abilities ?? '-';
    loading.style.display = "none";
    image.style.display = "block";
};

export { populatePokemonsOfGen, startLoading, renderPokemon };
