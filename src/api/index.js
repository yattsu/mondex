import axios from 'axios';

const baseUrl = (endpoint) => `https://pokeapi.co/api/v2/${endpoint}`;

export const getPokemons = async (pageNumber) => {
  const limit = 20;
  const result = await axios.get(baseUrl(`pokemon/?limit=${limit}&offset=${pageNumber * limit - limit}`));

  return result.data.results;
}

export const getPokemonData = async (endpoint) => {
  const result = await axios.get(endpoint);

  return result.data;
}

export const getPokemonDataById = async (id) => {
  const result = await axios.get(baseUrl('pokemon/' + id));

  return result.data
}
