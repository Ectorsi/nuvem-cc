import { BaseApi } from '../domains'


type Region = {
    name: string,
    url: string
}

type GetRegionReturn = {
    results: Region[]
}

export type GetRegionByNameParams = {
    name: string;
}

type Location = {
    name: string,
    url: string
};

export type GetRegionByNameReturn = {
    locations: Location[],
}

export const getRegion = () => BaseApi.get<GetRegionReturn>(`/region`);

export const getRegionByName = ({ name }: GetRegionByNameParams) => BaseApi.get<GetRegionByNameReturn>(`/region/${name}`);