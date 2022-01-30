import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Flex, Image, Text, Skeleton, SkeletonText } from '@chakra-ui/react';

import { getPokemonData } from '../api';

export const PokemonBox = ({data}) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    (async () => {
      setPokemonData(await getPokemonData(data.url));
    })()
  }, []);

  return(
    <Link to={'/pokemon/' + pokemonData?.id}>
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
        <Skeleton fadeDuration={2} isLoaded={pokemonData}>
          <Image w='24' h='24' src={pokemonData?.sprites.front_default} />
        </Skeleton>
        <SkeletonText fadeDuration={2} noOfLines={2} isLoaded={pokemonData}>
          <Text
            textAlign='center'   
          >
            {pokemonData ?
              pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1)
                : 'loading'
            }
          </Text>
        </SkeletonText>
      </Flex>
    </Link>
  )
}
