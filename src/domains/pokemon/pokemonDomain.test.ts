import { getPokemonDetails, getPokemons } from './pokemonDomain';

describe('pokemonDomain', () => {
    describe('getPokemonDetails', () => {
        it('should return a pokemon', async () => {
            const pokemon = await getPokemonDetails({ pokemonName: 'pikachu' });
            expect(pokemon.data.name).toBe('pikachu');
        });
    });
});

describe('pokemonDomain', () => {
    describe('getPokemons', () => {
        it('should return a list of pokemons', async () => {
            const pokemons = await getPokemons({ limit: 10, offset: 0 });
            expect(pokemons.data.results).toHaveLength(10);
        });
    });
});

