import { getRegionByName, getRegion } from './regionDomain';

describe('regionDomain', () => {
    describe('getRegion', () => {
        it('should return a list of regions', async () => {
            const regions = await getRegion();
            expect(regions.data.results).toHaveLength(10);
        });
    });
    describe('getRegionByName', () => {
        it('should return a list of locations', async () => {
            const result = await getRegionByName({ name: 'kanto' });
            expect(result.data.locations).toHaveLength(93);
        });
    });
});
