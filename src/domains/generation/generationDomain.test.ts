import { getGenerationByUrl } from './generationDomain'

describe('getGenerationByUrl', () => {
    it('should return a generation', async () => {
        const generation = await getGenerationByUrl({ url: 'https://pokeapi.co/api/v2/generation/1/' });
        expect(generation.data.pokemon_species).toHaveLength(151);
    });
});