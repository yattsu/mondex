import axios from 'axios';

const baseUrl = (endpoint) => `https://pokeapi.co/api/v2/${endpoint}?limit=10`;

export const getPokemons = async () => {
  const result = await axios.get(baseUrl('pokemon'));

  return result.data;
}

export const getPokemonData = async (endpoint) => {
  const result = await axios.get(endpoint);

  return result.data;
}

export const getPokemonDataById = async (id) => {
  const result = await axios.get(baseUrl('pokemon/' + id));

  return result.data
}
