import axios from 'axios'

type PokemonSingleSpecies = {
    name: string
    url: string
}

type GetGenerationByIdReturn = {
    pokemon_species: PokemonSingleSpecies[]
}

type GetRegionByUrl = {
    url: string;
}

export const getGenerationByUrl = ({ url }: GetRegionByUrl) => {
    return axios.get<GetGenerationByIdReturn>(url)
};