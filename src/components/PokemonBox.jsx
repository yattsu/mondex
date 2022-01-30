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
        position='relative'
        cursor='pointer'
        direction='column'
        justify='center'
        alignItems='center'
        borderColor='gray.300'
        bg='gray.50'
        shadow='sm'
        rounded='lg'
        pt='5'
        px='5'
        pb='2'
      >
        <Skeleton fadeDuration={2} isLoaded={pokemonData}>
          <Text
            position='absolute'
            bg='yellow.300'
            top='0'
            right='0'
            roundedTopRight='lg'
            roundedBottomLeft='lg'
            fontWeight='bold'
            color='gray.700'
            fontSize='sm'
            px='2'
          >
            #{pokemonData?.id}
          </Text>
          <Image w='24' h='24' src={pokemonData?.sprites.front_default} />
        </Skeleton>
        <SkeletonText fadeDuration={2} noOfLines={2} isLoaded={pokemonData}>
          <Text
            textAlign='center'   
            fontWeight='bold'
            color='gray.500'
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
