import { BaseApi } from '../domains';

export type GetLocationsByNameParams = {
    name: string;
};

type Areas = {
    name: string;
    url: string;
};

export type GetLocationsByNameReturn = {
    areas: Areas[];
};

export const getLocationsByName = ({ name }: GetLocationsByNameParams) =>
    BaseApi.get<GetLocationsByNameReturn>(`/location/${name}`);
