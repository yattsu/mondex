import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemons } from '../api';

import { Link } from 'react-router-dom';

import { PokemonBox } from './PokemonBox';

export const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonBoxData, setPokemonBoxData] = useState([]);
  
  const pageNumber = useParams().page;

  useEffect(() => {
    (async () => {
      setPokemons(await getPokemons(pageNumber))
    })()
  }, [pageNumber])

  if(pokemons.length === 0) {
    return 'Loading...'
  }

  return(
    <>
      {
        pokemons.map(pokemon => (
          <PokemonBox key={pokemon.name} data={pokemon} />
        ))
      }
    </>
  )
}
