import { getRegionByName, getRegion } from './regionDomain';

describe('regionDomain', () => {
    describe('getRegion', () => {
        it('should return a list of regions', async () => {
            const regions = await getRegion();
            expect(regions.data.results).toHaveLength(10);
        });
    });
});

describe('regionDomain', () => {
    describe('getRegionByName', () => {
        it('should return a region', async () => {
            const region = await getRegionByName({ name: 'kanto' });
            expect(region.data.main_generation.url).toBe('https://pokeapi.co/api/v2/generation/1/');
        });
    });
});