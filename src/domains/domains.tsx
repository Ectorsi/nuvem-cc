import axios from 'axios';

export const BaseApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
})

// 'https://pokeapi.co/api/v2/pokemon/?limit=10' => Listagem

// `https://pokeapi.co/api/v2/pokemon/${pokemonName}` => Detalhes

