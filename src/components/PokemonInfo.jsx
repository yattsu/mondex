import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Flex, Heading, Image, Text, Badge } from '@chakra-ui/react';

import { getPokemonDataById } from '../api';

export const PokemonInfo = () => {
  const params = useParams();
  const [data, setData] = useState(null);

  const types = {
    "normal": "gray.400",
    "fighting": "gray.500",
    "flying": "blue.200",
    "poison": "green.500",
    "ground": "yellow.800",
    "rock": "gray.600",
    "bug": "yellow.400",
    "ghost": "gray.200",
    "steel": "gray.300",
    "fire": "red.400",
    "water": "blue.400",
    "grass": "green.500",
    "electric": "yellow.300",
    "psychic": "purple.400",
    "ice": "blue.300",
    "dragon": "orange.400",
    "dark": "gray.800",
    "fairy": "pink.300",
    "unknown": "gray.100",
    "shadow": "purple.600"
  }

  useEffect(() => {
    (async () => {
      setData(await getPokemonDataById(params.id));
    })()
  }, []);

  if(!data) {
    return 'loading...';
  }

  return(
    <Flex
      w='full'
      direction={['column', 'row', 'row', 'row']}
      bg='gray.50'
      color='gray.700'
    >
      <Image src={data.sprites.other['official-artwork'].front_default}
        w={['lg', 'md', 'md', 'lg']}
        border='1px solid'
        borderColor='gray.300'
        rounded='lg'
        overflow='hidden'
      />
      <Flex
        direction='column'
        w='full'
        textAlign='center'
      >
        <Heading
          bg='gray.50'
          h='fit-content'
          justify='center'
          textAlign='center'
          my='5'
        >
          {data.name[0].toUpperCase() + data.name.slice(1)}
        </Heading>
        <Heading size='md'>{data.types.length > 1 ? 'Types' : 'Type'}</Heading>
        <Flex
          wrap='wrap'
          justify='space-evenly'
        >
          {
            data.types.map(type => (
              <Badge
                key={type.type.name}
                bg={types[type.type.name]}
                color={type.type.name == 'dark' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, .6)'}
              >
                {type.type.name}
              </Badge>
            ))
          }
        </Flex>
      </Flex>
    </Flex>
  )
}
