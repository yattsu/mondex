import axios from 'axios';

const baseUrl = (endpoint) => `https://pokeapi.co/api/v2/${endpoint}`;

export const getPokemons = async (pageNumber) => {
  const limit = 50;
  const result = await axios.get(baseUrl(`pokemon/?limit=${limit}&offset=${pageNumber * limit - limit}`));

  return result.data.results;
}

export const getAllPokemons = async () => {
  const result = await axios.get(baseUrl(`pokemon/?limit=1500`));

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

export const getMoveDataByUrl = async (url) => {
  const result = await axios.get(url);

  return result.data
}

export const getEvolutionChain = async (url) => {
  const speciesResult = await axios.get(url);
  const result = await axios.get(speciesResult.data.evolution_chain.url);

  return result.data
}
