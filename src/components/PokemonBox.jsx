import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Flex, Image, Text } from '@chakra-ui/react';

import { getPokemonData } from '../api';

export const PokemonBox = ({data}) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    (async () => {
      setPokemonData(await getPokemonData(data.url));
    })()
  }, []);

  if(!pokemonData) {
    return 'loading'
  }

  return(
    <Link to={'/pokemon/' + pokemonData.id}>
      <Flex
        _hover={{
          shadow: 'md'
        }}
        cursor='pointer'
        direction='column'
        bg='gray.200'
        justify='center'
        alignItems='center'
        border='1px solid'
        borderColor='gray.300'
        rounded='md'
      >
        <Image src={pokemonData.sprites.front_default} />
        <Text
          textAlign='center'   
        >
          {pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1)}
        </Text>
      </Flex>
    </Link>
  )
}
