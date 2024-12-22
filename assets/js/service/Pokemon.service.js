export class ServicePokemon {
    #baseUrl = 'https://pokeapi.co/api/v2';

    async getPokemon(name) {
        const response  = await fetch(`${this.#baseUrl}/pokemon/${name}`);

        if (!response.ok) throw new Error(`Erro ao obter dados do pokemon, tente novamente!`);

        const data = await response.json();
        return data;
    }
}