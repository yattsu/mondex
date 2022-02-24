import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemons } from '../api';

import { PokemonBox } from './PokemonBox';

export const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  
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
          <PokemonBox key={pokemon.name} id={pokemon.url.split('/')[6]} />
        ))
      }
    </>
  )
}
