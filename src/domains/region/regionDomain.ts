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

export type GetRegionByNameReturn = {
    main_generation: {
        url: string;
    }
}

export const getRegion = () => BaseApi.get<GetRegionReturn>(`/region`);

export const getRegionByName = ({ name }: GetRegionByNameParams) => BaseApi.get<GetRegionByNameReturn>(`/region/${name}`);