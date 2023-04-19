import axios from 'axios'
import { BaseApi } from '../domains'

type LocationArea = {
    name: string
    url: string
}

type GetLocationsByIdReturn = {
    locations: LocationArea[]
}

type GetLocationsByUrl = {
    url: string;
}

export type GetLocationsByNameParams = {
    name: string;
}


type Areas = {
    name: string,
    url: string
};

export type GetLocationsByNameReturn = {
    areas: Areas[],
}

export const getLocationsByName = ({ name }: GetLocationsByNameParams) => BaseApi.get<GetLocationsByNameReturn>(`/location/${name}`);