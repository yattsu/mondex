import { useState, useEffect } from 'react';
import { getPokemons } from '../api';

import { PokemonBox } from './PokemonBox';

export const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    (async () => {
      setPokemons(await getPokemons())
    })()
  }, [])

  if(pokemons.length === 0) {
    return 'Loading...'
  }

  return(
    <>
      {
        pokemons.results.map(pokemon => (
          <PokemonBox key={pokemon.name} data={pokemon} />
        ))
      }
    </>
  )
}
